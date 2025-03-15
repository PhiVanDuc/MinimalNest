"use client"

import CoreCarousel from "@/components/customs/core-carousel";
import ProductItem from "../product-item";
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

export default function ProductDetailRelatedProduct() {
    return (
        <div className="space-y-[20px]">
            <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sản phẩm nổi bật</h2>

            <CoreCarousel
                data={products}
                numberCardClassName="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            />
        </div>
    )
}
