import SizeAdd from "@/components/pages/size/size-add/size-add";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={"Loading . . ."}>
            <SizeAdd />
        </Suspense>
    )
}
