"use client"

import { useState, useEffect, useMemo } from "react";
import {
    useForm,
    useFieldArray
} from "react-hook-form";

import AdminProductDiscountForm from "./admin-product-discount-form";

import { Form } from "@/components/ui/form";
import { FaPlus } from "react-icons/fa6";

import { productTypes } from "@/static/admin-product";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function AdminProductDiscountClient({ categories, livingSpaces }) {
    const form = useForm({
        defaultValues: {
            discounts: []
        }
    });

    const formArray = useFieldArray({
        control: form.control,
        name: "discounts"
    });

    const [discountSelected, setDiscountSelected] = useState(null);
    useEffect(() => {
        if (formArray.fields.length && discountSelected === null) {
            setDiscountSelected(0);
        }
    }, [formArray.fields.length]);

    const data = useMemo(() => ({
        productTypes,
        categories: categories || [],
        livingSpaces: livingSpaces || []
    }), [
        productTypes,
        categories,
        livingSpaces
    ]);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="space-y-[30px]">
            <header className="space-y-[5px]">
                <h1 className="text-[24px] font-semibold">Giảm giá chung</h1>
                <p className="text-[14px] text-darkMedium font-medium">Bạn có thể tạo ra nhiều giảm giá áp dụng cho nhiều sản phẩm khác nhau dựa vào bộ lọc.</p>
            </header>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-[20px]"
                >
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
                                        Giảm giá {field?.discountName}
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
                                            discountName: formArray?.fields?.length + 1,
                                            applyAll: false,
                                            productTypes: [],
                                            categories: [],
                                            livingSpaces: [],
                                            discountType: "amount",
                                            discountPrice: ""
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

                    {
                        typeof discountSelected === "number" &&
                        (
                            <AdminProductDiscountForm
                                key={discountSelected}
                                form={form}
                                formArray={formArray}
                                index={discountSelected}
                                data={data}
                                setDiscountSelected={setDiscountSelected}
                            />
                        )
                    }
                </form>
            </Form>
        </div>
    )
}