"use client"

import { cn } from "@/lib/utils";
import { livingSpaces } from "@/static/admin-product";

export default function AdminProductEditLivingSpace({
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
            name="livingSpaces"
            render={() => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Không gian sống</FormLabel>
                            
                            <div className="flex flex-wrap items-center gap-[5px]">
                                {
                                    livingSpaces.map((livingSpace, index) => {
                                        return (
                                            <FormField
                                                key={livingSpace.value + index}
                                                control={form.control}
                                                name="livingSpaces"
                                                render={({ field }) => {
                                                    const checked = field.value.some(value => value?.value === livingSpace?.value);

                                                    return (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={checked}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked ?
                                                                        field.onChange([...field.value, livingSpace]) :
                                                                        field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value.value !== livingSpace.value
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
                                                                {livingSpace.label}
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
