"use client"

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import { Search, Undo2 } from "lucide-react";
import { Input } from "@/components/ui/input";

import { addProductName } from "@/redux/slices/product-filter/product-filter-slice";
import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";

export default function ProductFilterHeader() {
    const dispatch = useDispatch();
    const { productNameState } = useSelector(state => state.productFilter);
    const isOpen = useSelector(state => state.productFilterOpen);

    const handleCloseFilter = () => { dispatch(toggle(!isOpen)) }
    const handleProductNameChange = (e) => { dispatch(addProductName(e.target.value)) }

    return (
        <div className="space-y-[20px] mb-[40px] px-[20px]">
            <div className="relative flex justify-center">
                <h2 className="w-[280px] text-[18px] font-semibold text-darkBold text-center">Bộ Lọc</h2>

                <Button
                    variant="ghost"
                    className="absolute top-[50%] right-0 translate-y-[-50%] bg-neutral-50"
                    onClick={handleCloseFilter}
                >
                    <Undo2
                        size={20}
                        className="text-darkMedium"
                    />
                </Button>
            </div>

            <div className="relative">
                <Input
                    placeholder="Tìm tên sản phẩm . . ."
                    value={productNameState?.value}
                    onChange={handleProductNameChange}
                    className="py-[20px] rounded-[10px] pr-[40px]"
                />

                <Search
                    size={20}
                    className="absolute top-[50%] translate-y-[-50%] right-[10px] text-darkMedium cursor-pointer"
                />
            </div>
        </div>
    )
}