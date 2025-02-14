import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const POST = async ({ request, platform }) => {
    if (!platform) throw new Error('Platform context not available');
    const sesClient = new SESClient({
        region: 'us-east-1',
        credentials: {
            accessKeyId: platform.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: platform.env.AWS_SECRET_ACCESS_KEY,
        },
    });
    try {
        const { email, subject, message } = await request.json();

        // Log incoming data (sanitized)
        console.log('Received request:', { email: '***', subject, message: '***' });

        const params = {
            Destination: {
                ToAddresses: ["contact@matthenchey.dev"],
            },
            Message: {
                Body: {
                    Text: { Data: `Email: ${email}\nSubject: ${subject}\nMessage: ${message}` },
                },
                Subject: { Data: subject || "New Contact Form Submission" },
            },
            Source: "contact@matthenchey.dev",
        };

        console.log('Attempting to send email...');
        const command = new SendEmailCommand(params);
        await sesClient.send(command);
        console.log('Email sent successfully');

        return json({ success: true });
    } catch (err) {
        const error = err as Error;
        console.error('Detailed error:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            code: (error as { code?: string }).code
        });

        return json({
            success: false,
            error: error.message,
            code: (error as { code?: string }).code
        }, { status: 500 });
    }
};