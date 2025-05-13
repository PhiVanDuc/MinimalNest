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

import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { PiTrashSimpleBold } from "react-icons/pi";
import { LuPercent } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";

import { cn } from "@/lib/utils";

export default function AdminProductDiscountForm({ form, formArray, index, data }) {
    const watchDiscounts = form.watch("discounts");
    const watchApplyAll = form.watch(`discounts.${index}.applyAll`);
    const watchDiscountType = form.watch(`discounts.${index}.discountType`);

    // Tính tập các giá trị đã dùng (type: e.g. productTypes)
    const usedProductTypes = watchDiscounts
        .filter((_, i) => i !== index)
        .flatMap((d) => d.productTypes ?? [])
        .map((pt) => pt.value)

    const usedCategories = watchDiscounts
        .filter((_, i) => i !== index)
        .flatMap((d) => d.categories ?? [])
        .map((cat) => cat.value)

    const usedLivingSpaces = watchDiscounts
        .filter((_, i) => i !== index)
        .flatMap((d) => d.livingSpaces ?? [])
        .map((ls) => ls.value)

    // Lọc ra những option chưa dùng
    const availableProductTypes = data.productTypes.filter(
        (pt) => !usedProductTypes.includes(pt.value)
    )

    const availableCategories = data.categories.filter(
        (cat) => !usedCategories.includes(cat.value)
    )

    const availableLivingSpaces = data.livingSpaces.filter(
        (ls) => !usedLivingSpaces.includes(ls.value)
    )

    return (
        <div className="p-[20px] rounded-[10px] bg-white space-y-[20px]">
            <div className="flex items-center justify-between">
                <FormField
                    control={form.control}
                    name={`discounts.${index}.applyAll`}
                    render={({ field }) => {
                        return (
                            <FormItem className="flex items-center gap-[10px]">
                                <FormLabel>Áp dụng cho tất cả sản phẩm</FormLabel>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />

                <PiTrashSimpleBold
                    size={24}
                    className="text-red-400 cursor-pointer"
                    onClick={() => { formArray.remove(index) }}
                />
            </div>

            {
                !watchApplyAll && (
                    <>
                        <FormField
                            control={form.control}
                            name={`discounts.${index}.productTypes`}
                            render={() => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Loại sản phẩm</FormLabel>
                                            
                                            <div className="flex flex-wrap items-center gap-[5px]">
                                                {
                                                    availableProductTypes.map((productType, subIndex) => {
                                                        return (
                                                            <FormField
                                                                key={productType.value + subIndex}
                                                                control={form.control}
                                                                name={`discounts.${index}.productTypes`}
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
                            name={`discounts.${index}.categories`}
                            render={() => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Danh mục</FormLabel>
                                            
                                            <div className="flex flex-wrap items-center gap-[5px]">
                                                {
                                                    availableCategories.map((category, subIndex) => {
                                                        return (
                                                            <FormField
                                                                key={category.value + subIndex}
                                                                control={form.control}
                                                                name={`discounts.${index}.categories`}
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
                            name={`discounts.${index}.livingSpaces`}
                            render={() => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Danh mục</FormLabel>
                                            
                                            <div className="flex flex-wrap items-center gap-[5px]">
                                                {
                                                    availableLivingSpaces.map((livingSpace, subIndex) => {
                                                        return (
                                                            <FormField
                                                                key={livingSpace.value + subIndex}
                                                                control={form.control}
                                                                name={`discounts.${index}.livingSpaces`}
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
                    name={`discounts.${index}.discountPrice`}
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