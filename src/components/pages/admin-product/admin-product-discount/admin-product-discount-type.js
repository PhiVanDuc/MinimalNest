"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { LuPercent } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function AdminProductDiscountType({ form, index }) {
    const watchDiscountType = form.watch(`discounts.${index}.discountType`);

    return (
        <div className="flex items-center gap-[10px]">
            <FormField
                control={form.control}
                name={`discounts.${index}.discountType`}
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Loại giảm giá</FormLabel>

                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    
                                >
                                    <FormControl>
                                        <SelectTrigger className="px-[15px] py-[20px] shadow-none">
                                            <SelectValue
                                                placeholder="Chọn loại giảm giá."
                                            />
                                        </SelectTrigger>
                                    </FormControl>

                                    <SelectContent>
                                        <SelectItem value="amount">Giảm theo giá cố định</SelectItem>
                                        <SelectItem value="percent">Giảm theo phần trăm</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name={`discounts.${index}.discountPrice`}
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Giảm giá <span className="text-[13px] text-blueChecked">{ watchDiscountType === "amount" ? "(Giá cố định)" : "(Phần trăm)" }</span></FormLabel>

                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            placeholder="Nhập số tiền giảm giá"
                                            className="px-[15px] py-[20px] pr-[38px]"
                                            {...field}
                                            
                                        />

                                        <div className="absolute right-[10px] top-[50%] translate-y-[-50%] text-darkMedium">
                                            {
                                                watchDiscountType === "amount" ?
                                                <MdOutlineAttachMoney size={18} /> :
                                                <LuPercent size={18} />
                                            }
                                        </div>
                                    </div>
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />
        </div>
    )
}
