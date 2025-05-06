"use client"

import { cn } from "@/lib/utils";
import { sizes } from "@/static/admin-product";

export default function AdminProductAddSize({
    form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    Checkbox
}) {
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
                                {
                                    sizes.map((size, index) => {
                                        return (
                                            <FormField
                                                key={size.value + index}
                                                control={form.control}
                                                name="sizes"
                                                render={({ field }) => {
                                                    const checked = field.value.some(value => value?.value === size?.value);

                                                    return (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={checked}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked ?
                                                                        field.onChange([...field.value, size]) :
                                                                        field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value.value !== size.value
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
                                                                {size.label}
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