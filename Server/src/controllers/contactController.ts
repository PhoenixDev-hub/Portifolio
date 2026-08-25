import type { Request, Response } from "express";
import { z } from "zod";
import { sendContactEmail } from "../services/emailService.js";

const contactSchema = z.object({
    name: z.string().trim().min(2, "Informe um nome válido.").max(100),
    email: z.string().trim().email("Por favor, insira um endereço de e-mail válido.").max(254),
    message: z.string().trim().min(5, "A mensagem deve ter ao menos 5 caracteres.").max(5_000),
});

export const contactController = async (req: Request, res: Response): Promise<void> => {
    const parsedContact = contactSchema.safeParse(req.body);
    if (!parsedContact.success) {
        res.status(400).json({ error: parsedContact.error.issues[0]?.message ?? "Dados inválidos." });
        return;
    }

    const { name, email, message } = parsedContact.data;

    try {
        await sendContactEmail(name, email, message);
        res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    } catch (err) {
        console.error("Erro ao enviar email:", err);
        res.status(500).json({ error: "Erro ao enviar mensagem. Tente novamente mais tarde." });
    }
};
