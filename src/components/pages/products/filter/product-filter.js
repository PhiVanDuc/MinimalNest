import ProductFilterClient from "./product-filter-client";

export default async function ProductFilter() {
    // Mô phỏng
    const request = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
        {
            cache: "no-cache"
        }
    );

    return <ProductFilterClient />
}