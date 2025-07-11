const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

const fetchWithoutAuth = async (method, url, options = {}) => {
    const { cacheOff, next, headers: customHeaders = {}, body, ...rest } = options;

    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
    const defaultHeaders = {
        ...(method !== "GET" && method !== "DELETE" && !isFormData && { "Content-Type": "application/json" }),
    };

    const mergedHeaders = {
        ...defaultHeaders,
        ...customHeaders,
    };

    const fetchOptions = {
        method,
        ...(!cacheOff ? { cache: "no-cache" } : {}),
        ...(next ? { next } : {}),
        ...rest,
        headers: mergedHeaders,
        ...(body !== undefined ? { body } : {}),
    };

    const response = await fetch(`${BACKEND_API}${url}`, fetchOptions);
    let result = await response.json();

    return { response, result };
};

const fetchHelper = {
  get: (url, opts) => fetchWithoutAuth("GET", url, opts),
  post: (url, opts) => fetchWithoutAuth("POST", url, opts),
  put: (url, opts) => fetchWithoutAuth("PUT", url, opts),
  patch: (url, opts) => fetchWithoutAuth("PATCH", url, opts),
  delete: (url, opts) => fetchWithoutAuth("DELETE", url, opts),
};

export default fetchHelper;