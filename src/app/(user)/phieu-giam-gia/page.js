import MainCouponList from "@/components/pages/coupon/main-coupon-list";
import { Suspense } from "react";

export const metadata = {
	title: `${process.env.WEBSITE_NAME} - Phiếu giảm giá`,
	description: "Generated by create next app",
};

export default async function Page() {
    return (
        <Suspense fallback="Loading . . .">
            <MainCouponList />
        </Suspense>
    )
}