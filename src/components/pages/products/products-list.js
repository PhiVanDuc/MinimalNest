import ProductsListClient from "./products-list-client";

export default async function ProductsList() {
    // Mô phỏng
    const request = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
        {
            cache: "no-cache"
        }
    );

    return (
        <ProductsListClient />
    )
}