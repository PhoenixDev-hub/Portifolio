import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;
const contactReceiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

if (!resendApiKey) {
    throw new Error("A variável RESEND_API_KEY deve ser configurada.");
}

if (!contactReceiverEmail) {
    throw new Error("A variável CONTACT_RECEIVER_EMAIL deve ser configurada.");
}

const resend = new Resend(resendApiKey);

export const sendContactEmail = async (name: string, email: string, message: string) => {
    const { data, error } = await resend.emails.send({
        from: "Portifólio PhoenixDev <onboarding@resend.dev>",
        to: [contactReceiverEmail],
        replyTo: email,
        subject: "Novo contato do portifólio",
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    });

    if (error) {
        throw new Error(`Erro ao enviar e-mail: ${error.message}`);
    }

    return data;
};
