import ProductDetailClient from './product-detail-client';
import Error from '@/components/customs/error';

import { getPublicProduct } from '@/lib/api/server-action/public-product';

export default async function ProductDetail({ params }) {
    const { response, result: product } = await getPublicProduct(params?.slug);

    if (!product?.success) return <Error message={`${response?.status},${product?.message}`} />

    return (
        <ProductDetailClient product={product?.data?.product} />
    )
}
