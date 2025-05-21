import { cookies } from "next/headers";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

const fetchWithAuth = async (method, url, options = {}) => {
    const accessToken = cookies().get("access_token")?.value;
    const { headers: customHeaders = {}, body, ...rest } = options;

    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
    const defaultHeaders = {
        Authorization: `Bearer ${accessToken}`,
        ...(method !== "GET" && method !== "DELETE" && !isFormData && { "Content-Type": "application/json" }),
    };

    const mergedHeaders = {
        ...defaultHeaders,
        ...customHeaders,
    };

    const fetchOptions = {
        method,
        cache: "no-cache",
        ...rest,
        headers: mergedHeaders,
        ...(body !== undefined ? { body } : {}),
    };

    const response = await fetch(`${BACKEND_API}${url}`, fetchOptions);

    let result;
    try {
        result = await response.json();
    } catch {
        result = {
            success: false,
            message: "Phản hồi không phải là JSON hợp lệ."
        };
    }

    return { response, result };
};

const fetchHelperAuth = {
  get:    (url, opts) => fetchWithAuth("GET",    url, opts),
  post:   (url, opts) => fetchWithAuth("POST",   url, opts),
  put:    (url, opts) => fetchWithAuth("PUT",    url, opts),
  patch:  (url, opts) => fetchWithAuth("PATCH",  url, opts),
  delete: (url, opts) => fetchWithAuth("DELETE", url, opts),
};

export default fetchHelperAuth;
