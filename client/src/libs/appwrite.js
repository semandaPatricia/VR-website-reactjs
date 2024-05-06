import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66389821000a4f6fdc6d'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
