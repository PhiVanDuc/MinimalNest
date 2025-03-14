"use client"

import { useSelector } from "react-redux";

import ProductsPromote from "./products-promote";
import ProductsNormal from "./products-normal";

import { cn } from "@/lib/utils";

export default function ProductsListClient() {
    const isOpen = useSelector(state => state.productFilterOpen);

    return (
        <div className="flex justify-center mb-[100px] lg:mb-[150px]">
            <div
                className={cn(
                    "max-width transition-all duration-300 space-y-[60px]",
                    isOpen ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
                )}
            >
                <ProductsPromote />
                <ProductsNormal />
            </div>
        </div>
    )
}