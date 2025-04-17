"use client"

import useCouponFilter from "@/hooks/use-coupon-filter";

import { Search } from "lucide-react";
import CustomButton from "@/components/customs/custom-button";

export default function CouponFilterFooter() {
    const { handleSearch } = useCouponFilter();

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