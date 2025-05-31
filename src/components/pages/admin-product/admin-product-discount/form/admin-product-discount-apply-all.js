"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function AdminProductDiscountApplyAll({ form, formArray, index, setDiscountSelected }) {
    return (
        <div className="w-full flex justify-between items-center">
            <FormField
                control={form.control}
                name={`discounts.${index}.applyAll`}
                render={({ field }) => {
                    return (
                        <FormItem className="flex items-center gap-[10px]">
                            <FormLabel>Áp dụng cho tất cả sản phẩm</FormLabel>
                            <FormControl>
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    
                                />
                            </FormControl>
                        </FormItem>
                    )
                }}
            />

            <div className="flex gap-[10px] items-center">
                <Button
                    type="button"
                    variant="outline"
                    className="shadow-none"
                    onClick={() => {
                        formArray.remove(index);
                        setDiscountSelected(null);
                    }}
                    
                >
                    Xóa
                </Button>
                <Button >Lưu giảm giá</Button>
            </div>
        </div>
    )
}
