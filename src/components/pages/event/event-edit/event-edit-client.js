"use client"

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
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
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import EventEditImage from "./event-edit-image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react"

import { toast } from "sonner";
import { format } from "date-fns"
import { vi } from "date-fns/locale";
import { cn } from "@/lib/utils";
import eventSchema from "@/lib/schemas/event-schema";
import { editEvent } from "@/lib/api/server-action/event";

export default function EventEditClient({ event, blurImage }) {
    const [submitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);

    const form = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            image: event?.image || "",
            event: event?.event || "",
            desc: event?.desc || "",
            startDate: event?.start_date || new Date(),
            endDate: event?.end_date || new Date()
        }
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        const eventResult = await editEvent(data, event?.slug);
        const message = eventResult?.message;

        if (eventResult?.success) {
            toast.success(message);
            router.replace(`/quan-tri/su-kien/chinh-sua-su-kien/${eventResult?.data?.event?.slug}`);
        }
        else toast.error(message);

        setIsSubmitting(false);
    }

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Thêm sự kiện</h2>
            </header>

            <Form {...form}>
                <form
                    className="p-[20px] rounded-[10px] bg-white space-y-[15px]"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    {/* Thêm ảnh */}
                    <EventEditImage form={form} blurImage={blurImage} />

                    {/* Tiêu đề */}
                    <FormField
                        control={form.control}
                        name="event"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Sự kiện</FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Nhập tiêu đề sự kiện . . ."
                                                className="px-[15px] py-[20px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    {/* Miêu tả */}
                    <FormField
                        control={form.control}
                        name="desc"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Mô tả</FormLabel>

                                        <FormControl>
                                            <Textarea
                                                className="p-[12px] resize-none h-[100px]"
                                                placeholder="Hãy miêu tả sự kiện . . ."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    {/* Thời gian */}
                    <div className="space-y-[5px]">
                        <div className="flex items-center justify-between">
                            <p className="text-[14px] font-medium">Ngày bắt đầu</p>
                            <p className="text-[14px] font-medium">Ngày kết thúc</p>
                        </div>

                        <div className="flex items-start gap-[10px]">
                            <FormField
                                control={form.control}
                                name="startDate"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full space-y-[5px]">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "px-[12px] py-[20px] text-left font-normal w-full",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {
                                                                field.value ? (
                                                                    format(field.value, "PPP", { locale: vi })
                                                                ) : (
                                                                    <span>Chọn ngày bắt đầu.</span>
                                                                )
                                                            }

                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>

                                                <PopoverContent>
                                                    <Calendar
                                                        mode="single"
                                                        locale={vi}
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={{ before: new Date() }}
                                                        todayButton="Hôm nay"
                                                        clearButton="Xóa"
                                                        previousMonthLabel="Tháng trước"
                                                        nextMonthLabel="Tháng sau"
                                                        monthYearHeaderFormat="MMMM yyyy"
                                                        weekStartsOn={1}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="endDate"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full space-y-[5px]">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "px-[12px] py-[20px] text-left font-normal w-full",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {
                                                                field.value ? (
                                                                    format(field.value, "PPP", { locale: vi })
                                                                ) : (
                                                                    <span>Chọn ngày kết thúc.</span>
                                                                )
                                                            }

                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>

                                                <PopoverContent>
                                                    <Calendar
                                                        mode="single"
                                                        locale={vi}
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={{ before: form.watch("startDate") || new Date() }}
                                                        todayButton="Hôm nay"
                                                        clearButton="Xóa"
                                                        previousMonthLabel="Tháng trước"
                                                        nextMonthLabel="Tháng sau"
                                                        monthYearHeaderFormat="MMMM yyyy"
                                                        weekStartsOn={1}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                        </div>
                    </div>

                    <div className="text-right">
                        <Button
                            className="w-full"
                            disabled={submitting}
                        >
                            { submitting ? "Đang thay đổi" : "Lưu thay đổi" }
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}