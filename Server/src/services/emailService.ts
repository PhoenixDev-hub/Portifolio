import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_USER_PASSWORD
    }
});

export const sendContactEmail = async (name: string, email: string, message: string) => {
    return transporter.sendMail({
        from: `"Portifólio PhoenixDev" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER as string,
        replyTo: email,
        subject: "Novo contato do portifólio",
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    });
};
