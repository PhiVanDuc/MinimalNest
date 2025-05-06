"use client"

import { cn } from "@/lib/utils";
import { categories } from "@/static/admin-product";

export default function AdminProductEditCategory({
    form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    RadioGroup,
    RadioGroupItem
}) {
    return (
        <FormField
            control={form.control}
            name="category"
            render={({ field }) => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Danh mục</FormLabel>

                            <FormControl>
                                <RadioGroup
                                    onValueChange={(value) => {
                                        const obj = categories.find(category => category.value === value);
                                        if (obj) field.onChange(obj);
                                    }}
                                    className="flex flex-wrap items-center gap-[5px]"
                                >
                                    {
                                        categories.map((category, index) => {
                                            const checked = field.value?.value === category.value;

                                            return (
                                                <FormItem
                                                    key={category.value + index}
                                                >
                                                    <FormLabel
                                                        className={cn(
                                                            "shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border cursor-pointer",
                                                            checked ? "border-neutral-400 bg-neutral-100" : ""
                                                        )}
                                                    >
                                                        <FormControl className="hidden">
                                                            <RadioGroupItem value={category.value} />
                                                        </FormControl>

                                                        <span>{category.label}</span>
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </FormItem>
                )
            }}
        />
    )
}