"use client"

import {
    useForm,
    useFieldArray
} from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import AdminProductDiscountForm from "./admin-product-discount-form";

import {
    productTypes,
    categories,
    livingSpaces
} from "@/static/admin-product";

export default function AdminProductDiscountClient() {
    const form = useForm({
        defaultValues: {
            discounts: []
        }
    });

    const formArray = useFieldArray({
        control: form.control,
        name: "discounts"
    });

    const data = {
        productTypes,
        categories,
        livingSpaces
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="space-y-[30px]">
            <header className="space-y-[5px]">
                <h1 className="text-[24px] font-semibold">Giảm giá chung</h1>
                <p className="text-[14px] text-darkMedium font-medium">Nếu một chương trình giảm giá được chọn "Áp dụng cho tất cả sản phẩm", thì các chương trình giảm giá khác sẽ không được áp dụng.</p>
            </header>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-[20px]"
                >
                    {
                        formArray.fields.map((field, index) => {
                            console.log(index);

                            return (
                                <AdminProductDiscountForm
                                    key={field.id}
                                    form={form}
                                    formArray={formArray}
                                    index={index}
                                    data={data}
                                />
                            )
                        })
                    }

                    <div className="flex gap-[10px] p-[20px] rounded-[10px] bg-white">
                        <Button
                            type="button"
                            variant="outline"
                            className="w-[30%] shadow-none"
                            onClick={() => {
                                formArray.append({
                                    applyAll: false,
                                    productTypes: [],
                                    categories: [],
                                    livingSpaces: [],
                                    discountType: "fixed",
                                    discountPrice: ""
                                });
                            }}
                        >
                            Thêm giảm giá
                        </Button>

                        <Button
                            className="w-[70%] shadow-none"
                        >
                            Lưu giảm giá
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}