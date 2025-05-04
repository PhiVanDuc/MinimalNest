import EventEdit from "@/components/pages/event/event-edit/event-edit";
import { Suspense } from "react";


export default function Page() {
    return (
        <Suspense fallback={"Loading . . ."}>
            <EventEdit />
        </Suspense>
    )
}
