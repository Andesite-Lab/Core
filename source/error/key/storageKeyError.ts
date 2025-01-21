/**
 * Storage error key is a list of errors in the storage context.
 */
export const STORAGE_KEY_ERROR = {
    STORAGE_AZ_CONTAINER_NOT_FOUND: ['error.core.storage.azure.container_not_found', 404],
    STORAGE_AZ_CREATE_CONTAINER_FAILED: ['error.core.storage.azure.create_container_failed', 500],
    STORAGE_AZ_DELETE_CONTAINER_FAILED: ['error.core.storage.azure.delete_container_failed', 500],
    STORAGE_AZ_DELETE_BLOB_FAILED: ['error.core.storage.azure.delete_blob_failed', 500],
    STORAGE_AZ_FIND_CONTAINERS_FAILED: ['error.core.storage.azure.find_containers_failed', 500],
    STORAGE_AZ_FIND_CONTAINER_FAILED: ['error.core.storage.azure.find_container_failed', 500],
    STORAGE_AZ_FIND_BLOBS_FAILED: ['error.core.storage.azure.find_blobs_failed', 500],
    STORAGE_AZ_BLOB_NOT_FOUND: ['error.core.storage.azure.blob_not_found', 404],
    STORAGE_AZ_FIND_BLOB_FAILED: ['error.core.storage.azure.find_blob_failed', 500],
    STORAGE_AZ_CREATE_BLOB_FAILED: ['error.core.storage.azure.create_blob_failed', 500]
} as const;