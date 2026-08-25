import { resolveMx } from "dns/promises";

export const isEmailDomainValid = async (email: string): Promise<boolean> => {
    try {
        const domain = email.split("@")[1];
        if (!domain) return false;

        const records = await resolveMx(domain);
        return records && records.length > 0;
    } catch (error) {
        // Trata erro de rede, domínio não encontrado (ENOTFOUND/ENODATA), timeout, etc.
        console.error(`Erro ao validar DNS para o e-mail: ${email}`, error);
        return false;
    }
};
