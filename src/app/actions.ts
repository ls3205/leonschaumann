"use server"

import type { z } from "zod"
import type { formSchema } from "~/components/ContactForm"
import nodemailer from "nodemailer"
import type Mail from "nodemailer/lib/mailer"

export const sendEmail = async (values: z.infer<typeof formSchema>) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },

    })

    const mailOptions: Mail.Options = {
        from: values.email,
        to: process.env.EMAIL,
        subject: `[leonschaumann.net] Message from ${values.name} (${values.email}); Re: ${values.subject}`,
        text: values.message
    }

    const sentMail = await transport.sendMail(mailOptions)

    return sentMail
}