"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import colorSchema from "@/lib/schemas/color-schema";
import { editColor } from "@/lib/api/server-action/color";
import { toast } from "sonner";

export default function ColorEditClient({ color }) {
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(colorSchema),
        defaultValues: {
            color: color?.color || "",
            code: color?.code || ""
        }
    })

    const onSubmit = async (data) => {
        setSubmitting(true);

        const updateColor = await editColor(data, color?.id);
        const message = updateColor?.message;

        if (!updateColor?.success) toast.success(message);
        else toast.error(message);

        setSubmitting(false);
    }

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Chỉnh sửa màu sắc</h2>
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
                        { submitting ? "Đang chỉnh sửa" : "Chỉnh sửa màu sắc" }
                    </Button>
                </form>
            </Form>
        </section>
    )
}
