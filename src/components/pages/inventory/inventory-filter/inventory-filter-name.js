"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

export default function InventoryFilterName() {
    const router = useRouter();
    const [product, setProduct] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!product) {
            router.push(`/quan-tri/kho-hang`);
            return;
        }

        router.push(`/quan-tri/kho-hang?product=${product}`);
    }

    return (
        <form
            className="h-full flex flex-wrap items-center gap-[5px] w-full"
            onSubmit={onSubmit}
        >
            <div className="relative h-full">
                <Input
                    placeholder="Tìm tên sản phẩm . . ."
                    className="w-[250px] h-full px-[12px] pr-[45px] rounded-full text-[13px] bg-white"
                    value={product}
                    onChange={(e) => { setProduct(e.target.value) }}
                />

                <div className="text-darkMedium absolute top-[50%] translate-y-[-50%] right-0 px-[15px] bg-white rounded-full">
                    <Search
                        size={15}
                    />
                </div>
            </div>

            {/* Nút tìm kiếm */}
            <TooltipProvider
                delayDuration={100}
            >
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            className="shrink-0 h-full aspect-square rounded-full flex items-center justify-center border text-darkMedium bg-white cursor-pointer"
                            onClick={() => {
                                
                            }}
                        >
                            <Search size={15} />
                        </button>
                    </TooltipTrigger>

                    <TooltipContent>
                        <p>Tìm kiếm.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </form>
    )
}