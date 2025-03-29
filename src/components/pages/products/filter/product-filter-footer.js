"use client"

import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

import CustomButton from "@/components/customs/custom-button";
import { Search } from "lucide-react";

import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";
import { toast } from "sonner";
import generateSignatureClient from "@/lib/generate-signature-client";

export default function ProductFilterFooter() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const dispatch = useDispatch();
    const { filters, others } = useSelector(state => state.productFilter);
    const isOpen = useSelector(state => state.productFilterOpen)

    const handleSearch = () => {
        if (Object.keys(filters).length === 0 && Object.keys(others).length === 0) {
            router.push("/san-pham");
            return;
        }
        
        const newSearchParams = new URLSearchParams();
    
        if (Object.keys(filters).length > 0) newSearchParams.set("filters", Object.keys(filters).join(","));
        else newSearchParams.delete("filters");
    
        if (Object.keys(others).length > 0) {
            Object.keys(others).forEach((key) => {
                const label = others[key]?.param;
                const value = others[key]?.value;
                if (label && value) {
                    newSearchParams.set(label, value);
                }
            });
        }

        const finalSearchParams = newSearchParams.toString().replace(/%2C/g, ",");
        const signature = generateSignatureClient(finalSearchParams);
        router.push(`/san-pham/tim-kiem?${finalSearchParams}&signature=${signature}`);
        dispatch(toggle(!isOpen));
    };

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