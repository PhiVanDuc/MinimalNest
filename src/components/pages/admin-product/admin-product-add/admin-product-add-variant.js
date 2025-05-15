"use client"

import { useEffect } from "react";

import { v4 } from "uuid";
import generateSkuProduct from "@/lib/utils/generate-sku-product";

export default function AdminProductAddVariant({ form }) {
    const watchName = form.watch("name");
    const watchColors = form.watch("colors");
    const watchSizes = form.watch("sizes");

    useEffect(() => {
        if (watchColors.length === 0 || watchSizes.length === 0 || watchName === "") return;

        const combos = [];
        for (const size of watchSizes) {
            for (const color of watchColors) {
                const sku = generateSkuProduct(form.watch("name"), size, color);

                combos.push({
                    id: v4(),
                    sku,
                    size,
                    color,
                    status: 'active',
                });
            }
        }

        console.log(combos);

        form.setValue("variants", combos);
    }, [watchColors, watchSizes]);
    
    return (
        <div className="p-[20px] bg-white rounded-[10px]">
            <div className="space-y-[2px]">
                <h3 className="text-[16px] font-semibold">Biến thể sản phẩm</h3>
                <p className="text-[14px] text-darkMedium font-medium">Những biến thể sẽ tự động tạo ra khi bạn chọn các kích cỡ và màu sắc của sản phẩm.</p>
            </div>
        </div>
    )
}
