"use client"

import Link from "next/link";
import Image from "next/image";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

import { IoPricetagOutline } from "react-icons/io5";

export default function ProductItem({ item }) {
    return (
        <Link
            href={`/san-pham/ten-san-pham`}
            className="block rounded-[15px] cursor-pointer border shadow-sm overflow-hidden"
        >
            {
                item ?
                    (
                        <div className="w-full aspect-square rounded-[15px] rounded-br-none rounded-bl-none bg-slate-300 overflow-hidden">
                            <Image
                                src={item.blurImage.img.src}
                                alt="Product Image"
                                width={600}
                                height={300}
                                className="w-full aspect-square object-cover object-center"
                                placeholder="blur"
                                blurDataURL={item.blurImage.base64}
                                loading="lazy"
                            />
                        </div>
                    ) :
                    (
                        <div className="w-full aspect-square rounded-[15px] rounded-br-none rounded-bl-none bg-slate-300 overflow-hidden">
                        </div>
                    )
            }

            <div className="relative p-[20px] bg-white space-y-[15px]">
                <div className="space-y-[5px]">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[14px] sm:text-[15px] text-darkBold font-semibold">Tên sản phẩm</h3>
                        <Badge className="bg-yellowBold text-white text-[12px] font-medium px-[6px]">4,98</Badge>
                    </div>

                    <TooltipProvider
                        delayDuration={200}
                    >
                        <div className="flex items-center gap-x-[8px]">
                            {
                                Array.from({ length: 4 }).map((_, index) => (
                                    <Tooltip key={index}>
                                        <TooltipTrigger asChild>
                                            <span className="inline-block w-[14px] h-[14px] rounded-full bg-slate-300 cursor-pointer" />
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p>Mô tả màu sắc</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))
                            }
                        </div>
                    </TooltipProvider>
                </div>

                <p className="flex items-center gap-x-[10px] text-[13px] sm:text-[14px] text-darkBold font-semibold">
                    <IoPricetagOutline size={20} className="text-darkMedium" />
                    400.000 VND
                </p>
            </div>
        </Link>
    )
}