"use client"

import CoreCarousel from "@/components/customs/core-carousel";
import ProductFilterRightSide from "./filter/product-filter-right-side";
import ProductItem from "./product-item";

import { v4 } from "uuid";

const products = [
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    }
]

export default function ProductsPromote() {
    return (
        <div className="space-y-[60px]">
            <div className="space-y-[20px]">
                <div className="w-full aspect-square sm:aspect-16/7 lg:aspect-16/5 rounded-[15px] bg-slate-300" />
                <ProductFilterRightSide />
            </div>
            
            <div className="space-y-[20px]">
                <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sản phẩm nổi bật</h2>

                <CoreCarousel
                    data={products}
                    numberCardClassName="sm:basis-1/2 lg:basis-1/3"
                />
            </div>

            <div className="space-y-[20px]">
                <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sản phẩm mới</h2>

                <CoreCarousel
                    data={products}
                    numberCardClassName="sm:basis-1/2 lg:basis-1/3"
                />
            </div>
        </div>
    )
}