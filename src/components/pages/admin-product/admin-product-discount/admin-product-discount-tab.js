"use client"

import { FaPlus } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function AdminProductDiscountTab({
    formArray,
    discountSelected,
    setDiscountSelected
}) {
    return (
        <div className="flex items-center gap-[5px] w-full bg-white rounded-[10px] p-[8px]">
            {
                formArray?.fields?.map((field, index) => {
                    return (
                        <button
                            key={field.id}
                            type="button"
                            className={cn(
                                "shrink-0 flex items-center  px-[10px] py-[8px] rounded-[10px] text-[14px] font-medium transition-colors cursor-pointer",
                                discountSelected === index ? "bg-yellowBold text-white" : "text-darkMedium hover:bg-neutral-200"
                            )}
                            onClick={() => { setDiscountSelected(index) }}
                        >
                            Giảm giá: {field?.discountName}
                        </button>
                    )
                })
            }

            {
                formArray?.fields?.length < 5 && (
                    <button
                        type="button"
                        className="shrink-0 flex items-center gap-[10px] px-[10px] py-[8px] rounded-[10px] text-[14px] font-medium text-darkMedium hover:bg-neutral-200 cursor-pointer"
                        onClick={() => {
                            if (formArray?.fields?.length === 5) {
                                toast.warning("Đã đạt giới hạn 5 mã giảm giá. Không thể thêm mã mới.")
                                return;
                            }

                            formArray.append({
                                discountName: `Test ${formArray?.fields?.length + 1}`,
                                applyAll: false,
                                productTypeIds: [],
                                categoryIds: [],
                                livingSpaceIds: [],
                                discountType: "amount",
                                discountAmount: "100000",
                                productIds: []
                            });

                            setDiscountSelected(formArray?.fields?.length);
                        }}
                    >
                        <span>Thêm giảm giá</span>
                        <FaPlus size={15} />
                    </button>
                )
            }
        </div>
    )
}
