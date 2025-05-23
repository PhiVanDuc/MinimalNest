import { Suspense } from "react";
import Payment from "@/components/pages/payment/payment";

export const metadata = {
	title: `${process.env.WEBSITE_NAME} - Thanh toán`,
	description: "Generated by create next app"
};

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Payment />
        </Suspense>
    )
}
