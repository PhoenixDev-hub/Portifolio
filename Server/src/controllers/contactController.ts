import type { Request, Response } from "express";
import { sendContactEmail } from "../services/emailService.js";
import { isEmailDomainValid } from "../utils/validateEmail.js";

export const contactController = async (req: Request, res: Response): Promise<void> => {
    const { name, email, message } = req.body ?? {};

    if (!name || !email || !message) {
        res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: "Por favor, insira um endereço de e-mail válido." });
        return;
    }

    const isDomainValid = await isEmailDomainValid(email);
    if (!isDomainValid) {
        res.status(400).json({ error: "O domínio deste e-mail não existe ou não aceita mensagens." });
        return;
    }

    try {
        await sendContactEmail(name, email, message);
        res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    } catch (err) {
        console.error("Erro ao enviar email:", err);
        res.status(500).json({ error: "Erro ao enviar mensagem. Tente novamente mais tarde." });
    }
};
