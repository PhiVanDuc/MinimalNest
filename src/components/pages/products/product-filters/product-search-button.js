"use client"
import CustomButton from "@/components/customs/custom-button"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSelector } from "react-redux"

export default function ProductSearchButton() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const filters = useSelector(select => select.productFilters);
    const expend = useSelector(select => select.productFiltersToggle.expand);

    const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    const { group, seperate } = filters;

    if (group && group.length > 0) {
        params.set('filters', group.join(','));
    }

    if (seperate) {
        Object.entries(seperate).forEach(([key, value]) => {
            if (value) params.set(key, value);
            else params.delete(key);
        });
    }

    params.forEach((value, key) => {
        if (!value) {
            params.delete(key);
        }
    });

    const queryString = params.toString().replace(/%2C/g, ',');
    router.push(`/san-pham/tim-kiem?${queryString}`);
  };

    return (
        <div className={cn(
            "px-[20px] w-full",
            !expend ? "hidden" : ""
        )}>
            <CustomButton
                className="bg-yellowBold hover:bg-yellowBold w-full"
                icon={<Search size={20} />}
                onClick={handleSearch}
            >
                Tìm kiếm
            </CustomButton>
        </div>
    );
}