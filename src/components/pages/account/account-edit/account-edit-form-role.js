"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AccountEditFormRole({ form, roles, submitting }) {
    return (
        <div className="space-y-[20px] p-[20px] rounded-[10px] bg-white">
            <FormField
                control={form.control}
                name="roles"
                render={() => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Chọn các vai trò</FormLabel>

                                <div className="flex flex-wrap gap-[10px] items-center">
                                    {
                                        roles.map(role => {
                                            return (
                                                <FormField
                                                    key={role?.id}
                                                    control={form.control}
                                                    name="roles"
                                                    render={({ field }) => {
                                                        const checked = field.value?.includes(role?.id);

                                                        return (
                                                            <FormItem>
                                                                <FormLabel
                                                                    className={cn(
                                                                        "shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border cursor-pointer",
                                                                        checked ? "border-neutral-400 bg-neutral-100" : ""
                                                                    )}
                                                                >
                                                                    <span>{role?.role}</span>

                                                                    <FormControl>
                                                                        <Checkbox
                                                                            checked={field.value?.includes(role?.id)}
                                                                            onCheckedChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field.value, role?.id])
                                                                                    : field.onChange(
                                                                                        field.value?.filter(
                                                                                        (value) => value !== role?.id
                                                                                        )
                                                                                    )
                                                                                }
                                                                            }
                                                                            className="hidden"
                                                                        />
                                                                    </FormControl>
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

            <Button
                className="w-full"
                disabled={submitting}
            >
                { submitting ? "Đang thay đổi" : "Lưu thay đổi" }
            </Button>
        </div>
    )
}