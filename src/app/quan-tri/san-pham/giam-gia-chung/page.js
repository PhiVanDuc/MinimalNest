export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import AdminProductDiscount from "@/components/pages/admin-product/admin-product-discount/admin-product-discount";
import MainLoading from "@/components/customs/main-loading";

export default function page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminProductDiscount />
        </Suspense>
    )
}
