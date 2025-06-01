"use client"

import { useEffect } from "react";
import { useWatch } from "react-hook-form";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function AdminProductAddColor({ form, colors }) {
    const watchColors = useWatch({
        control: form.control,
        name: "colors"
    });

    useEffect(() => {
        form.setValue("colorImages", {});
    }, [watchColors, form]);

    return (
        <FormField
            control={form.control}
            name="colors"
            render={() => (
                <FormItem>
                    <div className="space-y-[5px]">
                        <FormLabel>Màu sắc</FormLabel>

                        <div className="flex flex-wrap items-center gap-[5px]">
                            {
                                colors.map((color, index) => (
                                    <FormField
                                        key={color?.id}
                                        control={form.control}
                                        name="colors"
                                        render={({ field }) => {
                                            const checked = field.value.some(value => value?.id === color?.id);

                                            return (
                                                <FormItem>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={checked}
                                                            onCheckedChange={(isChecked) => {
                                                                const newVals = isChecked
                                                                    ? [...field.value, color]
                                                                    : field.value.filter(
                                                                        (v) => v?.id !== color?.id
                                                                    );
                                                                field.onChange(newVals);
                                                            }}
                                                            className="hidden"
                                                        />
                                                    </FormControl>
                                                    
                                                    <FormLabel
                                                        className={cn(
                                                            "shrink-0 flex items-center justify-center w-[33px] aspect-square rounded-full border-[1.5px] cursor-pointer",
                                                            checked ? "border-neutral-500" : ""
                                                        )}
                                                    >

                                                        <span
                                                            className="w-[25px] aspect-square rounded-full"
                                                            style={{
                                                                backgroundColor: color?.code
                                                            }}
                                                        />
                                                    </FormLabel>
                                                </FormItem>
                                            );
                                        }}
                                    />
                                ))
                            }
                        </div>

                        <FormDescription>Lưu ý: Nếu bạn bỏ chọn màu đã tải ảnh lên, những ảnh đó sẽ biến mất.</FormDescription>
                    </div>
                </FormItem>
            )}
        />
    )
}