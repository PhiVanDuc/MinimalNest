import { Suspense } from "react";
import MainLoading from "@/components/customs/main-loading";

export async function generateMetadata() {
    // fetch dữ liệu
    return {
        title: `${process.env.WEBSITE_NAME} - Chi tiết phiếu giảm giá`,
        description: "Generated by create next app",
    };
}

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <div>Cần phát triển thêm.</div>
        </Suspense>
    )
}
