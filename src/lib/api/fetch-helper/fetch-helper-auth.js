import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;
let refreshPromise = null;

const performRefreshToken = async () => {
    const refreshToken = cookies().get("refresh_token")?.value;
    
    if (!refreshPromise) {
        refreshPromise = (async () => {
            try {
                const response = await fetch(`${BACKEND_API}/token/refresh_access_token`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${refreshToken}`,
                    },
                });

                const result = await response.json();
                return result;
            }
            catch (error) {
                return { success: false, error };
            }
            finally {
                refreshPromise = null;
            }
        })();
    }

    return refreshPromise;
}

const fetchWithAuth = async (method, url, options = {}) => {
    const accessToken = cookies().get("access_token")?.value;
    const { cacheOff, next, headers: customHeaders = {}, body, ...rest } = options;

    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
    const defaultHeaders = {
        Authorization: `Bearer ${accessToken}`,
        ...(method !== "GET" && method !== "DELETE" && !isFormData && { "Content-Type": "application/json" }),
    };

    const mergedHeaders = {
        ...defaultHeaders,
        ...customHeaders,
    };

    let fetchOptions = {
        method,
        ...(!cacheOff ? { cache: "no-cache" } : {}),
        ...(next ? { next } : {}),
        ...rest,
        headers: mergedHeaders,
        ...(body !== undefined ? { body } : {}),
    };

    let response = await fetch(`${BACKEND_API}${url}`, fetchOptions);
    
    // Access token hết hạn
    if (response?.status === 410) {
        const resultRefresh = await performRefreshToken();
        
        if (!resultRefresh?.success) {
            cookies().delete("access_token");
            cookies().delete("refresh_token");
            redirect("/dang-nhap");
        }

        cookies().set({
            name: "access_token",
            value: resultRefresh?.data?.accessToken,
            httpOnly: true,
            path: '/',
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });

        cookies().set({
            name: "refresh_token",
            value: resultRefresh?.data?.refreshToken,
            httpOnly: true,
            path: '/',
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });

        fetchOptions = {
            ...fetchOptions,
            headers: {
                ...mergedHeaders,
                Authorization: `Bearer ${resultRefresh?.data?.accessToken || ""}`,
            },
        };

        response = await fetch(`${BACKEND_API}${url}`, fetchOptions);
        const result = await response.json();
        return { response, result };
    }
    else if (response?.status === 401) {
        cookies().delete("access_token");
        cookies().delete("refresh_token");
        redirect("/dang-nhap");
    }

    const result = await response.json();
    return { response, result };
};

const fetchHelperAuth = {
    get: (url, opts) => fetchWithAuth("GET", url, opts),
    post: (url, opts) => fetchWithAuth("POST", url, opts),
    put: (url, opts) => fetchWithAuth("PUT", url, opts),
    patch: (url, opts) => fetchWithAuth("PATCH", url, opts),
    delete: (url, opts) => fetchWithAuth("DELETE", url, opts),
};

export default fetchHelperAuth;