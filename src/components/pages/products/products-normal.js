import ProductItem from "./product-item";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { v4 } from "uuid";
import getProducts from "@/services/products/getProducts";

export default async function ProductsNormal() {
    const products = await getProducts(20);
    if (!products) return <div>Lỗi khi lấy dữ liệu.</div>

    const componentProduct = products.map(item => {
        return {
            id: v4(),
            component: <ProductItem item={item} />
        }
    });

    return (
        <div className="space-y-[20px]">
            <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Các sản phẩm khác</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                {
                    componentProduct.map(product => {
                        return <div key={product.id}>{product.component}</div>
                    })
                }
            </div>

            <div
                className="flex justify-center"
                style={{ marginTop: "50px" }}
            >
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#" isActive>2</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
