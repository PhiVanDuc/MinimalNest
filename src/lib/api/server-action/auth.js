"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const signIn = async (data) => {
    let result;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/account/sign_in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            cache: "no-cache"
        });

        result = await response.json();
        if (result.success) {
            cookies().set({
                name: "access_token",
                value: result?.data?.accessToken,
                httpOnly: true,
                path: '/'
            });

            cookies().set({
                name: "refresh_token",
                value: result?.data?.refreshToken,
                httpOnly: true,
                path: '/'
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