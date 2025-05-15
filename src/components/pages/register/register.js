"use client"

import { useState, useEffect } from "react";
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

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import registerSchema, { emailSchema } from "@/lib/schemas/register-schema";

export default function Register() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            otp: "",
            password: "",
            confirmPassword: ""
        }
    });

    useEffect(() => {
        const emailValue = form.getValues("email");
        const result = emailSchema.safeParse(emailValue);
        setIsEmailValid(result.success);
    }, [form.watch("email")]);

    const [otpCountdown, setOtpCountdown] = useState(0);

    useEffect(() => {
        let timer;
        if (otpCountdown > 0) {
            timer = setTimeout(() => setOtpCountdown(otpCountdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [otpCountdown]);

    const handleSendOtp = async () => {
        if (otpCountdown > 0) return;
        setOtpCountdown(60);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/account/create_otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: form.getValues("email") }),
                cache: "no-cache"
            });

            const result = await response.json();
            const message = result?.message;

            if (result.success) {
                toast.success(message);
                return;
            }
            else toast.error(message);
        }
        catch(error) {
            console.log(error);
            toast.error("Lỗi form gửi mã otp.");
        }
    };

    const onSubmit = async (data) => {
        try {
            if (submitting) return;

            setSubmitting(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/account/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                cache: "no-cache"
            });

            const result = await response.json();
            const message = result?.message;

            if (result.success) {
                toast.success(message);
                router.replace("/dang-nhap");
                return;
            }
            else toast.error(message);
        }
        catch(error) {
            console.log(error);
            toast.error("Lỗi form đăng ký tài khoản.");
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
                autoComplete="off"
            >
                <div className="w-full max-w-[500px]">
                    <header className="text-center space-y-[5px] mb-[60px]">
                        <h1 className="text-[20px] md:text-[24px] font-semibold">Đăng ký</h1>
                        <p className="text-[14px] text-darkMedium font-medium leading-[22px]">Chào mừng bạn quay đến với <span className="text-yellowBold font-semibold">Minimal Nest</span>. Hãy đăng ký tài khoản để nhận được ưu đãi tốt nhất.</p>
                    </header>

                    <div className="space-y-[20px] mb-[20px]">
                        <div className="flex items-center gap-[10px]">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <div className="space-y-[5px]">
                                                <FormLabel>Tên họ</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập tên họ . . ."
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
                                name="lastName"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <div className="space-y-[5px]">
                                                <FormLabel>Tên cuối</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập tên cuối . . ."
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
                        </div>

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
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )
                                }}
                            />

                            {
                                isEmailValid &&
                                (
                                    <p
                                        className={cn(
                                            "text-[14px] text-right underline underline-offset-2 text-yellowBold font-medium cursor-pointer",
                                            otpCountdown === 0 ? "opacity-100 hover:opacity-90 cursor-pointer" : "opacity-60 cursor-not-allowed"
                                        )}
                                        onClick={handleSendOtp}
                                    >
                                        {otpCountdown > 0 ? `Gửi lại OTP sau ${otpCountdown}s` : "Nhận mã OTP"}
                                    </p>
                                )
                            }
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
                                            <FormMessage />
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
                                            <FormMessage />
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
                        { submitting ? "Đang đăng ký" : "Đăng ký tài khoản" }
                    </Button>
                </div>
            </form>
        </Form>
    )
}