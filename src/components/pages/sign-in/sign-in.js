"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import signInSchema from "@/lib/schemas/sign-in-schema";

export default function SignIn() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "phivanduc325@gmail.com",
            password: "123456",
        }
    });

    const onSubmit = async (data) => {
        try {
            if (submitting) return;

            setSubmitting(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/account/sign_in`, {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                cache: "no-cache"
            });

            const result = await response.json();
            const message = result?.message;

            if (result.success) window.location.href = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_FRONTEND_URL : process.env.NEXT_PUBLIC_FRONTEND_URL_PROD;
            else toast.error(message);
        }
        catch(error) {
            console.log(error);
            toast.error("Lỗi form đăng nhập.");
        }
        finally {
            setSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form
                className="flex w-full justify-center"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="w-full max-w-[500px]">
                    <header className="text-center space-y-[5px] mb-[60px]">
                        <h1 className="text-[20px] md:text-[24px] font-semibold">Đăng nhập</h1>
                        <p className="text-[14px] text-darkMedium font-medium">Chào mừng bạn quay trở lại với <span className="text-yellowBold font-semibold">Minimal Nest</span>.</p>
                    </header>

                    <div className="space-y-[20px] mb-[20px]">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập email . . ."
                                                    className="px-[15px] py-[12px]"
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
                            name="password"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Mật khẩu</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Nhập mật khẩu . . ."
                                                    className="px-[15px] py-[12px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )
                            }}
                        />

                        <div className="flex justify-between">
                            <Link
                                href="/dang-ky"
                                className="text-[14px] underline underline-offset-2 text-yellowBold font-medium hover:opacity-90"
                            >
                                Đăng ký
                            </Link>

                            <Link
                                href="/doi-mat-khau"
                                className="text-[14px] underline underline-offset-2 text-yellowBold font-medium hover:opacity-90"
                            >
                                Đổi mật khẩu
                            </Link>
                        </div>
                    </div>

                    <Button
                        className="w-full"
                        disabled={submitting}
                    >
                        { submitting ? "Đang đăng nhập" : "Đăng nhập" }
                    </Button>
                </div>
            </form>
        </Form>
    )
}