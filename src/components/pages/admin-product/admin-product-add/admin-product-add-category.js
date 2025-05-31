"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { cn } from "@/lib/utils";

export default function AdminProductAddCategory({ form, categories }) {
    return (
        <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Danh mục</FormLabel>

                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-wrap items-center gap-[5px]"
                                >
                                    {
                                        categories.map((category, index) => {
                                            const checked = field.value === category?.id;

                                            return (
                                                <FormItem
                                                    key={category?.id}
                                                >
                                                    <FormLabel
                                                        className={cn(
                                                            "shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border cursor-pointer",
                                                            checked ? "border-neutral-400 bg-neutral-100" : ""
                                                        )}
                                                    >
                                                        <FormControl className="hidden">
                                                            <RadioGroupItem value={category?.id} />
                                                        </FormControl>

                                                        <span>{category.category}</span>
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