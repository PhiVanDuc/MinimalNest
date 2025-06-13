"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { LuPercent } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import formatCurrency from "@/lib/utils/format-currency";

export default function AdminCouponEditGeneral({ form }) {
    const discountType = form.watch("discountType");

    return (
        <div className="space-y-[20px] p-[20px] rounded-[10px] bg-white">
            <FormField
                control={form.control}
                name="code"
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Mã phiếu</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập mã phiếu giảm giá . . ."
                                        {...field}
                                        className="px-[15px] py-[20px]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name="desc"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Mô tả</FormLabel>

                                <FormControl>
                                    <Textarea
                                        placeholder="Nhập tiêu đề phiếu giảm giá . . ."
                                        {...field}
                                        className="px-[15px] py-[12px] h-[100px] resize-none"
                                    />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )
                }}
            />

            <div className="flex items-start gap-[15px]">
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
                                    >
                                        <FormControl>
                                            <SelectTrigger className="px-[15px] py-[20px] shadow-none">
                                                <SelectValue
                                                    placeholder="Chọn sự kiện cho phiếu giảm giá."
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
                    name="discountPrice"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <div className="space-y-[5px]">
                                    <FormLabel>Giảm giá <span className="text-[13px] text-blueChecked">{ discountType === "amount" ? "(Giá cố định)" : "(Phần trăm)" }</span></FormLabel>

                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Nhập số tiền giảm giá"
                                                className="px-[15px] py-[20px] pr-[38px]"
                                                value={formatCurrency(field.value || '')}
                                                onChange={(e) => {
                                                    const rawValue = e.target.value;
                                                    let filteredValue = rawValue.replace(/[^0-9,]/g, '');

                                                    if (discountType !== "amount") {
                                                        if (+filteredValue < 0) filteredValue = 0;
                                                        else if (+filteredValue > 100) filteredValue = 100
                                                    }

                                                    field.onChange(filteredValue);
                                                }}
                                            />

                                            <div className="absolute right-[10px] top-[50%] translate-y-[-50%] text-darkMedium">
                                                {
                                                    discountType === "amount" ?
                                                    <MdOutlineAttachMoney size={18} /> :
                                                    <LuPercent size={18} />
                                                }
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )
                    }}
                />
            </div>

            <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Số lượng</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập số lượng phiếu giảm giá . . ."
                                        className="px-[15px] py-[20px] pr-[38px]"
                                        value={formatCurrency(field.value || '')}
                                        onChange={(e) => {
                                            const rawValue = e.target.value;
                                            const filteredValue = rawValue.replace(/[^0-9,]/g, '');

                                            field.onChange(filteredValue);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )
                }}
            />
        </div>
    )
}
