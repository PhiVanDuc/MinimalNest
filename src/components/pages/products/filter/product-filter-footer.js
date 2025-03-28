"use client"

import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

import CustomButton from "@/components/customs/custom-button";
import { Search } from "lucide-react";

import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";
import CryptoJS from "crypto-js";
import { toast } from "sonner";

export default function ProductFilterFooter() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const dispatch = useDispatch();
    const productFilterState = useSelector(state => state.productFilter);
    const isOpen = useSelector(state => state.productFilterOpen)

    const handleSearch = () => {
        const { filters, others } = productFilterState;

        // Kiểm tra ngay từ đầu: nếu không có bộ lọc nào thì chuyển hướng về "/san-pham"
        if (Object.keys(filters).length === 0 && Object.keys(others).length === 0) {
            toast.warning("Vui lòng lựa chọn trước khi tìm kiếm.");
            return;
        }
        const newSearchParams = new URLSearchParams(searchParams.toString());
    
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
        const signature = CryptoJS.HmacSHA256(finalSearchParams, "This is key for signature").toString(CryptoJS.enc.Hex);
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