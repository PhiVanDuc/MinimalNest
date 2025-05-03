import { Suspense } from "react";
import EventAdd from "@/components/pages/event/event-add/event-add";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <EventAdd />
        </Suspense>
    )
}
