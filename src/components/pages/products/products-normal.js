"use client"

import useProductFilter from "@/hooks/use-product-filter";

import ProductItem from "./product-item";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import { cn } from "@/lib/utils";

export default function ProductsNormal({ searchParams, publicAllProducts }) {
    const { isOpen } = useProductFilter();

    return (
        <div className="space-y-[20px]">
            <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Các sản phẩm khác</h2>

            <div className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]",
                isOpen ? "xl:grid-cols-3" : "xl:grid-cols-4"
            )}>
                {
                    publicAllProducts?.rows?.map(product => {
                        return <ProductItem
                            key={product?.id}
                            product={product}
                        />
                    })
                }
            </div>

            <div
                className="flex justify-center"
                style={{ marginTop: "50px" }}
            >
                <CustomPagination
                    page={+searchParams?.page || 1} 
                    pageSize={+publicAllProducts?.pageSize || 0}
                    totalCount={publicAllProducts?.totalItems || 0}
                />
            </div>
        </div>
    )
}
