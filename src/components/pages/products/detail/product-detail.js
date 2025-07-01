import ProductDetailClient from './product-detail-client';
import Error from '@/components/customs/error';

import { getPublicProduct } from '@/lib/api/server-action/public-product';
import getAccessToken from '@/lib/utils/getAccessToken';

export default async function ProductDetail({ params }) {
    const { decode } = getAccessToken();
    const { status, result: product } = await getPublicProduct(params?.slug);

    if (!product?.success) return <Error message={`${status},${product?.message}`} />
    
    return (
        <ProductDetailClient
            decode={decode}
            product={product?.data?.product}
        />
    )
}
