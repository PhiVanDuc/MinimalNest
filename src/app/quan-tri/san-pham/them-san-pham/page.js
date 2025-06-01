export const dynamic = 'force-dynamic';

import MainLoading from "@/components/customs/main-loading"
import AdminProductAdd from "@/components/pages/admin-product/admin-product-add/admin-product-add"
import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminProductAdd />
        </Suspense>
    )
}
