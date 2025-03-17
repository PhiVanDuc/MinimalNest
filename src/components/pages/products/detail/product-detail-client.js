"use client"

import { CircleCheckBig } from "lucide-react";
import ProductDetailBasicInfo from "./product-detail-basic-info";
import ProductDetailImages from "./image/product-detail-images";
import ProductDetailRelatedProduct from "./product-detail-related-product";
import ProductDetailTabs from "./product-detail-tabs";

export default function ProductDetailClient() {
    return (
        <div className="flex justify-center mb-[100px] lg:mb-[150px]">
            <div className="responsive-horizontal max-width transition-all duration-300 space-y-[60px]">
                <div className="space-y-[15px] sm:space-y-0">
                    <div className="flex sm:hidden items-center gap-3 text-sm font-semibold text-blueChecked order-1 sm:order-2">
                        <CircleCheckBig size={26} />
                        <p>Còn sản phẩm</p>
                    </div>
                    
                    <div className="flex flex-col 2xl:flex-row items-center gap-[50px] 2xl:gap-[80px]">
                        <ProductDetailImages />
                        <ProductDetailBasicInfo />
                    </div>
                </div>

                <ProductDetailTabs />
                <ProductDetailRelatedProduct />
            </div>
        </div>
    )
}
