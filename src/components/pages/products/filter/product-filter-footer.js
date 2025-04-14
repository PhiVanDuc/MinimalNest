"use client"

import { Search } from "lucide-react";
import CustomButton from "@/components/customs/custom-button";

import useProductFilter from "@/hooks/use-product-filter";

export default function ProductFilterFooter() {
    const { handleSearch } = useProductFilter();

    return (
        <div className="pt-[20px] px-[20px]">
            <CustomButton
                icon={<Search size={22} />}
                className="w-full rounded-[10px] bg-yellowBold hover:bg-yellowBold hover:opacity-80 transition-opacity"
                onClick={handleSearch}
            >
                Tìm kiếm
            </CustomButton>
        </div>
    )
}