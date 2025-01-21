import { BlobServiceClient } from '@azure/storage-blob';
import EventEmitter from 'events';

import { CoreError } from '#/error/coreError';
import { STORAGE_KEY_ERROR } from '#/error/key';
import { AzureContainerClient } from './azureContainerClient';

/**
 * Azure storage options
 */
export interface AzureBlobServiceClientOptions {
    /**
     * The connection string for the azure storage
     */
    connectionString: string;
    /**
     * Enable debug mode, allow {@link AzureBlobServiceClient} to emit log
     */
    debug?: boolean;
}

/**
 * The `AzureBlobServiceClient` class manages the connection and operations with an **Azure Blob Storage**.
 * It supports event emission by extending the {@link EventEmitter} class.
 *
 * When an instance of `AzureBlobServiceClient` is created, it can be configured using {@link AzureBlobServiceClientOptions}.
 * The connection to the storage is established using the {@link AzureBlobServiceClient} constructor.
 *
 * Once the connection is established, objects of type {@link AzureContainerClient} are automatically
 * generated for each container, allowing for seamless storage operations.
 *
 * ### Key Features:
 * - Manage connections to Azure Blob Storage.
 * - Support for event logging via {@link EventEmitter}.
 * - Automatic generation of container clients for CRUD operations.
 * - Integration of container-specific events to track operations.
 *
 * ### Overview:
 * @example
 * ```typescript
 * const options: AzureBlobServiceClientOptions = {
 *     connectionString: 'your-connection-string',
 *     debug: true
 * };
 *
 * const azureBlobServiceClient = new AzureBlobServiceClient(options);
 *
 * // Listen to log events
 * azureBlobServiceClient.on('log', (log) => {
 *     console.log('Log:', log);
 * });
 *
 * // Find all containers
 * const containers = await azureBlobServiceClient.findContainers();
 * console.log(containers);
 *
 * // Find a specific container
 * const container = await azureBlobServiceClient.findOneContainer('container-name');
 * console.log(container);
 *
 * // Create a new container
 * await azureBlobServiceClient.createContainer('new-container');
 *
 * // Delete a container
 * await azureBlobServiceClient.deleteContainer('container-name');
 * ```
 */
export class AzureBlobServiceClient extends EventEmitter {
    private readonly _blobServiceClient: BlobServiceClient;

    private readonly _connectionString: string;

    private readonly _debug: boolean;

    /**
     * Create a new instance of `AzureBlobServiceClient` with the specified options.
     * @param options - The configuration options for the Azure Blob Storage connection. ({@link AzureBlobServiceClientOptions})
     */
    public constructor(options: AzureBlobServiceClientOptions) {
        super();
        this._debug = options.debug ?? false;
        this._connectionString = options.connectionString;
        this._blobServiceClient = BlobServiceClient.fromConnectionString(options.connectionString);
    }

    /**
     * Finds all containers in the Azure Blob Storage.
     *
     * @throws ({@link CoreError}) Thrown if an error occurs during the container search. ({@link STORAGE_KEY_ERROR.STORAGE_AZ_FIND_CONTAINERS_FAILED})
     *
     * @returns An array of {@link AzureContainerClient} representing the containers.
     */
    public async findContainers(): Promise<AzureContainerClient[]> {
        try {
            const rawContainers = this._blobServiceClient.listContainers();
            const containers: AzureContainerClient[] = [];
            for await (const container of rawContainers)
                containers.push(new AzureContainerClient({
                    connectionString: this._connectionString,
                    containerName: container.name,
                    debug: this._debug
                }));
            if (this._debug)
                this.emit('log', {
                    message: `Find ${containers.length} containers from ${this._blobServiceClient.accountName}`
                });
            return containers;
        } catch (error) {
            throw new CoreError({
                key: STORAGE_KEY_ERROR.STORAGE_AZ_FIND_CONTAINER_FAILED,
                cause: {
                    accountName: this._blobServiceClient.accountName,
                    error
                }
            });
        }
    }

    /**
     * Finds a specific container in the Azure Blob Storage.
     *
     * @param containerName - The name of the container to find.
     *
     * @throws ({@link CoreError}) Thrown if the container is not found. ({@link STORAGE_KEY_ERROR.STORAGE_AZ_CONTAINER_NOT_FOUND})
     * @throws ({@link CoreError}) Thrown if an error occurs during the container search. ({@link STORAGE_KEY_ERROR.STORAGE_AZ_FIND_CONTAINER_FAILED})
     *
     * @returns An instance of {@link AzureContainerClient} representing the container.
     */
    public async findContainer(containerName: string): Promise<AzureContainerClient> {
        try {
            const container = this._blobServiceClient.getContainerClient(containerName);
            if (!(await container.exists()))
                throw new CoreError({
                    key: STORAGE_KEY_ERROR.STORAGE_AZ_CONTAINER_NOT_FOUND,
                    cause: {
                        accountName: this._blobServiceClient.accountName,
                        containerName
                    }
                });
            if (this._debug)
                this.emit('log', {
                    message: `Find container ${containerName} from ${this._blobServiceClient.accountName}`
                });
            return new AzureContainerClient({
                connectionString: this._connectionString,
                containerName,
                debug: this._debug
            });
        } catch (error) {
            if (error instanceof CoreError)
                throw error;
            throw new CoreError({
                key: STORAGE_KEY_ERROR.STORAGE_AZ_FIND_CONTAINER_FAILED,
                cause: {
                    accountName: this._blobServiceClient.accountName,
                    containerName,
                    error
                }
            });
        }
    }

    /**
     * Creates a new container in the Azure Blob Storage.
     *
     * @param containerName - The name of the container to create.
     *
     * @throws ({@link CoreError}) Thrown if an error occurs during the container creation. ({@link STORAGE_KEY_ERROR.STORAGE_AZ_CREATE_CONTAINER_FAILED})
     */
    public async createContainer(containerName: string): Promise<void> {
        try {
            await this._blobServiceClient.createContainer(containerName);
            if (this._debug)
                this.emit('log', {
                    message: `Create container ${containerName} in ${this._blobServiceClient.accountName}`
                });
        } catch (error) {
            throw new CoreError({
                key: STORAGE_KEY_ERROR.STORAGE_AZ_CREATE_CONTAINER_FAILED,
                cause: {
                    accountName: this._blobServiceClient.accountName,
                    containerName,
                    error
                }
            });
        }
    }

    /**
     * Deletes a container in the Azure Blob Storage.
     *
     * @param containerName - The name of the container to delete.
     *
     * @throws ({@link CoreError}) Thrown if an error occurs during the container deletion. ({@link STORAGE_KEY_ERROR.STORAGE_AZ_DELETE_CONTAINER_FAILED})
     */
    public async deleteContainer(containerName: string): Promise<void> {
        try {
            await this._blobServiceClient.deleteContainer(containerName);
            if (this._debug)
                this.emit('log', {
                    message: `Delete container ${containerName} in ${this._blobServiceClient.accountName}`
                });
        } catch (error) {
            throw new CoreError({
                key: STORAGE_KEY_ERROR.STORAGE_AZ_DELETE_CONTAINER_FAILED,
                cause: {
                    accountName: this._blobServiceClient.accountName,
                    containerName,
                    error
                }
            });
        }
    }

    /**
     * Gets the account name of the Azure Blob Storage.
     */
    public get name(): string {
        return this._blobServiceClient.accountName;
    }
}