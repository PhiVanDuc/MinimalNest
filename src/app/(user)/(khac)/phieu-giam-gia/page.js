import { Suspense } from "react";
import CouponList from "@/components/pages/coupon/coupon-list";
import MainLoading from "@/components/customs/main-loading";

import { redirect } from "next/navigation";
import crypto from 'crypto';

export const metadata = {
	title: `${process.env.WEBSITE_NAME} - Phiếu giảm giá`,
	description: "Generated by create next app",
};

export default async function Page({ searchParams }) {
    const copyData = {...searchParams};
    if (copyData?.signature) delete copyData?.signature;

    if (searchParams?.signature) {
        const convert = new URLSearchParams(copyData);
        const final = convert.toString().replace(/%2C/g, ",");
        const currentSignature = crypto.createHmac("sha256", "This is key for signature").update(final).digest('hex');

        if (searchParams?.signature !== currentSignature) redirect("/phieu-giam-gia");
    }

    return (
        <Suspense fallback={<MainLoading className="responsive-horizontal" />}>
            <CouponList searchParams={searchParams} />
        </Suspense>
    )
}