"use client"

import { useWatch } from "react-hook-form";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function AdminProductAddSize({ form, sizes }) {
    const watchCategoryId = useWatch({ control: form.control, name: "categoryId" });
    const filterSizes = sizes?.filter(size => size?.category_id === watchCategoryId);

    return (
        <FormField
            control={form.control}
            name="sizes"
            render={() => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Kích cỡ</FormLabel>

                            <div className="flex flex-wrap items-center gap-[5px]">
                                <TooltipProvider>
                                    {filterSizes.map((size) => {
                                        return (
                                            <FormField
                                                key={size?.id}
                                                control={form.control}
                                                name="sizes"
                                                render={({ field }) => {
                                                    const checked = field.value?.some((value) => value?.id === size?.id);

                                                    return (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={checked}
                                                                    onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, size])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                            (value) => value?.id !== size?.id
                                                                            )
                                                                        )
                                                                    }}
                                                                    className="hidden"
                                                                />
                                                            </FormControl>

                                                            <Tooltip>
                                                                <TooltipTrigger asChild>
                                                                    <FormLabel
                                                                        className={cn(
                                                                            "shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border cursor-pointer",
                                                                            checked ? "border-neutral-400 bg-neutral-100" : ""
                                                                        )}
                                                                    >
                                                                        {size?.size}
                                                                    </FormLabel>
                                                                </TooltipTrigger>

                                                                <TooltipContent>{size.desc}</TooltipContent>
                                                            </Tooltip>
                                                        </FormItem>
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </TooltipProvider>
                            </div>
                        </div>
                    </FormItem>
                );
            }}
        />

    )
}