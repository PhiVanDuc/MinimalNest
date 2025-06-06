"use client"

import useProductFilter from "@/hooks/use-product-filter";

import CoreCarousel from "@/components/customs/core-carousel";
import ProductFilterRightSide from "./filter/product-filter-right-side";
import ProductItem from "./product-item";

import { cn } from "@/lib/utils";

export default function ProductsPromote({ publicLatestProducts, publicBestSellerProducts }) {
    const { isOpen } = useProductFilter();

    return (
        <div className="space-y-[60px]">
            <div className="space-y-[20px]">
                <div className="w-full aspect-square sm:aspect-16/7 lg:aspect-16/6 rounded-[15px] bg-slate-300" />
                <ProductFilterRightSide />
            </div>
            
            {
                (publicLatestProducts && publicLatestProducts?.length > 0) &&
                (
                    <div className="space-y-[20px]">
                        <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sản phẩm mới</h2>

                        <CoreCarousel
                            data={publicLatestProducts?.map(product => {
                                return {
                                    id: product?.id,
                                    component: <ProductItem product={product} />
                                }
                            })}
                            numberCardClassName={cn(
                                "sm:basis-1/2 lg:basis-1/3",
                                isOpen ? "xl:basis-1/3" : "xl:basis-1/4"
                            )}
                        />
                    </div>
                )
            }

            {
                (publicBestSellerProducts && publicBestSellerProducts?.length > 0) &&
                (
                    <div className="space-y-[20px]">
                        <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sản phẩm bán chạy nhất</h2>

                        <CoreCarousel
                            data={publicBestSellerProducts?.map(product => {
                                return {
                                    id: product?.id,
                                    component: <ProductItem product={product} />
                                }
                            })}
                            numberCardClassName={cn(
                                "sm:basis-1/2 lg:basis-1/3",
                                isOpen ? "xl:basis-1/3" : "xl:basis-1/4"
                            )}
                        />
                    </div>
                )
            }
        </div>
    )
}