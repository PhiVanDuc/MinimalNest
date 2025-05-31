"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function AdminProductAddName({ form }) {
    return (
        <FormField
            control={form.control}
            name="product"
            render={({ field }) => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Tên sản phẩm</FormLabel>

                            <FormControl>
                                <Input
                                    className="px-[15px] py-[20px]"
                                    placeholder="Nhập tên sản phẩm . . ."
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
