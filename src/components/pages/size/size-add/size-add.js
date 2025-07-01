"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
import { addSize } from "@/lib/api/server-action/size";
import { getCategories } from "@/lib/api/server-action/categories";

export default function SizeAdd() {
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
            const { status, result: categories } = await getCategories();
            if (!categories?.success) {
                setError(`${status},${categories?.message}`);
                setLoading(false);
                return;
            }

            setCategories(categories?.data?.categories);
            setLoading(false);
        })();
    }, []);

    const onSubmit = async (data) => {
        setSubmitting(true);

        const size = await addSize(data);
        const message = size?.message;

        if (size?.message) toast.success(message);
        else toast.error(message);

        setSubmitting(false)
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[30px]">
            <header>
                <h1 className="text-[24px] font-semibold">Thêm kích cỡ</h1>
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
                        { submitting ? "Đang thêm" : "Thêm kích cỡ" }
                    </Button>
                </form>
            </Form>
        </section>
    )
}