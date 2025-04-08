import ProductsListSearchClient from "./products-list-search-client";
import ProductItem from "../product-item";
import ProductFilterRightSide from "../filter/product-filter-right-side";
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

export default async function ProductsListSearch() {
    const componentProduct = Array.from({ length: 20 }).map((_, index) => {
        return {
            id: v4(),
            component: <ProductItem />
        }
    });

    return (
        <ProductsListSearchClient>
            <div className="space-y-[15px]">
                <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Kết quả tìm kiếm</h2>
                <ProductFilterRightSide />
            </div>

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
        </ProductsListSearchClient>
    )
}
