const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

type RequestOptions = Omit<RequestInit, "body"> & { body?: unknown };

export async function apiFetch<T = unknown>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${API_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
    const res = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        body: options.body === undefined ? undefined : JSON.stringify(options.body),
    });

    if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Não foi possível enviar a mensagem. Tente novamente.");
    }

    return res.json() as Promise<T>;
}
