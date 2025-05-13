import { Suspense } from "react";
import AdminProductDiscount from "@/components/pages/admin-product/admin-product-discount/admin-product-discount";

export default function page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <AdminProductDiscount />
        </Suspense>
    )
}
