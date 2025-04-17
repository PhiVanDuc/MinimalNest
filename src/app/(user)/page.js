import { Suspense } from "react";
import Home from "@/components/pages/home/home";
import HeaderLoading from "@/components/pages/home/header-loading";

export const metadata = {
    title: `${process.env.WEBSITE_NAME} - Trang chủ`,
    description: "Generated by create next app",
};

export default function Page() {
    return (
        <Suspense fallback={<HeaderLoading />}>
            <Home />
        </Suspense>
    )
}