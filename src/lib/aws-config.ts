import { SESClient } from "@aws-sdk/client-ses";
// AWS SES Client
const sesClient = new SESClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export { sesClient };