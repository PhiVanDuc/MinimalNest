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
            className="block rounded-[15px] cursor-pointer"
        >
            {
                item ?
                (
                    <div className="w-full aspect-16/12 rounded-[15px] rounded-br-none rounded-bl-none bg-slate-300 overflow-hidden">
                        <Image
                            src={item.image}
                            alt="Product Image"
                            width={item.blurImage.img.width}
                            height={item.blurImage.img.height}
                            className="w-full aspect-16/12 object-cover object-center"
                            placeholder="blur"
                            blurDataURL={item.blurImage.base64}
                        />
                    </div>       
                ) : 
                (
                    <div className="w-full aspect-16/12 rounded-[15px] rounded-br-none rounded-bl-none bg-slate-300 overflow-hidden">
                    </div>
                )
            }

            <div className="relative space-y-[15px] p-[20px] bg-white">
                <div className="flex items-center justify-between">
                    <h3 className="text-[15px] sm:text-[16px] text-darkBold font-semibold">Product name</h3>
                    <Badge className="bg-yellowBold text-white text-[13px] font-medium">4,98</Badge>
                </div>

                <TooltipProvider
                    delayDuration={400}
                >
                    <div className="flex items-center gap-x-[8px]">
                        {
                            Array.from({ length: 4 }).map((_, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <span className="inline-block w-[16px] h-[16px] rounded-full bg-slate-300 cursor-pointer" />
                                    </TooltipTrigger>

                                    <TooltipContent>
                                        <p>Mô tả màu sắc</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))
                        }
                    </div>
                </TooltipProvider>

                <p className="flex items-center gap-x-[10px] text-[13px] sm:text-[15px] text-darkBold font-semibold">
                    <IoPricetagOutline size={22} />
                    400.000 VND
                </p>
                <span
                    className="absolute inset-0 border border-t-0 rounded-[15px] rounded-tr-none rounded-tl-none"
                    style={{
                        marginTop: "0px"
                    }}
                />
            </div>
        </Link>
    )
}