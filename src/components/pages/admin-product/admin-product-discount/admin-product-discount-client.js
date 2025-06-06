"use client"

import { useState, useEffect } from "react";
import {
    useForm,
    useFieldArray
} from "react-hook-form";
import { TooltipProvider } from "@/components/ui/tooltip";

import AdminProductDiscountTab from "./admin-product-discount-tab";
import AdminProductDiscountForm from "./form/admin-product-discount-form";
import AdminProductDiscountTable from "./table/admin-product-discount-table";

import { Form } from "@/components/ui/form";

import { toast } from "sonner";
import { convertToNumber, convertToNumberDb } from "@/lib/utils/format-currency";
import { addGeneralDiscount, editGeneralDiscount } from "@/lib/api/server-action/general-discount";

export default function AdminProductDiscountClient({
    generalDiscounts,
    productTypes,
    categories,
    livingSpaces
}) {
    const form = useForm({
        defaultValues: {
            discounts: generalDiscounts?.map(item => ({ ...item, discountAmount: `${convertToNumberDb(item?.discountAmount)}` })) || []
        }
    });

    const formArray = useFieldArray({
        control: form.control,
        name: "discounts"
    });

    const [submitting, setSubmitting] = useState(false); // Trạng thái submit form
    const [discountSelected, setDiscountSelected] = useState(null); // Index của tab giảm giá hiện tại
    const [products, setProducts] = useState([]); // Danh sách sản phẩm có thể áp dụng đối với giảm giá hiện tại
    
    // Lấy ra tab giảm giá hiện tại
    const currentDiscount = form.watch(`discounts.${discountSelected}`);

    // Nếu một tab bị xóa - Tự động chọn tab đầu
    useEffect(() => {
        if (formArray.fields.length && discountSelected === null) {
            setDiscountSelected(0);
        }
    }, [formArray.fields.length]);

    // Chọn tab mới sẽ reset lại danh sách sản phẩm
    useEffect(() => {
        setProducts([]);
    }, [currentDiscount]);

    // Submit form
    const onSubmit = async (data) => {
        if (submitting) return;
        setSubmitting(true);

        const generalDiscount = currentDiscount?.rootId ?
        await editGeneralDiscount({ ...data?.discounts[discountSelected], discountAmount: convertToNumber(data?.discounts[discountSelected]?.discountAmount) }, currentDiscount?.rootId) :
        await addGeneralDiscount(data?.discounts[discountSelected]);

        const message = generalDiscount?.message;
        if (generalDiscount?.success) {
            toast.success(message);

            if (!currentDiscount?.rootId) {
                formArray.update(discountSelected, {
                    ...formArray?.fields[discountSelected],
                    rootId: generalDiscount?.data?.general_discount?.id
                });
            }
        }
        else toast.error(message);

        setSubmitting(false);
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
                                data={{
                                    productTypes,
                                    categories,
                                    livingSpaces
                                }}
                                setDiscountSelected={setDiscountSelected}
                                submitting={submitting}
                            />
                        )
                    }
                </form>
            </Form>

            {
                currentDiscount &&
                <TooltipProvider>
                    <AdminProductDiscountTable
                        form={form}
                        formArray={formArray}
                        index={discountSelected}
                        currentDiscount={currentDiscount}
                        products={products}
                        setProducts={setProducts}
                    />
                </TooltipProvider>
            }
        </div>
    )
}