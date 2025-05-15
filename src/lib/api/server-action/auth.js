"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const signOut = () => {
    cookies().delete("access_token");
    cookies().delete("refresh_token");
    redirect("/dang-nhap");
}

export { signOut }