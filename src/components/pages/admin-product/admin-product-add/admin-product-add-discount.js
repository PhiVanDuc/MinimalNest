"use client"

import { Switch } from "@/components/ui/switch";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";

import { MdOutlineAttachMoney } from "react-icons/md";
import { LuPercent } from "react-icons/lu";

export default function AdminProductAddDiscount({
    form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    Input
}) {
    const watchDiscount = form.watch("discount");
    const watchTypeDiscount = form.watch("typeDiscount");

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
                    name="typeDiscount"
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
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder="Chọn loại giảm giá."
                                                    className="px-[15px] py-[20px] shadow-none"
                                                />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="fixed">Giảm theo giá cố định</SelectItem>
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
                                    <FormLabel>Giảm giá <span className="text-[13px] text-blueChecked">{ watchTypeDiscount === "fixed" ? "(Giá cố định)" : "(Phần trăm)" }</span></FormLabel>

                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Nhập số tiền giảm giá"
                                                className="px-[15px] py-[20px] pr-[38px]"
                                                {...field}
                                                disabled={watchDiscount ? false : true}
                                            />

                                            <div className="absolute right-[10px] top-[50%] translate-y-[-50%] text-darkMedium">
                                                {
                                                    watchTypeDiscount === "fixed" ?
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
                                        {...field}
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