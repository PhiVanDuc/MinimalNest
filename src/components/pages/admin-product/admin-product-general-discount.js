"use client"

import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { MdOutlineAttachMoney } from "react-icons/md";
import { LuPercent } from "react-icons/lu";

import { categories, livingSpaces } from "@/static/admin-product";
import { cn } from "@/lib/utils";

/*
    Áp dụng cho các sản phẩm

    1. Loại sản phẩm
    1.1. Tất cả
    1.2. Mới nhất
    1.3. Bán chạy nhất
    1.4. Bình thường
    
    2. Danh mục
    2.1. Tất cả
    2.2. Danh sách các danh mục

    3. Không gian sống
    3.1. Tất cả
    3.2. Danh sách các không gian sống

    Loại giảm giá
    
    1. Giảm giá theo phần trăm
    2. Giảm giá theo giá cố định

    Nhập số muốn giảm
*/

const productTypes = [
    {
        value: "latest",
        label: "Mới nhất",
    },
    {
        value: "best-selling",
        label: "Bán chạy nhất",
    },
    {
        value: "normal",
        label: "Bình thường",
    }
];

export default function AdminProductGeneralDiscount() {
    const form = useForm({
        defaultValues: {
            discount: true,
            applyAll: false,
            productTypes: [],
            categories: [],
            livingSpaces: [],
            discountType: "fixed",
            discountPrice: ""
        }
    });

    const watchDiscount = form.watch("discount");
    const watchApplyAll = form.watch("applyAll");
    const watchDiscountType = form.watch("discountType");

    return (
        <Form {...form}>
            <form className="p-[20px] bg-white rounded-[10px]">
                <header className="flex items-center justify-between">
                    <h2 className="text-[18px] font-semibold">Giảm giá chung</h2>

                    <div>
                        <FormField
                            control={form.control}
                            name="discount"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <div className="flex items-center gap-[20px] w-fit">
                                            <FormLabel>Giảm giá chung</FormLabel>
            
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
                    </div>
                </header>

                {
                    watchDiscount && (
                        <div className="space-y-[20px] mt-[20px]">
                            <FormField
                                control={form.control}
                                name="applyAll"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <div className="flex items-center gap-[20px]">
                                                <FormLabel>Áp dụng cho tất cả sản phẩm</FormLabel>
                
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

                            {
                                !watchApplyAll && (
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="productTypes"
                                            render={() => {
                                                return (
                                                    <FormItem>
                                                        <div className="space-y-[5px]">
                                                            <FormLabel>Loại sản phẩm</FormLabel>
                                                            
                                                            <div className="flex flex-wrap items-center gap-[5px]">
                                                                {
                                                                    productTypes.map((productType, index) => {
                                                                        return (
                                                                            <FormField
                                                                                key={productType.value + index}
                                                                                control={form.control}
                                                                                name="productTypes"
                                                                                render={({ field }) => {
                                                                                    const checked = field.value.some(value => value?.value === productType?.value);

                                                                                    return (
                                                                                        <FormItem>
                                                                                            <FormControl>
                                                                                                <Checkbox
                                                                                                    checked={checked}
                                                                                                    onCheckedChange={(checked) => {
                                                                                                        return checked ?
                                                                                                        field.onChange([...field.value, productType]) :
                                                                                                        field.onChange(
                                                                                                                field.value?.filter(
                                                                                                                    (value) => value.value !== productType.value
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
                                                                                                {productType.label}
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

                                        <FormField
                                            control={form.control}
                                            name="categories"
                                            render={() => {
                                                return (
                                                    <FormItem>
                                                        <div className="space-y-[5px]">
                                                            <FormLabel>Danh mục</FormLabel>
                                                            
                                                            <div className="flex flex-wrap items-center gap-[5px]">
                                                                {
                                                                    categories.map((category, index) => {
                                                                        return (
                                                                            <FormField
                                                                                key={category.value + index}
                                                                                control={form.control}
                                                                                name="categories"
                                                                                render={({ field }) => {
                                                                                    const checked = field.value.some(value => value?.value === category?.value);

                                                                                    return (
                                                                                        <FormItem>
                                                                                            <FormControl>
                                                                                                <Checkbox
                                                                                                    checked={checked}
                                                                                                    onCheckedChange={(checked) => {
                                                                                                        return checked ?
                                                                                                        field.onChange([...field.value, category]) :
                                                                                                        field.onChange(
                                                                                                                field.value?.filter(
                                                                                                                    (value) => value.value !== category.value
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
                                                                                                {category.label}
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
                                    </>
                                )
                            }

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
                                                    <FormLabel>Giảm giá <span className="text-[13px] text-blueChecked">{ watchDiscountType === "fixed" ? "(Giá cố định)" : "(Phần trăm)" }</span></FormLabel>
                
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
                                                                    watchDiscountType === "fixed" ?
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
                        </div>
                    )
                }

                <div className="flex justify-end mt-[20px]">
                    <Button>Áp dụng</Button>
                </div>
            </form>
        </Form>
    )
}
