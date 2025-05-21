import EventEditClient from "./event-edit-client";
import Error from "@/components/customs/error";

import { getEvent } from "@/lib/api/server-action/event";
import { dynamicBlurImage } from "@/lib/utils/dynamic-blur-image";

export default async function EventEdit({ params }) {
    const { response, result: event } = await getEvent(params?.slug || "");
    if (!event?.success) return <Error message={`${response?.status},${event?.message}`} />

    const blurImage = await dynamicBlurImage(event?.data?.event?.image);

    return (
        <EventEditClient event={event?.data?.event} blurImage={blurImage} />
    )
}
