"use client"

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { LuPercent } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { v4 } from "uuid";
import { cn } from "@/lib/utils";

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

export default function AdminCouponAdd() {
    const form = useForm({
        defaultValues: {
            event: "",
            title: "",
            desc: "",
            discountType: "fixed",
            discount: "0",
            conditions: ["login"],
            minTotal: "",
            minProduct: "",
            customerType: "initial-customer",
            status: "active"
        }
    });

    const discountType = form.watch("discountType");
    const minTotalChecked = form.watch("conditions").some(con => con === "min-total");
    const minProductChecked = form.watch("conditions").some(con => con === "min-product");

    useEffect(() => {
        form.setValue("discount", "0");
    }, [form, discountType]);

    useEffect(() => {
        form.setValue("minTotal", "");
    }, [form, minTotalChecked]);

    useEffect(() => {
        form.setValue("minProduct", "");
    }, [form, minProductChecked]);

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Thêm phiếu giảm giá</h2>
            </header>

            <Form {...form}>
                <form
                    className="p-[20px] rounded-[10px] bg-white space-y-[20px]"
                >
                    <div className="flex items-center gap-[15px]">
                        <FormField
                            control={form.control}
                            name="event"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <div className="space-y-[5px]">
                                            <FormLabel>Sự kiện</FormLabel>

                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue
                                                            placeholder="Chọn sự kiện cho phiếu giảm giá."
                                                            className="px-[15px] py-[20px] shadow-none"
                                                        />
                                                    </SelectTrigger>
                                                </FormControl>

                                                <SelectContent>
                                                    <SelectItem value="id-1">Tiêu đề của sự kiện</SelectItem>
                                                    <SelectItem value="id-2">Tiêu đề của sự kiện</SelectItem>
                                                    <SelectItem value="id-3">Tiêu đề của sự kiện</SelectItem>
                                                    <SelectItem value="id-4">Tiêu đề của sự kiện</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </FormItem>
                                )
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <div className="space-y-[5px]">
                                            <FormLabel>Tiêu đề</FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập tiêu đề phiếu giảm giá . . ."
                                                    {...field}
                                                    className="px-[15px] py-[20px]"
                                                />
                                            </FormControl>
                                        </div>
                                    </FormItem>
                                )
                            }}
                        />
                    </div>

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
                                                                        <FormItem className="flex items-center gap-[5px]">
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

                        <div className="flex items-center gap-[15px]">
                            {
                                minTotalChecked && (
                                    <FormField
                                        control={form.control}
                                        name="minTotal"
                                        render={({ field }) => {
                                            return (
                                                <FormItem className="w-full">
                                                    <div className="space-y-[5px]">
                                                        <FormLabel>Tổng hóa đơn bé nhất</FormLabel>

                                                        <FormControl>
                                                            <Input
                                                                placeholder="Nhập tổng hóa đơn bé nhất . . ."
                                                                className="px-[15px] py-[20px] pr-[38px]"
                                                                {...field}
                                                            />
                                                        </FormControl>
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
                                        name="minProduct"
                                        render={({ field }) => {
                                            return (
                                                <FormItem className="w-full">
                                                    <div className="space-y-[5px]">
                                                        <FormLabel>Tổng sản phẩm bé nhất</FormLabel>

                                                        <FormControl>
                                                            <Input
                                                                placeholder="Nhập tổng sản phẩm bé nhất . . ."
                                                                className="px-[15px] py-[20px] pr-[38px]"
                                                                {...field}
                                                            />
                                                        </FormControl>
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
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

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
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="initial-customer" />
                                                        </FormControl>

                                                        <span>Khách hàng chưa mua</span>
                                                    </FormLabel>
                                                </FormItem>

                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="new-customer" />
                                                        </FormControl>

                                                        <span>Khách hàng mới</span>
                                                    </FormLabel>
                                                </FormItem>

                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="old-customer" />
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

                    <div className="flex items-center gap-[15px]">
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
                                                    <SelectTrigger>
                                                        <SelectValue
                                                            placeholder="Chọn sự kiện cho phiếu giảm giá."
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
                            name="discount"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <div className="space-y-[5px]">
                                            <FormLabel>Giảm giá <span className="text-[13px] text-blueChecked">{ discountType === "fixed" ? "(Giá cố định)" : "(Phần trăm)" }</span></FormLabel>

                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        placeholder="Nhập số tiền giảm giá"
                                                        className="px-[15px] py-[20px] pr-[38px]"
                                                        {...field}
                                                    />

                                                    <div className="absolute right-[10px] top-[50%] translate-y-[-50%] text-darkMedium">
                                                        {
                                                            discountType === "fixed" ?
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
                        name="status"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel className="text-[15px] font-medium">Đổi trạng thái</FormLabel>

                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex items-center gap-[20px]"
                                            >
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="active" />
                                                        </FormControl>

                                                        <span>Kích hoạt</span>
                                                    </FormLabel>
                                                </FormItem>

                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="inactive" />
                                                        </FormControl>

                                                        <span>Không kích hoạt</span>
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <div className="text-right">
                        <Button>Thêm phiếu giảm giá</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}
