import Link from "next/link";
import CoreCarousel from "@/components/customs/core-carousel";
import ProductItem from "@/components/pages/products/product-item";

import { ChevronRight } from "lucide-react";
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

export default function FeaturedProducts() {
    return (
        <section className="responsive-horizontal pb-[100px] space-y-[40px]">
            <div className="space-y-[10px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[20px] lg:text-[24px] text-darkBold font-semibold">Nội thất nổi bật</h2>
                    <Link
                        href=""
                        className="hidden sm:flex items-center gap-x-[10px] text-[14px] lg:text-[17px] text-darkMedium hover:text-yellowBold font-medium transition duration-300"
                    >
                        Khám phá
                        <ChevronRight size={20} />
                    </Link>
                </div>

                <p className="text-[14px] md:text-[16px] text-darkBland font-medium">Sản phẩm nội thất tối giản và đầy sáng tạo của chúng tôi.</p>
            </div>

            <CoreCarousel
                data={products}
            />
        </section>
    )
}