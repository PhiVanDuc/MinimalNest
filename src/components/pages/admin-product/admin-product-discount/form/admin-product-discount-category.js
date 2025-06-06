"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";

export default function AdminProductDiscountCategory({ form, index, categories }) {
    return (
        <FormField
            control={form.control}
            name={`discounts.${index}.categoryIds`}
            render={() => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Danh mục</FormLabel>
                            
                            <div className="flex flex-wrap items-center gap-[5px]">
                                {
                                    categories.map((category) => {
                                        return (
                                            <FormField
                                                key={category?.id}
                                                control={form.control}
                                                name={`discounts.${index}.categoryIds`}
                                                render={({ field }) => {
                                                    const checked = field.value.some(value => value === category?.id);

                                                    return (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={checked}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked ?
                                                                        field.onChange([...field.value, category?.id]) :
                                                                        field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== category?.id
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
                                                                {category.category}
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
