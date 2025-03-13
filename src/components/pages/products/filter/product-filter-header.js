"use client"

import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";

import { Button } from "@/components/ui/button";
import { Search, Undo2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { updateOthers } from "@/redux/slices/product-filter/product-filter-slice";

export default function ProductFilterHeader() {
    const dispatch = useDispatch();
    const stateFilter = useSelector(state => state.productFilter);
    const isOpen = useSelector(state => state.productFilterOpen);

    const [productName, setProductName] = useState(stateFilter?.others?.["product-name"]?.value || "");
    const productNameRef = useRef(undefined);

    const handleCloseFilter = () => {
        dispatch(toggle(!isOpen));
    }

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
        productNameRef.current = e.target.value;
    }

    useEffect(() => {
        const productNameValue = stateFilter?.others?.["product-name"]?.value ?? "";
        setProductName(productNameValue);
    }, [stateFilter?.others]);

    // Xử lý debounce
    useEffect(() => {
        if (productName !== productNameRef.current) return;

        const debounce = setTimeout(() => {
            dispatch(updateOthers({
                "product-name": {
                    label: "product-name",
                    subLabel: "Tên sản phẩm",
                    value: productName
                }
            }));
        }, 500);

        return () => {
            clearTimeout(debounce);
        }
    }, [productName, dispatch]);

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
                    value={productName}
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