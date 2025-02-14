import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { json } from '@sveltejs/kit';
import { sesClient, validateAwsCredentials } from '$lib/aws-config';
import { error } from '@sveltejs/kit';

export const POST = async ({ request }) => {
    try {
        const { email, subject, message } = await request.json();

        // Log incoming data (sanitized)
        console.log('Received request:', { email: '***', subject, message: '***' });

        validateAwsCredentials();
        console.log('AWS credentials validated');

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