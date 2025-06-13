"use client"

import { useFieldArray, useForm } from "react-hook-form";

import cartColumns from "./table/cart-columns";
import CartSummary from "./cart-summary";
import CustomTable from "@/components/customs/admin/custom-table";

import { TooltipProvider } from "@/components/ui/tooltip";

export default function CartClient({
    decode,
    cart
}) {
    const form = useForm({
        defaultValues: {
            products: cart?.cart_items?.map(item => ({
                ...item,
                selected: false
            }))
        }
    });

    const productsArray = useFieldArray({
        control: form.control,
        name: "products",
        keyName: "_id"
    });

    return (
        <div className="space-y-[40px]">
            <header className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                <h1 className="text-[20px] md:text-[24px] font-semibold text-darkBold">Giỏ hàng</h1>
                <p className="text-[14px] md:text-[16px] font-medium text-darkBold">Có <span className="text-yellowBold">{cart?.cart_items?.length || 0} sản phẩm</span> trong giỏ hàng của bạn.</p>
            </header>

            <div className="relative flex flex-col xl:flex-row items-start gap-[20px]">
                <TooltipProvider>
                    <CustomTable
                        data={cart?.cart_items || []}
                        columns={cartColumns}
                        moreData={{
                            form,
                            productsArray
                        }}
                    />
                </TooltipProvider>

                <CartSummary
                    accountId={decode?.decode?.id}
                    form={form}
                />
            </div>
        </div>
    )
}