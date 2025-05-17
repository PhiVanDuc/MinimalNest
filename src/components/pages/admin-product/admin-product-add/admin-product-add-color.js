"use client"

import { useEffect } from "react";

import { v4 } from "uuid";
import { cn } from "@/lib/utils";
import { colors } from "@/static/admin-product";

export default function AdminProductAddColor({
    form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    Checkbox
}) {
    const watchColors = form.watch("colors");
    
    useEffect(() => {
        const existing = form.getValues("images");

        const synced = watchColors.map((col) => {
            const found = existing.find((img) => img.color.value === col.value);
            return found ?? { color: col, files: [] };
        });

        form.setValue("images", synced);
    }, [watchColors, form]);

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
                                        key={color.value + index}
                                        control={form.control}
                                        name="colors"
                                        render={({ field }) => {
                                            const checked = field.value.some(
                                                (v) => v.value === color.value
                                            );

                                            return (
                                                <FormItem>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={checked}
                                                            onCheckedChange={(isChecked) => {
                                                                const newVals = isChecked
                                                                    ? [...field.value, color]
                                                                    : field.value.filter(
                                                                        (v) => v.value !== color.value
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
                                                                backgroundColor: color.value
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