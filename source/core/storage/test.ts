import { createReadStream, statSync } from 'fs';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
// import { Readable } from 'stream';

import { AzureBlobServiceClient } from './azureBlobServiceClient';

const { STORAGE_AZ_ACCOUNT_NAME, STORAGE_AZ_ACCOUNT_KEY } = process.env;



// const azureBlobServiceClient = new AzureBlobServiceClient({
//     connectionString,
//     debug: true
// });

// const container = await azureBlobServiceClient.findContainer('bedemo1-dev');

const path = '/home/ruby-mrx/Documents/KeePassXC-2.7.9-x86_64.appimage';
// const path = '/home/ruby-mrx/Images/1.jpg';

const bigFile = createReadStream(path);

const bigFileInfo = statSync(path);

// container.on('log', (log) => {
//     console.log(log);
// });

// await container.createBlob({ stream: bigFile }, {
//     name: 'bigFile-1.appimage',
//     size: bigFileInfo.size
// });
// const container = new ContainerClient(connectionString, 'bedemo1-dev');

const blobServiceClient = new BlobServiceClient(
    `https://${STORAGE_AZ_ACCOUNT_NAME}.blob.core.windows.net/${STORAGE_AZ_ACCOUNT_KEY}`
);

const container = blobServiceClient.getContainerClient('bedemo1-dev');
// const container = blobServiceClient.getContainerClient('bedemo6');

const blockBlobClient = container.getBlockBlobClient('bigFile-1');

await blockBlobClient.uploadStream(bigFile);