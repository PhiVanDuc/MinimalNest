const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

const fetchWithoutAuth = async (method, url, options = {}) => {
    const response = await fetch(`${BACKEND_API}/${url}`, {
        method,
        cache: "no-cache",
        ...options,
        headers: {
            ...(method !== "GET" && method !== "DELETE" ? { "Content-Type": "application/json" } : {}),
            ...options.headers,
        },
    });

    let result;
    try {
        result = await response.json();
    } catch {
        result = null;
    }

    return { response, result };
};

const fetchHelper = {
    get: (url, options) => fetchWithoutAuth("GET", url, options),
    post: (url, options) => fetchWithoutAuth("POST", url, options),
    put: (url, options) => fetchWithoutAuth("PUT", url, options),
    patch: (url, options) => fetchWithoutAuth("PATCH", url, options),
    delete: (url, options) => fetchWithoutAuth("DELETE", url, options),
};

export default fetchHelper;
