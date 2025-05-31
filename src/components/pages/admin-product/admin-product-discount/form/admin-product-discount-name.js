"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

export default function AdminProductDiscountName({ form, index }) {
    return (
        <FormField
            control={form.control}
            name={`discounts.${index}.discountName`}
            render={({ field }) => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Tên giảm giá</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Nhập tên mã giảm giá . . ."
                                    className="px-[15px] py-[20px]"
                                    {...field}
                                />
                            </FormControl>
                        </div>
                    </FormItem>
                )
            }}
        />
    )
}
