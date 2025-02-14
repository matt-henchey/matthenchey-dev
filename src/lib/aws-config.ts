import { SESClient } from "@aws-sdk/client-ses";

const env = {
    AWS_ACCESS_KEY_ID: process.env.CLOUDFLARE_PAGES_AWS_ACCESS_KEY_ID || '',
    AWS_SECRET_ACCESS_KEY: process.env.CLOUDFLARE_PAGES_AWS_SECRET_ACCESS_KEY || '',
    AWS_REGION: process.env.CLOUDFLARE_PAGES_AWS_REGION || 'us-east-1'
};

const sesClient = new SESClient({
    region: env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY || '',
    },
});

export const validateAwsCredentials = () => {
    if (!env.AWS_ACCESS_KEY_ID || !env.AWS_SECRET_ACCESS_KEY) {
        throw new Error('Missing required AWS environment variables');
    }
};

export { sesClient };