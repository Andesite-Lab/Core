import { type BlobClient, ContainerClient } from '@azure/storage-blob';
import EventEmitter from 'events';
import { Readable } from 'stream';

import { CoreError } from '#/error/coreError';
import { STORAGE_KEY_ERROR } from '#/error/key';
import type { Blob } from '#/types/data/blob';
import type { BlobInfo } from '#/types/data/blobInfo';

export interface AzureContainerClientOptions {
    /**
     * The connection string for the azure storage
     */
    connectionString: string;
    /**
     * The container name
     */
    containerName: string;
    /**
     * Enable debug mode, allow {@link AzureContainerClient} to emit log
     */
    debug?: boolean;
}

export class AzureContainerClient extends EventEmitter {
    private readonly _containerClient: ContainerClient;

    private readonly _debug: boolean;

    public constructor(options: AzureContainerClientOptions) {
        super();
        this._debug = options.debug ?? false;
        this._containerClient = new ContainerClient(options.connectionString, options.containerName);
    }

    public async findBlobs(): Promise<(Blob & BlobInfo)[]> {
        try {
            const azureBlobs = this._containerClient.listBlobsFlat();
            const blobs: (Blob & BlobInfo)[] = [];
            for await (const blob of azureBlobs)
                blobs.push({
                    name: blob.name,
                    size: blob.properties.contentLength ?? 0,
                    contentType: blob.properties.contentType,
                    metadata: blob.metadata,
                    lastModified: blob.properties.lastModified,
                    tags: blob.tags,
                    stream: await this._downloadBlob(this._containerClient.getBlobClient(blob.name))
                });
            if (this._debug)
                this.emit('log', {
                    message: `Find ${blobs.length} blobs from ${this._containerClient.accountName}/${this._containerClient.containerName}`
                });
            return blobs;
        } catch (error) {
            throw new CoreError({
                key: STORAGE_KEY_ERROR.STORAGE_AZ_FIND_BLOBS_FAILED,
                cause: {
                    accountName: this._containerClient.accountName,
                    containerName: this._containerClient.containerName,
                    error
                }
            });
        }
    }

    public async findBlob(name: string): Promise<Blob & BlobInfo> {
        try {
            const blob = this._containerClient.getBlobClient(name);
            if (!await blob.exists())
                throw new CoreError({
                    key: STORAGE_KEY_ERROR.STORAGE_AZ_BLOB_NOT_FOUND,
                    cause: {
                        accountName: this._containerClient.accountName,
                        containerName: this._containerClient.containerName,
                        blobName: name
                    }
                });
            const properties = await blob.getProperties();
            const { tags } = await blob.getTags();
            const { metadata, contentLength, contentType, lastModified } = properties;

            if (this._debug)
                this.emit('log', {
                    message: `Find blob ${name} from ${this._containerClient.accountName}/${this._containerClient.containerName}`
                });

            return {
                name: blob.name,
                size: contentLength ?? 0,
                contentType,
                metadata: metadata && Object.keys(metadata).length > 0 ? metadata : undefined,
                lastModified,
                tags: Object.keys(tags).length > 0 ? tags : undefined,
                stream: await this._downloadBlob(blob)
            };
        } catch (error) {
            if (error instanceof CoreError)
                throw error;
            throw new CoreError({
                key: STORAGE_KEY_ERROR.STORAGE_AZ_FIND_BLOB_FAILED,
                cause: {
                    accountName: this._containerClient.accountName,
                    containerName: this._containerClient.containerName,
                    blobName: name,
                    error
                }
            });
        }
    }

    public async createBlob(
        blob: Blob,
        blobInfo: BlobInfo
    ): Promise<void> {
        try {
            // await this._containerClient.uploadBlockBlob(blobInfo.name, blob.stream, blobInfo.size, {
            //     blobHTTPHeaders: {
            //         blobContentType: blobInfo.contentType ?? 'application/octet-stream'
            //     },
            //     ...blobInfo.metadata && Object.keys(blobInfo.metadata).length > 0 && { metadata: blobInfo.metadata },
            //     ...blobInfo.tags && Object.keys(blobInfo.tags).length > 0 && { tags: blobInfo.tags },
            //     onProgress: (progress) => {
            //         if (this._debug)
            //             this.emit('log', {
            //                 message: `Upload progress ${progress.loadedBytes}/${blobInfo.size}`
            //             });
            //     }
            // });

            const blockBlobClient = this._containerClient.getBlockBlobClient(blobInfo.name);
            await blockBlobClient.upload(blob.stream, blobInfo.size, {
                blobHTTPHeaders: {
                    blobContentType: blobInfo.contentType ?? 'application/octet-stream'
                },
                ...blobInfo.metadata && Object.keys(blobInfo.metadata).length > 0 && { metadata: blobInfo.metadata },
                ...blobInfo.tags && Object.keys(blobInfo.tags).length > 0 && { tags: blobInfo.tags },
                onProgress: (progress) => {
                    if (this._debug)
                        this.emit('log', {
                            message: `Upload progress ${progress.loadedBytes}/${blobInfo.size}`
                        });
                }
            });

            if (this._debug)
                this.emit('log', {
                    message: `Create blob ${blobInfo.name} in ${this._containerClient.accountName}/${this._containerClient.containerName}`
                });
        } catch (error) {
            throw new CoreError({
                key: STORAGE_KEY_ERROR.STORAGE_AZ_CREATE_BLOB_FAILED,
                cause: error
            });
        }
    }

    public async deleteBlob(name: string): Promise<void> {
        try {
            await this._containerClient.deleteBlob(name);
        } catch (error) {
            throw new CoreError({
                key: STORAGE_KEY_ERROR.STORAGE_AZ_DELETE_BLOB_FAILED,
                cause: error
            });
        }
    }

    private async _downloadBlob(blobClient: BlobClient): Promise<Readable> {
        const downloadBlockBlobResponse = await blobClient.download();
        const stream = downloadBlockBlobResponse.readableStreamBody as NodeJS.ReadableStream;
        return new Readable().wrap(stream);
    }
}

