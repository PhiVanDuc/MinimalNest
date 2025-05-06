import SizeEdit from "@/components/pages/size/size-edit/size-edit";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <SizeEdit />
        </Suspense>
    )
}
