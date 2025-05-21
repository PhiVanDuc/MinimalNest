"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { addColor } from "@/lib/api/server-action/color";
import colorSchema from "@/lib/schemas/color-schema";
import { toast } from "sonner";

export default function ColorAdd() {
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(colorSchema),
        defaultValues: {
            color: "",
            code: ""
        }
    });

    const onSubmit = async (data) => {
        setSubmitting(true);

        const color = await addColor(data);
        const message = color?.message;

        if (color?.success) toast.success(message);
        else toast.error(message);

        setSubmitting(false);
    }

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Thêm màu sắc</h2>
            </header>

            <Form {...form}>
                <form
                    className="p-[20px] rounded-[10px] space-y-[20px] bg-white"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Tên màu sắc</FormLabel>

                                        <FormControl>
                                            <Input
                                                className="px-[15px] py-[20px]"
                                                placeholder="Nhập tên màu sắc"
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
                        name="code"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Mã màu</FormLabel>

                                        <FormControl>
                                            <Input
                                                className="px-[15px] py-[20px]"
                                                placeholder="Nhập mã màu"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <div className="space-y-[5px]">
                        <p className="text-[14px] font-medium">Xem trước màu sắc</p>

                        <div
                            className="inline-block w-full h-[100px] rounded-[10px]"
                            style={{
                                background: form.watch("code") || "white"
                            }}
                        />
                    </div>

                    <Button
                        className="w-full"
                        disabled={submitting}
                    >
                        { submitting ? "Đang thêm" : "Thêm màu sắc" }
                    </Button>
                </form>
            </Form>
        </section>
    )
}
