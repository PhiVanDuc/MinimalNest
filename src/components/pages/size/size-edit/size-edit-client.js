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
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { v4 } from "uuid";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const listCategory = [
    {
        value: "bed",
        label: "Giường",
    },
    {
        value: "chair",
        label: "Ghế",
    },
    {
        value: "table",
        label: "Bàn",
    },
    {
        value: "rug",
        label: "Thảm",
    },
];

export default function SizeEditClient() {
    const form = useForm({
        defaultValues: {
            categories: [],
            name: "",
            desc: "",
            status: "active"
        }
    });

    return (
        <section className="space-y-[30px]">
            <header>
                <h1 className="text-[24px] font-semibold">Thêm kích cỡ</h1>
            </header>

            <Form {...form}>
                <form
                    className="p-[20px] rounded-[10px] bg-white space-y-[20px]"
                >
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
                                                listCategory.map(category => {
                                                    return (
                                                        <FormField
                                                            key={v4()}
                                                            control={form.control}
                                                            name="categories"
                                                            render={({ field }) => {
                                                                const checked = field.value.includes(category.value);

                                                                return (
                                                                    <FormItem>
                                                                        <FormControl>
                                                                            <Checkbox
                                                                                checked={field.value?.includes(category.value)}
                                                                                onCheckedChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field.value, category.value])
                                                                                    : field.onChange(
                                                                                        field.value?.filter(
                                                                                        (value) => value !== category.value
                                                                                        )
                                                                                    )
                                                                                }}
                                                                                className="hidden"
                                                                            />
                                                                        </FormControl>

                                                                        <FormLabel
                                                                            className={cn(
                                                                                "shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border cursor-pointer",
                                                                                checked ? "border-yellowBold text-yellowBold" : ""
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
                        name="name"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Kích cỡ</FormLabel>

                                        <FormControl>
                                            <Input
                                                className="px-[15px] py-[20px]"
                                                placeholder="Nhập kích cỡ"
                                                {...field}
                                            />
                                        </FormControl>
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
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel className="text-[15px] font-medium">Trạng thái</FormLabel>

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

                    <div className="flex justify-end">
                        <Button>Lưu thay đổi</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}
