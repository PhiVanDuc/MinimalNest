import { cookies } from "next/headers";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

const fetchWithAuth = async (method, url, options = {}) => {
    const accessToken = cookies().get("access_token")?.value;

    const response = await fetch(`${BACKEND_API}/${url}`, {
        method,
        cache: "no-cache",
        ...options,
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            ...(method !== "GET" && method !== "DELETE" ? { "Content-Type": "application/json" } : {}),
            ...options.headers,
        },
    });

    let result;
    try {
        result = await response.json();
    } catch {
        result = {
            success: false,
            message: "Phản hồi không phải là JSON hợp lệ."
        }
    }

    return { response, result };
};

const fetchHelperAuth = {
    get: (url, options) => fetchWithAuth("GET", url, options),
    post: (url, options) => fetchWithAuth("POST", url, options),
    put: (url, options) => fetchWithAuth("PUT", url, options),
    patch: (url, options) => fetchWithAuth("PATCH", url, options),
    delete: (url, options) => fetchWithAuth("DELETE", url, options),
};

export default fetchHelperAuth;
