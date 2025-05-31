import MainLoading from "@/components/customs/main-loading";
import EventEdit from "@/components/pages/event/event-edit/event-edit";
import { Suspense } from "react";


export default function Page({ params }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <EventEdit params={params} />
        </Suspense>
    )
}
