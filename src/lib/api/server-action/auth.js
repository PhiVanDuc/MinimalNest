"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const signIn = async (data) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/sign_in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            cache: "no-cache"
        });

        const result = await response.json();
        if (result.success) {
            cookies().set({
                name: "access_token",
                value: result?.data?.accessToken,
                httpOnly: true,
                path: '/',
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            });

            cookies().set({
                name: "refresh_token",
                value: result?.data?.refreshToken,
                httpOnly: true,
                path: '/',
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            });
        };

        return result;
    }
    catch(error) {
        console.log(error);
        
        return {
            success: false,
            message: "Lỗi form đăng nhập."
        }
    }
}

const signOut = () => {
    cookies().delete("access_token");
    cookies().delete("refresh_token");
    redirect("/dang-nhap");
}

export { signIn, signOut }