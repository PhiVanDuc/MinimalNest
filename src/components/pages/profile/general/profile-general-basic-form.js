"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { subYears } from "date-fns";
import { vi } from "date-fns/locale";
import { profileChangeInfo } from "@/lib/api/server-action/account";
import { toast } from "sonner";

export default function ProfileGeneralBasicForm({ account }) {
    const form = useForm({
        defaultValues: {
            firstName: account?.first_name || "",
            lastName: account?.last_name || "",
            email: account?.email || "",
            dateOfBirth: account.date_of_birth
                ? format(account.date_of_birth, "yyyy-MM-dd")
                : null
        }
    });

    const [submitting, setSubmitting] = useState(false);

    const watchFirstName = form.watch("firstName");
    const watchLastName = form.watch("lastName");
    const watchDateOfBirth = form.watch("dateOfBirth");

    const handleSubmit = async (data) => {
        if (submitting) return;
        setSubmitting(true);

        const payload = {
            ...data,
            dateOfBirth: data.dateOfBirth
                ? format(data.dateOfBirth, "yyyy-MM-dd")
                : null
        };

        const result = await profileChangeInfo(account?.id, payload);
        const message = result?.message;

        if (result?.success) toast.success(message);
        else toast.error(message);

        console.log(payload);
        

        setSubmitting(false);
    }

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
                                            readOnly
                                            placeholder="Nhập email . . ."
                                            className="px-[15px] py-[22px] border-neutral-300 rounded-[10px]"
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
                        name="dateOfBirth"
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-col md:flex-row md:items-center gap-[7px] md:gap-[15px] w-full">
                                    <FormLabel
                                        className="text-[15px] font-semibold text-darkBold w-full max-w-[180px]"
                                    >
                                        Ngày sinh
                                    </FormLabel>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full text-[14px] font-normal shadow-none px-[15px] py-[22px] border-neutral-300 rounded-[10px]",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "dd/MM/yyyy")
                                                    ) : (
                                                        <span>Chọn ngày sinh</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>

                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                locale={vi}
                                                mode="single"
                                                captionLayout="dropdown"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                defaultMonth={subYears(new Date(), 18)}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            );
                        }}
                    />

                    {
                        (watchFirstName && watchLastName && watchDateOfBirth) &&
                        (
                            <div className="text-right">
                                <Button
                                    disabled={submitting}
                                >
                                    { submitting ? "Đang thay đổi" : "Lưu thay đổi" }
                                </Button>
                            </div>
                        )
                    }
                </form>
            </Form>
        </div>
    )
}
