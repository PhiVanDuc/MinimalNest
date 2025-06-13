"use client"

import { useState, useEffect } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CoreCarousel({ data, numberCardClassName, navigatorClassName, options = {}, isPlugins = false }) {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap());
     
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        })
    }, [api]);

    return (
        <div className="relative">
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    ...options
                }}
                plugins={!isPlugins ? [] : [
                    Autoplay({
                      delay: 5000,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent>
                    {
                        data?.map(item => (
                            <CarouselItem
                                key={item.id}
                                className={cn("", numberCardClassName)}
                            >
                                <div className="sm:p-1 h-full">
                                    {item.component}
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>

            <div
                className={cn(
                    "mt-[10px]",
                    navigatorClassName
                )}
            >
                <div className="flex items-center justify-between">
                    <div
                        onClick={() => {api?.scrollTo(current - 1)}}
                        className={
                            cn(
                                "flex items-center justify-center text-darkMedium w-[40px] aspect-square rounded-full border shadow-sm cursor-pointer bg-white",
                                current === 0 ? "opacity-80 cursor-not-allowed" : "",

                            )
                        }
                    >
                        <ChevronLeft size={25} />
                    </div>

                    <div
                        onClick={() => {api?.scrollTo(current + 1)}}
                        className={cn(
                            "flex items-center justify-center text-darkMedium w-[40px] aspect-square rounded-full border shadow-sm cursor-pointer bg-white",
                            current + 1 === count ? "opacity-80 cursor-not-allowed" : "",
                        )}
                    >
                        <ChevronRight size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}