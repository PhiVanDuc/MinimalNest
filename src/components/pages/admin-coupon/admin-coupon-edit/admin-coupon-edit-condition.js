"use client"

import { useEffect } from "react";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { v4 } from "uuid";
import { cn } from "@/lib/utils";
import formatCurrency from "@/lib/utils/format-currency";

const listConditions = [
    {
        id: v4(),
        label: "Đăng nhập",
        value: "login"
    },
    {
        id: v4(),
        label: "Tổng hóa đơn bé nhất",
        value: "min-total"
    },
    {
        id: v4(),
        label: "Tổng số lượng sản phẩm bé nhất",
        value: "min-product"
    },
]

export default function AdminCouponEditCondition({ form, submitting }) {
    const minTotalChecked = form.watch("conditions").some(con => con === "min-total");
    const minProductChecked = form.watch("conditions").some(con => con === "min-product");

    useEffect(() => {
        form.setValue("minTotal", "");
    }, [form, minTotalChecked]);

    useEffect(() => {
        form.setValue("minProduct", "");
    }, [form, minProductChecked]);

    return (
        <div className="space-y-[20px] p-[20px] rounded-[10px] bg-white">
            <div className={cn(
                "",
                minTotalChecked || minProductChecked ? "space-y-[20px]" : ""
            )}>
                <FormField
                    control={form.control}
                    name="conditions"
                    render={() => {
                        return (
                            <FormItem>
                                <div className="space-y-[5px]">
                                    <FormLabel>Điều kiện áp dụng</FormLabel>

                                    <div className="flex items-center gap-[20px]">
                                        {
                                            listConditions.map((con, index) => {
                                                return (
                                                    <FormField
                                                        key={con.id}
                                                        control={form.control}
                                                        name="conditions"
                                                        render={({ field }) => {
                                                            return (
                                                                <FormItem className="flex items-center gap-[5px] w-full">
                                                                    <FormControl>
                                                                        <Checkbox
                                                                            checked={field.value?.includes(con.value)}
                                                                            onCheckedChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field.value, con.value])
                                                                                    : field.onChange(
                                                                                        field.value?.filter(
                                                                                        (value) => value !== con.value
                                                                                        )
                                                                                    )
                                                                                }
                                                                            }
                                                                            disabled={index === 0 ? true : false}
                                                                        />
                                                                    </FormControl>

                                                                    <FormLabel>{con.label}</FormLabel>
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

                <div className="flex items-start gap-[15px]">
                    {
                        minTotalChecked && (
                            <FormField
                                control={form.control}
                                name="minOrderTotal"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <div className="space-y-[5px]">
                                                <FormLabel>Tổng hóa đơn bé nhất</FormLabel>

                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập tổng hóa đơn bé nhất . . ."
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
                        )
                    }

                    {
                        minProductChecked &&
                        (
                            <FormField
                                control={form.control}
                                name="minItems"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <div className="space-y-[5px]">
                                                <FormLabel>Tổng sản phẩm bé nhất</FormLabel>

                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập tổng sản phẩm bé nhất . . ."
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
                        )
                    }
                </div>
            </div>

            <FormField
                control={form.control}
                name="customerType"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel className="text-[15px] font-medium">Áp dụng cho khách hàng</FormLabel>

                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex items-center gap-[20px]"
                                    >
                                        <FormItem className="w-full">
                                            <FormLabel className="flex items-center gap-[5px]">
                                                <FormControl>
                                                    <RadioGroupItem value="all" />
                                                </FormControl>

                                                <span>Tất cả</span>
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="w-full">
                                            <FormLabel className="flex items-center gap-[5px]">
                                                <FormControl>
                                                    <RadioGroupItem value="first_time" />
                                                </FormControl>

                                                <span>Khách hàng lần đầu</span>
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="w-full">
                                            <FormLabel className="flex items-center gap-[5px]">
                                                <FormControl>
                                                    <RadioGroupItem value="new" />
                                                </FormControl>

                                                <span>Khách hàng mới</span>
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="w-full">
                                            <FormLabel className="flex items-center gap-[5px]">
                                                <FormControl>
                                                    <RadioGroupItem value="vip" />
                                                </FormControl>

                                                <span>Khách hàng quen</span>
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <Button
                className="w-full"
                disabled={submitting}
            >
                { submitting ? "Đang chỉnh sửa" : "Chỉnh sửa phiếu giảm giá" }
            </Button>
        </div>
    )
}
