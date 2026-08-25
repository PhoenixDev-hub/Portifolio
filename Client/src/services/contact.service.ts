import { apiFetch} from "./api";

export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

export async function sendContactMessage({ name, email, message }: ContactPayload) {
    return apiFetch<void>("/contact", {
        method: "POST",
        body: { name, email, message }
    });
}
