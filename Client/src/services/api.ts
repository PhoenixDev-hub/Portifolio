const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface RequestOptions extends RequestInit {
    body?: any;
}

export async function apiFetch<T = unknown>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${API_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
    const res = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(`Erro na requisição para ${endpoint}: ${data?.error || 'Erro desconhecido'}`);
    }

    return res.json() as Promise<T>;
}
