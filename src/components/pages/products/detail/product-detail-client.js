"use client"

import { useState } from "react";

import ProductDetailBasicInfo from "./product-detail-basic-info";
import ProductDetailImages from "./image/product-detail-images";
import ProductDetailTabs from "./product-detail-tabs";

import { CircleCheckBig } from "lucide-react";

export default function ProductDetailClient({ product }) {
    const [currentColor, setCurrentColor] = useState(product?.colors[0]);
    const [currentSize, setCurrentSize] = useState(product?.sizes[0]);

    return (
        <div className="flex justify-center">
            <div className="responsive-horizontal max-width transition-all duration-300 space-y-[60px]">
                <div className="space-y-[15px] sm:space-y-0">
                    <div className="flex sm:hidden items-center gap-3 text-sm font-semibold text-blueChecked order-1 sm:order-2">
                        <CircleCheckBig size={26} />
                        <p>Còn sản phẩm</p>
                    </div>
                    
                    <div className="flex flex-col 2xl:flex-row items-center gap-[50px] 2xl:gap-[80px]">
                        <ProductDetailImages
                            currentColor={currentColor}
                            images={product?.product_images}
                        />
                        <ProductDetailBasicInfo
                            product={product}
                            currentColor={currentColor}
                            setCurrentColor={setCurrentColor}
                            currentSize={currentSize}
                            setCurrentSize={setCurrentSize}
                        />
                    </div>
                </div>

                <ProductDetailTabs />
            </div>
        </div>
    )
}
