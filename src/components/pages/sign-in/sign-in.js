"use client"

import { useForm } from "react-hook-form";
import Link from "next/link";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data) => {

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

                    <Button className="w-full">Đăng nhập</Button>
                </div>
            </form>
        </Form>
    )
}
