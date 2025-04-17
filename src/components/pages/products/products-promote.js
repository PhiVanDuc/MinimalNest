"use client"

import useProductFilter from "@/hooks/use-product-filter";

import CoreCarousel from "@/components/customs/core-carousel";
import ProductFilterRightSide from "./filter/product-filter-right-side";
import ProductItem from "./product-item";

import { v4 } from "uuid";
import { cn } from "@/lib/utils";

export default function ProductsPromote() {
    const { isOpen } = useProductFilter();

    const componentProduct = Array.from({ length: 10 }).map((_, index) => {
        return {
            id: v4(),
            component: <ProductItem />
        }
    })

    return (
        <div className="space-y-[60px]">
            <div className="space-y-[20px]">
                <div className="w-full aspect-square sm:aspect-16/7 lg:aspect-16/6 rounded-[15px] bg-slate-300" />
                <ProductFilterRightSide />
            </div>
            
            <div className="space-y-[20px]">
                <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sản phẩm nổi bật</h2>

                <CoreCarousel
                    data={componentProduct}
                    numberCardClassName={cn(
                        "sm:basis-1/2 lg:basis-1/3",
                        isOpen ? "xl:basis-1/3" : "xl:basis-1/4"
                    )}
                />
            </div>

            <div className="space-y-[20px]">
                <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sản phẩm mới</h2>

                <CoreCarousel
                    data={componentProduct}
                    numberCardClassName={cn(
                        "sm:basis-1/2 lg:basis-1/3",
                        isOpen ? "xl:basis-1/3" : "xl:basis-1/4"
                    )}
                />
            </div>
        </div>
    )
}