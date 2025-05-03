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

export default function AccountDetailFormProfile() {
    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: ""
        }
    });

    return (
        <div className="space-y-[15px]">
            <h2 className="text-[18px] font-semibold">Thông tin chung</h2>

            <Form {...form}>
                <form
                    className="space-y-[10px]"
                    autoComplete="off"
                >
                    <div className="space-y-[5px]">
                        <label className="text-[15px] font-semibold text-darkBold w-full max-w-[100px]">Họ và tên</label>

                        <div className="sm:flex gap-x-[10px] w-full space-y-[10px] sm:space-y-0">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập họ . . ."
                                                    className="px-[15px] py-[20px] border-darkBland rounded-[10px]"
                                                    {...field}
                                                    disabled={true}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập tên đệm và tên . . ."
                                                    className="px-[15px] py-[20px] border-darkBland rounded-[10px]"
                                                    {...field}
                                                    disabled={true}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel
                                        className="text-[15px] font-semibold text-darkBold w-full"
                                    >
                                        Email
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Nhập email . . ."
                                            className="px-[15px] py-[22px] border-darkBland rounded-[10px]"
                                            style={{
                                                margin: "5px"
                                            }}
                                            {...field}
                                            disabled={true}
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
