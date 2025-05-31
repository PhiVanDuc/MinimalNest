import { Suspense } from "react";
import EventAdd from "@/components/pages/event/event-add/event-add";
import MainLoading from "@/components/customs/main-loading";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <EventAdd />
        </Suspense>
    )
}
