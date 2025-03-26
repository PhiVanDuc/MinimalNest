"use client"

import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ProfileGeneralChangePasswordForm() {
    const form = useForm({
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        }
    });

    const handleSubmit = () => {}

    return (
        <div className="space-y-[15px]">
            <h2 className="text-[18px] md:text-[20px] text-darkBold font-semibold">Thay đổi mật khẩu</h2>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[15px]"
                >
                    <FormField
                        control={form.control}
                        name="oldPassword"
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-col md:flex-row md:items-center gap-[7px] md:gap-[15px] w-full">
                                    <FormLabel
                                        className="text-[15px] font-semibold text-darkBold w-full max-w-[180px]"
                                    >
                                        Mật khẩu cũ
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Nhập mật khẩu cũ . . ."
                                            className="px-[15px] py-[22px] border-darkBland rounded-[10px]"
                                            style={{
                                                margin: "0px"
                                            }}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            );
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-col md:flex-row md:items-center gap-[7px] md:gap-[15px] w-full">
                                    <FormLabel
                                        className="text-[15px] font-semibold text-darkBold w-full max-w-[180px]"
                                    >
                                        Mật khẩu mới
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Nhập mật khẩu mới . . ."
                                            className="px-[15px] py-[22px] border-darkBland rounded-[10px]"
                                            style={{
                                                margin: "0px"
                                            }}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            );
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="confirmNewPassword"
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-col md:flex-row md:items-center gap-[7px] md:gap-[15px] w-full">
                                    <FormLabel
                                        className="text-[15px] font-semibold text-darkBold w-full max-w-[180px]"
                                    >
                                        Xác thực mật khẩu mới
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Xác thực mật khẩu mới . . ."
                                            className="px-[15px] py-[22px] border-darkBland rounded-[10px]"
                                            style={{
                                                margin: "0px"
                                            }}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            );
                        }}
                    />
                </form>
            </Form>
        </div>
    )
}
