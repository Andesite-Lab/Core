export interface BlobInfo {

    name: string;

    size: number;

    contentType?: string | undefined;

    metadata?: Record<string, string> | undefined;

    lastModified?: Date | undefined;

    tags?: Record<string, string> | undefined;
}
