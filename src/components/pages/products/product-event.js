"use client"

import Link from "next/link";
import Image from "next/image";
import CoreCarousel from "@/components/customs/core-carousel";

export default function ProductEvent({ publicEvents }) {
    const items = publicEvents?.map(event => {
        return {
            id: event?.id,
            component: (
                <Link
                    href={event?.link || ""}
                >
                    <Image
                        src={event?.image}
                        alt={event?.event}
                        width={3000}
                        height={3000}
                        className="aspect-square sm:aspect-16/7 lg:aspect-16/6 object-cover object-left rounded-[15px]"
                        priority={true}
                    />
                </Link>
            )
        }
    });

    let finalItems = items?.length < 4 ? [...items, ...items] : items;

    return (
        <CoreCarousel
            data={finalItems}
            numberCardClassName="basis-full"
            navigatorClassName="mt-0 hidden"
            isPlugins={true}
            options={{
                loop: true
            }}
        />
    )
}