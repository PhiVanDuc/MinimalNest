"use client"

import { useSelector } from "react-redux";

import ProductsPromote from "./products-promote";
import { cn } from "@/lib/utils";

export default function ProductsList() {
    const isOpen = useSelector(state => state.productFilterOpen);

    return (
        <div className="flex justify-center">
            <div
                className={cn(
                    "max-width pt-[20px] lg:pt-[40px] transition-all duration-300",
                    isOpen ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
                )}
            >
                <ProductsPromote />
            </div>
        </div>
    )
}