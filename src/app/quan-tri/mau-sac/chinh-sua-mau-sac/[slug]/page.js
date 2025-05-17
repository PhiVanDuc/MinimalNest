import ColorEditClient from "@/components/pages/color/color-edit/color-edit-client";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback="Đang tải . . .">
            <ColorEditClient />
        </Suspense>
    )
}
