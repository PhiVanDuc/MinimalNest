"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";

export default function AdminProductDiscountProductType({ form, index, productTypes }) {
    return (
        <FormField
            control={form.control}
            name={`discounts.${index}.productTypeIds`}
            render={() => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Loại sản phẩm</FormLabel>
                            
                            <div className="flex flex-wrap items-center gap-[5px]">
                                {
                                    productTypes.map((productType) => {
                                        return (
                                            <FormField
                                                key={productType?.id}
                                                control={form.control}
                                                name={`discounts.${index}.productTypeIds`}
                                                render={({ field }) => {
                                                    const checked = field.value?.some(value => value === productType?.id);

                                                    return (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={checked}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked ?
                                                                        field.onChange([...field.value, productType?.id]) :
                                                                        field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== productType?.id
                                                                                )
                                                                            )
                                                                        }
                                                                    }
                                                                    className="hidden"
                                                                    
                                                                />
                                                            </FormControl>

                                                            <FormLabel
                                                                className={cn(
                                                                    "shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border cursor-pointer",
                                                                    checked ? "border-neutral-400 bg-neutral-100" : ""
                                                                )}
                                                            >
                                                                {productType.product_type}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </FormItem>
                )
            }}
        />
    )
}
