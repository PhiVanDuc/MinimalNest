"use client"

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import {
    Form,
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

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import sizeSchema from "@/lib/schemas/size-schema";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSize } from "@/lib/api/server-action/size";
import { editSize } from "@/lib/api/server-action/size";
import { getCategories } from "@/lib/api/server-action/categories";

export default function SizeEdit({ params }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(sizeSchema),
        defaultValues: {
            category: "",
            size: "",
            desc: ""
        }
    });

    useEffect(() => {
        (async () => {
            const [categoriesRes, sizeRes] = await Promise.all([
                getCategories(),
                getSize(params?.sizeId)
            ]);
            
            const { status: categoriesStatus, result: categories } = categoriesRes;
            const { status: sizeStatus, result: size } = sizeRes;

            if (!categories?.success || !size?.success) {
                if (!categories?.success) {
                    setError(`${categoriesStatus},${categories?.message}`);
                    setLoading(false);
                    return;
                }

                if (!size?.success) {
                    setError(`${sizeStatus},${size?.message}`);
                    setLoading(false);
                    return;
                }
            }

            form.reset({
                category: size?.data?.size?.category_id || "",
                size: size?.data?.size?.size || "",
                desc: size?.data?.size?.desc || ""
            });

            setCategories(categories?.data?.categories);
            setLoading(false);
        })();
    }, []);

    const onSubmit = async (data) => {
        setSubmitting(true);

        const updateSize = await editSize(data, size?.id);
        const message = updateSize?.message;

        if (updateSize?.message) toast.success(message);
        else toast.error(message);

        setSubmitting(false)
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[30px]">
            <header>
                <h1 className="text-[24px] font-semibold">Chỉnh sửa kích cỡ</h1>
            </header>

            <Form {...form}>
                <form
                    className="p-[20px] rounded-[10px] bg-white space-y-[20px]"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Danh mục</FormLabel>
                                        
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-wrap items-center gap-[5px]"
                                            >
                                                {
                                                    categories?.map(category => {
                                                        const checked = category?.id === field.value;

                                                        return (
                                                            <FormItem
                                                                key={category?.id}
                                                            >
                                                                <label
                                                                    className={cn(
                                                                        "shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border cursor-pointer",
                                                                        checked ? "border-neutral-400 bg-neutral-100" : ""
                                                                    )}
                                                                >
                                                                    {category?.category}

                                                                    <FormControl>
                                                                        <RadioGroupItem
                                                                            value={category?.id}
                                                                            className="hidden"
                                                                        />
                                                                    </FormControl>
                                                                </label>
                                                            </FormItem>
                                                        )
                                                    })
                                                }
                                            </RadioGroup>
                                        </FormControl>

                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="size"
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

                    <Button
                        className="w-full"
                        disabled={submitting}
                    >
                        { submitting ? "Đang chỉnh sửa" : "Chỉnh sửa kích cỡ" }
                    </Button>
                </form>
            </Form>
        </section>
    )
}