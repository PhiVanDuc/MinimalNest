"use client"

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SizeFilterName() {
    return (
        <div className="relative h-full">
            <Input
                placeholder="Tìm tên kích cỡ"
                className="w-[250px] h-full px-[12px] pr-[45px] rounded-full text-[13px] bg-white"
            />

            <div className="text-darkMedium absolute top-[50%] translate-y-[-50%] right-0 px-[15px] bg-white rounded-full">
                <Search
                    size={15}
                />
            </div>
        </div>
    )
}
