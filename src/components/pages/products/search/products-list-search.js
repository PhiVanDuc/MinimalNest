import ProductItem from "../product-item";
import Error from "@/components/customs/error";
import ProductsListSearchClient from "./products-list-search-client";
import ProductFilterRightSide from "../filter/product-filter-right-side";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import { getAllPublicProducts } from "@/lib/api/server-action/public-product";


export default async function ProductsListSearch({ searchParams }) {
    const { response, result: publicAllProducts } = await getAllPublicProducts({
        ...searchParams,
        limit: 20,
        page: searchParams?.page || 1
    });

    if (!publicAllProducts?.success) return <Error message={`${response?.status},${publicAllProducts?.message}`} />

    return (
        <ProductsListSearchClient>
            <div className="space-y-[15px]">
                <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Kết quả tìm kiếm</h2>
                <ProductFilterRightSide />
            </div>

            {
                publicAllProducts?.data?.rows?.length > 0 ?
                (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                        {
                            publicAllProducts?.data?.rows.map(product => {
                                return <ProductItem
                                    key={product?.id}
                                    product={product}
                                />
                            })
                        }
                    </div>
                ) :
                <p className="text-center italic text-[14px] md:text-[15px] text-darkMedium">Hiện không tìm thấy sản phẩm phù hợp!</p>
            }

            {
                publicAllProducts?.data?.rows?.length > 0 &&
                <div
                    className="flex justify-center"
                    style={{ marginTop: "50px" }}
                >
                    <CustomPagination page={+searchParams?.page || 1} pageSize={+publicAllProducts?.data?.pageSize || 0} totalCount={publicAllProducts?.data?.totalItems || 0} />
                </div>
            }
            
        </ProductsListSearchClient>
    )
}