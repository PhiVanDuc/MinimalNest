"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

import {
    Form,
    FormField,
    FormItem,
    FormControl
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import Image from "next/image";

const hiddenPath = ["/checkout"];

export default function Newsletter() {
    const firstPath = usePathname();
    const [pathname, setPathname] = useState(() => firstPath === "/" ? "/home" : firstPath);

    useEffect(() => {
        setPathname(() => firstPath === "/" ? "/home" : firstPath);
    }, [firstPath]);

    const form = useForm({
        defaultValues: {
            email: ""
        }
    });
    const handleSubmit = (values) => {}

    return (
        <div
            className={cn(
                "responsive-horizontal pb-[100px] lg:pb-[150px] w-full",
                pathname.startsWith("/home") ? "max-width" : "",
                hiddenPath.some(path => pathname.startsWith(path)) ? "hidden" : ""
            )}
        >
            <div className="hidden md:block relative w-full rounded-[15px] aspect-16/7 overflow-hidden">
                <Image
                    src="/newsletter_image_background.jpg"
                    alt="Newsletter"
                    width={1920}
                    height={1080}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <span className="absolute inset-0 bg-[#404040]/40" />

                <Form {...form}>
                    <form
                        autoComplete="off"
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="absolute bottom-[15px] right-[15px] p-[25px] rounded-[15px] bg-white"
                    >
                        <div className="space-y-[2px]">
                            <h2 className="text-[20px] lg:text-[24px] text-darkBold font-semibold">Newsletter</h2>
                            <p className="text-[14px] font-medium text-darkBland">Đăng ký ngay để nhận những ưu đãi hấp dẫn trên các sản phẩm của chúng tôi!</p>
                        </div>

                        <div className="relative mt-[15px]">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Ví dụ : youremail@mail.com"
                                                    {...field}
                                                    className="placeholder:text-[16px] placeholder:text-[#9B9B9B] py-[31.5px] px-[24px] pr-[118px] rounded-[15px] bg-[#F2F2F2]"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />

                            <Button className="absolute right-[15px] top-[50%] translate-y-[-50%] py-[22px] bg-darkBold rounded-[8px]">Đăng ký</Button>
                        </div>
                    </form>
                </Form>
            </div>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="md:hidden w-full p-[25px] rounded-[15px] bg-white border shadow-sm"
                >
                    <div className="space-y-[2px]">
                        <h2 className="text-[20px] lg:text-[24px] text-darkBold font-semibold">Newsletter</h2>
                        <p className="text-[13px] leading-[22px] sm:leading-normal sm:text-[14px] font-medium text-darkBland">Đăng ký ngay để nhận những ưu đãi hấp dẫn trên các sản phẩm của chúng tôi!</p>
                    </div>

                    <div className="relative mt-[15px] space-y-[15px] sm:space-y-[0px]">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Ví dụ : youremail@mail.com"
                                                {...field}
                                                className="placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:text-[#9B9B9B] py-[22px] sm:py-[31.5px] px-[15px] sm:px-[24px] sm:pr-[118px] rounded-[10px] sm:rounded-[15px] bg-[#F2F2F2]"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )
                            }}
                        />

                        <Button className="sm:absolute sm:right-[15px] sm:top-[50%] sm:translate-y-[-50%] py-[22px] bg-darkBold rounded-[8px]">Đăng ký</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}