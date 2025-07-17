import { getAllPublicProducts } from "@/lib/api/server-action/public-product";

export default async function sitemap() {
    const { result: products } = await getAllPublicProducts();
    const getProducts = products?.data?.rows;

    const productEntries = getProducts.map(product => {
        return {
            url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/san-pham/${product?.slug}`
            // lastModified
            // changeFrequency
            // priority
        }
    });

    return [
        { url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`, priority: 20 },
        { url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/san-pham`, priority: 30 },
        { url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/san-pham/tim-kiem` },
        { url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/phieu-giam-gia`, priority: 10 },
        ...productEntries
    ]
}