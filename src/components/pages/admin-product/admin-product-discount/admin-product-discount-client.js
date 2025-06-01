"use client"

import { useState, useEffect, useMemo } from "react";
import {
    useForm,
    useFieldArray
} from "react-hook-form";

import AdminProductDiscountTab from "./admin-product-discount-tab";
import AdminProductDiscountForm from "./form/admin-product-discount-form";
import AdminProductDiscountTable from "./table/admin-product-discount-table";

import { Form } from "@/components/ui/form";

import { productTypes } from "@/static/admin-product";

export default function AdminProductDiscountClient({ categories, livingSpaces }) {
    // Khởi tạo - Quản lý Form
    const form = useForm({
        defaultValues: {
            discounts: []
        }
    });

    const formArray = useFieldArray({
        control: form.control,
        name: "discounts"
    });

    // Chọn discount tab
    const [discountSelected, setDiscountSelected] = useState(null);
    useEffect(() => {
        if (formArray.fields.length && discountSelected === null) {
            setDiscountSelected(0);
        }
    }, [formArray.fields.length]);

    // Dữ liệu cho từng discount
    const data = useMemo(() => ({
        productTypes,
        categories: categories || [],
        livingSpaces: livingSpaces || []
    }), [
        productTypes,
        categories,
        livingSpaces
    ]);

    // Theo dõi toàn bộ discount hiện tại - Hiển thị bảng sản phẩm
    const currentDiscount = form.watch(`discounts.${discountSelected}`);

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
                    <AdminProductDiscountTab
                        formArray={formArray}
                        discountSelected={discountSelected}
                        setDiscountSelected={setDiscountSelected}
                    />

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

            {/* { showTable && <AdminProductDiscountTable /> } */}
            <AdminProductDiscountTable
                form={form}
                formArray={formArray}
                index={discountSelected}
                currentDiscount={currentDiscount}
            />
        </div>
    )
}