"use client"

import { useSelector } from "react-redux";
import ProductFilterRightSide from "../filter/product-filter-right-side";
import ProductItem from "../product-item";
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

import { cn } from "@/lib/utils";

export default function ProductsListSearchClient() {
    const isOpen = useSelector(state => state.productFilterOpen);

    return (
        <div className="flex justify-center mb-[100px] lg:mb-[150px]">
            <div
                className={cn(
                    "max-width pt-[20px] lg:pt-[40px] transition-all duration-300 space-y-[60px]",
                    isOpen ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
                )}
            >
                <div className="space-y-[15px]">
                    <h2 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Kết quả tìm kiếm</h2>
                    <ProductFilterRightSide />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                        {
                            products.map(product => {
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
        </div>
    )
}
