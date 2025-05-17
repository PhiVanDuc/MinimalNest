"use server"

const verifyToken = async (token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/token/verify_token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({}),
            cache: "no-cache"
        });

        const result = await response.json();
        return result;
    }
    catch (error) {
        return {
            success: false,
            message: "Lỗi gọi hàm xác thực token trong middleware!"
        }
    }
}

const refresh_access_token = async (token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/token/refresh_access_token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({}),
            cache: "no-cache"
        });

        const result = await response.json();
        return result;
    }
    catch(error) {
        return {
            success: false,
            message: "Lỗi gọi hàm cấp lại access token trong middleware!"
        }
    }
}

export { verifyToken, refresh_access_token };