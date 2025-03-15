"use client"

import ProductDetailBasicInfo from "./product-detail-basic-info";
import ProductDetailImages from "./product-detail-images";
import ProductDetailRelatedProduct from "./product-detail-related-product";
import ProductDetailTabs from "./product-detail-tabs";

export default function ProductDetailClient() {
    return (
        <div className="flex justify-center mb-[100px] lg:mb-[150px]">
            <div className="responsive-horizontal max-width transition-all duration-300 space-y-[60px]">
                <div className="flex flex-col lg:flex-row items-center gap-[80px]">
                    <ProductDetailImages />
                    <ProductDetailBasicInfo />
                </div>

                <ProductDetailTabs />
                <ProductDetailRelatedProduct />
            </div>
        </div>
    )
}
