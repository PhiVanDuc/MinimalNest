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

export default function ProfileGeneralBasicForm() {
    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: ""
        }
    });

    const handleSubmit = (values) => {}

    return (
        <div className="space-y-[15px]">
            <h2 className="text-[18px] md:text-[20px] text-darkBold font-semibold">Tài khoản</h2>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[15px]"
                    autoComplete="off"
                >
                    <div className="md:flex items-center justify-between gap-[15px] space-y-[7px] md:space-y-0">
                        <label className="text-[15px] font-semibold text-darkBold w-full max-w-[180px]">Họ và tên</label>

                        <div className="sm:flex gap-x-[15px] w-full space-y-[10px] sm:space-y-0">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập họ . . ."
                                                    className="px-[15px] py-[22px] border-neutral-300 rounded-[10px]"
                                                    {...field}
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
                                                    className="px-[15px] py-[22px] border-neutral-300 rounded-[10px]"
                                                    {...field}
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
                                <FormItem className="flex flex-col md:flex-row md:items-center gap-[7px] md:gap-[15px] w-full">
                                    <FormLabel
                                        className="text-[15px] font-semibold text-darkBold w-full max-w-[180px]"
                                    >
                                        Email
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Nhập email . . ."
                                            className="px-[15px] py-[22px] border-neutral-300 rounded-[10px]"
                                            style={{
                                                margin: "0px"
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
