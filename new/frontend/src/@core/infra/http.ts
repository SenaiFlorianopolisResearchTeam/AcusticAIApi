type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const baseHttp = (method: HttpMethod, headers: Record<string, string> = {}) => {
    return async (url: string, options: RequestInit = {}) => {
        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
                ...options.headers,
            },
            ...options,
        };

        return fetch("http://0.0.0.0:4000", fetchOptions);
    };
};

export const http = {
    get: baseHttp('GET'),
    post: baseHttp('POST'),
    put: baseHttp('PUT'),
    delete: baseHttp('DELETE'),
};