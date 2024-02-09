import { BlobServiceClient } from '@azure/storage-blob';
import fs from 'fs';
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 

// replace with your own credentials
const connectionString = `${process.env.AzureconnectionStr}`;
const containerName = 'vercel';

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

export const uploadFile = async (fileName: string, localFilePath: string) => {
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    
    // Read the file content
    const fileContent = fs.readFileSync(localFilePath);

    // Upload the file to Azure Blob Storage
    const uploadResponse = await blockBlobClient.upload(fileContent, fileContent.length);
    console.log(uploadResponse);

    // You can also obtain the URL of the uploaded blob
    // const blobUrl = blockBlobClient.url;
    // console.log(`Blob URL: ${blobUrl}`);
};

// Example usage
// const fileName = 'output/12312/src/.gitignore';
// const localFilePath = '/home/sahiltiwaskar/Projects/Vercel-clone/.gitignore';


// uploadFile(fileName, localFilePath);
