import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { json } from '@sveltejs/kit';
import { sesClient } from '../../../aws-config';

export const POST = async ({ request }) => {
    const { name, email, message } = await request.json();

    const params = {
        Destination: {
            ToAddresses: ["contact@matthenchey.dev"],
        },
        Message: {
            Body: {
                Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
            },
            Subject: { Data: "New Contact Form Submission" },
        },
        Source: "contact@matthenchey.dev",
    };

    try {
        const command = new SendEmailCommand(params);
        await sesClient.send(command);
        return json({ success: true });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error sending email:", error);
            return json({ success: false, error: error.message });
        } else {
            console.error("Unknown error:", error);
            return json({ success: false, error: "An unknown error occurred" });
        }
    }
};