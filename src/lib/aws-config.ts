import { SESClient } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: '',  // Will be set in the API route
        secretAccessKey: '', // Will be set in the API route
    },
});

export { sesClient };