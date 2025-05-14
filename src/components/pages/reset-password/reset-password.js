"use client"

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

export default function ResetPassword() {
    const form = useForm({
        defaultValues: {
            email: "",
            otp: "",
            password: "",
            confirmPassword: ""
        }
    });

    const [otpCountdown, setOtpCountdown] = useState(0);

    useEffect(() => {
        let timer;
        if (otpCountdown > 0) {
            timer = setTimeout(() => setOtpCountdown(otpCountdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [otpCountdown]);

    const handleSendOtp = () => {
        if (otpCountdown > 0) return;
        setOtpCountdown(60);
    };

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
                        <h1 className="text-[20px] md:text-[24px] font-semibold">Đổi mật khẩu</h1>
                        <p className="text-[14px] text-darkMedium font-medium leading-[22px]">Trong trường hợp bạn quên mật khẩu, bạn có thể đổi tại đây.</p>
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

                        <div className="space-y-[10px]">
                            <FormField
                                control={form.control}
                                name="otp"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <div className="space-y-[5px]">
                                                <FormLabel>Mã OTP</FormLabel>

                                                <FormControl>
                                                    <InputOTP maxLength={6} {...field}>
                                                        <InputOTPGroup className="w-full">
                                                            <InputOTPSlot index={0} className="w-full shadow-none" />
                                                            <InputOTPSlot index={1} className="w-full shadow-none" />
                                                            <InputOTPSlot index={2} className="w-full shadow-none" />
                                                        </InputOTPGroup>

                                                        <InputOTPSeparator />

                                                        <InputOTPGroup className="w-full">
                                                            <InputOTPSlot index={3} className="w-full shadow-none" />
                                                            <InputOTPSlot index={4} className="w-full shadow-none" />
                                                            <InputOTPSlot index={5} className="w-full shadow-none" />
                                                        </InputOTPGroup>
                                                    </InputOTP>
                                                </FormControl>
                                            </div>
                                        </FormItem>
                                    )
                                }}
                            />

                            <p
                                className={cn(
                                    "text-[14px] text-right underline underline-offset-2 text-yellowBold font-medium cursor-pointer",
                                    otpCountdown === 0 ? "opacity-100 hover:opacity-90 cursor-pointer" : "opacity-60 cursor-not-allowed"
                                )}
                                onClick={handleSendOtp}
                            >
                                {otpCountdown > 0 ? `Gửi lại OTP sau ${otpCountdown}s` : "Nhận mã OTP"}
                            </p>
                        </div>

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

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Xác nhận mật khẩu</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Nhập lại mật khẩu . . ."
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
                                href="/dang-nhap"
                                className="text-[14px] underline underline-offset-2 text-yellowBold font-medium hover:opacity-90"
                            >
                                Đăng nhập
                            </Link>

                            <Link
                                href="/dang-ky"
                                className="text-[14px] underline underline-offset-2 text-yellowBold font-medium hover:opacity-90"
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>

                    <Button className="w-full">Đăng ký tài khoản</Button>
                </div>
            </form>
        </Form>
    )
}
