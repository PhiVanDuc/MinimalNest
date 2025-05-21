import EventEdit from "@/components/pages/event/event-edit/event-edit";
import { Suspense } from "react";


export default function Page({ params }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <EventEdit params={params} />
        </Suspense>
    )
}
