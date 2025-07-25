import { Suspense } from "react";
import CouponList from "@/components/pages/coupon/coupon-list";

import { redirect } from "next/navigation";
import crypto from 'crypto';
import CouponLoading from "@/components/pages/coupon/coupon-loading";

export const metadata = {
	title: `Phiếu giảm giá`
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
        <Suspense fallback={<CouponLoading />}>
            <CouponList searchParams={searchParams} />
        </Suspense>
    )
}