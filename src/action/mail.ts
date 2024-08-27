'use server'

import SendUserEmail from "./mail-template";
import { Resend } from "resend";
const apiKey = process.env.RESEND_API_KEY as string;

if (!apiKey) {
    throw new Error("Missing API key. Set RESEND_API_KEY in your environment variables.");
}
const resend = new Resend(apiKey)

export type ResendEmailType = {
    name: string;
    message: string;
    phoneNumber: string;
    email: string;
    quantity?: number;
    productName?: string;
}

export const sendMail = async (payload: ResendEmailType, file?: FormData) => {
    const systemFile: any = file?.get('file')!;
    let attachments: any = []
    if (systemFile) {
        const contentBuffer = await systemFile.arrayBuffer();
        const bufferFile = Buffer.from(contentBuffer);
        attachments = [
            {
                content: bufferFile,
                filename: systemFile?.name,
            }
        ]
    }
    try {
        const { data, error } = await resend.emails.send({
            from: process.env.COMPANY_RESEND_GMAIL_ACCOUNT as string,
            to: 'tchetan308@gmail.com',
            subject: `New Quote Request - ${payload.name as string}`,
            react: SendUserEmail(payload),
            attachments,
        })

        if (error) {
            console.log('error: ', error);
            return {
                error: 'Unable to send email'
            }
        }
        console.log('data: ', data);

        return {
            data: 'Email sent successfully'
        }
    } catch (error) {
        return {
            error: 'Unable to send email'
        }
    }
}
