import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <div>Kho hàng</div>
        </Suspense>
    )
}
