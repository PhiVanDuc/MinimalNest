"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";

export default function AdminProductEditLivingSpace({
    form,
    livingSpaces
}) {
    return (
        <FormField
            control={form.control}
            name="livingSpaceIds"
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
                                                key={livingSpace?.id}
                                                control={form.control}
                                                name="livingSpaceIds"
                                                render={({ field }) => {
                                                    const livChecked = field.value?.includes(livingSpace?.id);

                                                    return (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={livChecked}
                                                                    onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, livingSpace?.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                            (value) => value !== livingSpace?.id
                                                                            )
                                                                        )
                                                                    }}
                                                                    className="hidden"
                                                                />
                                                            </FormControl>

                                                            <FormLabel
                                                                className={cn(
                                                                    "shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border cursor-pointer",
                                                                    livChecked ? "border-neutral-400 bg-neutral-100" : ""
                                                                )}
                                                            >
                                                                {livingSpace?.living_space}
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
