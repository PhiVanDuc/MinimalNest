import { Suspense } from "react";
import ProductDetail from "@/components/pages/products/detail/product-detail";
import ProductDetailLoading from "@/components/pages/products/detail/product-detail-loading";

import { getPublicProduct } from "@/lib/api/server-action/public-product";

export async function generateMetadata({ params }) {
    const { result: product } = await getPublicProduct(params?.slug);

    if (!product?.success) {
        return {
            title: "Chi tiết sản phẩm"
        }
    }

    const data = product?.data?.product;
    const image = data?.product_images?.find(image => image?.display_order);

    return {
        title: data?.product,
        openGraph: {
            images: [
                {
                    url: image?.url
                }
            ]
        }
    };
}

export default function Page({ params }) {
    return (
        <Suspense fallback={<ProductDetailLoading />}>
            <ProductDetail params={params} />
        </Suspense>
    )
}