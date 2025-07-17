"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Error from "@/components/customs/error";
import EventEditImage from "./event-edit-image";
import MainLoading from "@/components/customs/main-loading";

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

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react"

import slugify from "slugify";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { vi } from "date-fns/locale";
import { addDays, format } from "date-fns";
import eventSchema from "@/lib/schemas/event-schema";
import { getEvent } from "@/lib/api/server-action/event";
import { editEvent } from "@/lib/api/server-action/event";
import { dynamicBlurImage } from "@/lib/utils/dynamic-blur-image";
import generateSignatureClient from "@/lib/utils/generate-signature-client";

export default function EventEdit({ params }) {
    const router = useRouter();

    const [blurImage, setBlurImage] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [submitting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            image: "",
            event: "",
            desc: "",
            link: "",
            eventType: "",
            startDate: new Date(),
            endDate: addDays(new Date(), 1)
        }
    });

    const watchStartDate = form.watch("startDate");
    const watchEndDate = form.watch("endDate");
    const watchEvent = form.watch("event");
    const watchEventType = form.watch("eventType");

    useEffect(() => {
        (async () => {
            const { status, result: event } = await getEvent(params?.slug || "");
            if (!event?.success) {
                setError(`${status},${event?.message}`);
                setLoading(false);
                return;
            }

            const blurImage = await dynamicBlurImage(event?.data?.event?.image);
            setBlurImage(blurImage);

            form.reset({
                image: event?.data?.event?.image || "",
                event: event?.data?.event?.event || "",
                desc: event?.data?.event?.desc || "",
                link: event?.data?.event?.link || "",
                eventType: event?.data?.event?.event_type,
                startDate: event?.data?.event?.start_date || new Date(),
                endDate: event?.data?.event?.end_date || addDays(new Date(), 1)
            });

            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (!watchEndDate) {
            form.setValue("endDate", addDays(watchStartDate, 1));
        }
    }, [watchStartDate]);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            let slug;

            if (watchEvent) {
                slug = slugify(watchEvent, {
                    lower: true,
                    locale: 'vi',
                    remove: /[*+~.()'"!:@]/g
                });
            }

            if (watchEventType === "discount" && slug) {
                const signature = generateSignatureClient(`events=${slug}`);
                form.setValue("link", `/phieu-giam-gia?events=${slug}&signature=${signature}`);
            } else {
                form.setValue("link", ``);
            }
        }, 500);

        return () => clearTimeout(debounceTimeout); 
    }, [watchEventType, watchEvent]);

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("event", data.event);
        formData.append("desc", data.desc);
        formData.append("link", data.link);
        formData.append("eventType", data.eventType);
        formData.append("startDate", data.startDate.toISOString());
        formData.append("endDate", data.endDate.toISOString());
        if (data.image instanceof File) formData.append("image", data.image);

        const eventResult = await editEvent(formData, params?.slug);
        const message = eventResult?.message;

        if (eventResult?.success) {
            toast.success(message);
            router.replace(`/quan-tri/su-kien/chinh-sua-su-kien/${eventResult?.data?.event?.slug}`);
        }
        else toast.error(message);

        setIsSubmitting(false);
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

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

                    {/* Đường dẫn */}
                    <FormField
                        control={form.control}
                        name="link"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Đường dẫn sự kiện</FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Nhập đường dẫn đến sự kiện . . ."
                                                className="px-[15px] py-[20px]"
                                                {...field}
                                            />
                                        </FormControl>
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
                                                        disabled={{ before: addDays(form.watch("startDate"), 1) }}
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

                    {/* Sự kiện giảm giá hay nhấn mạnh sản phẩm */}
                    <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Loại sự kiện</FormLabel>

                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex items-center gap-[20px]"
                                            >
                                                <FormItem className="flex items-center gap-[10px]">
                                                    <FormLabel>Sự kiện giảm giá</FormLabel>
                                                    <FormControl>
                                                        <RadioGroupItem value="discount" />
                                                    </FormControl>
                                                </FormItem>

                                                <FormItem className="flex items-center gap-[10px]">
                                                    <FormLabel>Sự kiện quảng bá sản phẩm</FormLabel>
                                                    <FormControl>
                                                        <RadioGroupItem value="promote-product" />
                                                    </FormControl>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>

                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

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