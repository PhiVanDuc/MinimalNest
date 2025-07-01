"use client"

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import colorSchema from "@/lib/schemas/color-schema";
import { getColor } from "@/lib/api/server-action/color";
import { editColor } from "@/lib/api/server-action/color";

export default function ColorEditClient({ params }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(colorSchema),
        defaultValues: {
            color: "",
            code: ""
        }
    });

    useEffect(() => {
        (async () => {
            const { status, result: color } = await getColor(params?.colorId);
            if (!color?.success) {
                setError(`${status},${color?.message}`);
                setLoading(false);
                return;
            }

            form.reset({
                color: color?.data?.color?.color,
                code: color?.data?.color?.code
            });
            setLoading(false);
        })();
    }, []);

    const onSubmit = async (data) => {
        setSubmitting(true);

        const updateColor = await editColor(data, color?.id);
        const message = updateColor?.message;

        if (!updateColor?.success) toast.success(message);
        else toast.error(message);

        setSubmitting(false);
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

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
