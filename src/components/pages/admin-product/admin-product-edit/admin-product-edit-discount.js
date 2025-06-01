"use client"

import { useEffect } from "react";
import { useWatch } from "react-hook-form";

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
import { Switch } from "@/components/ui/switch";

import { MdOutlineAttachMoney } from "react-icons/md";
import { LuPercent } from "react-icons/lu";

import formatCurrency, { convertToNumber } from "@/lib/utils/format-currency";

export default function AdminProductEditDiscount({ form }) {
    const watchCostPrice = convertToNumber(useWatch({ control: form.control, name: "costPrice" }) || "0");
    const watchInterestRate = convertToNumber(useWatch({ control: form.control, name: "interestRate" }) || "0");
    const watchDiscountAmount = convertToNumber(useWatch({ control: form.control, name: "discountAmount" }) || "0");
    const watchDiscount = useWatch({ control: form.control, name: "discount" });
    const watchTypeDiscount = useWatch({ control: form.control, name: "discountType" });

    useEffect(() => {
        if (!watchDiscount) {
            form.setValue("discountAmount", "0");
            form.setValue("discountType", "amount");
        }
    }, [watchDiscount]);

    useEffect(() => {
        let finalPrice = watchCostPrice + (watchCostPrice * (watchInterestRate / 100));
        if (watchDiscountAmount > 0) {
            if (watchTypeDiscount === "amount") finalPrice = finalPrice - watchDiscountAmount;
            else finalPrice = finalPrice - (finalPrice * (watchDiscountAmount / 100));
        }

        form.setValue("finalPrice", finalPrice);
    }, [watchCostPrice, watchInterestRate, watchDiscountAmount, watchTypeDiscount]);

    return (
        <>
            <FormField
                control={form.control}
                name="discount"
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="flex items-center gap-[20px]">
                                <FormLabel>Điều chỉnh giảm giá</FormLabel>

                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <div className="flex items-center gap-[10px]">
                <FormField
                    control={form.control}
                    name="discountType"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <div className="space-y-[5px]">
                                    <FormLabel>Loại giảm giá</FormLabel>

                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        disabled={watchDiscount ? false : true}
                                    >
                                        <FormControl>
                                            <SelectTrigger
                                                className="px-[15px] py-[20px] shadow-none"
                                            >
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
                    name="discountAmount"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <div className="space-y-[5px]">
                                    <FormLabel>Giảm giá <span className="text-[13px] text-blueChecked">{ watchTypeDiscount === "amount" ? "(Giá cố định)" : "(Phần trăm)" }</span></FormLabel>

                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Nhập số tiền giảm giá"
                                                className="px-[15px] py-[20px] pr-[38px]"
                                                value={formatCurrency(field.value)}
                                                onChange={(e) => {
                                                    const rawValue = e.target.value;
                                                    let filteredValue = rawValue.replace(/[^0-9,]/g, '');

                                                    if (watchTypeDiscount !== "amount") {
                                                        if (+filteredValue < 0) filteredValue = 0;
                                                        else if (+filteredValue > 100) filteredValue = 100
                                                    }

                                                    field.onChange(filteredValue);
                                                }}
                                                disabled={watchDiscount ? false : true}
                                            />

                                            <div className="absolute right-[10px] top-[50%] translate-y-[-50%] text-darkMedium">
                                                {
                                                    watchTypeDiscount === "amount" ?
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

            <FormField
                control={form.control}
                name="finalPrice"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Giá cuối cùng</FormLabel>

                                <FormControl>
                                    <Input
                                        className="px-[15px] py-[20px]"
                                        placeholder="Đây sẽ là giá cuối cùng của sản phẩm . . ."
                                        value={formatCurrency(field.value)}
                                        disabled={true}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />
        </>
    )
}