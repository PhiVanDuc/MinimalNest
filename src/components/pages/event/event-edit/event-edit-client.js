"use client"

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

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";

import { IoImage } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { CalendarIcon } from "lucide-react"

import { format } from "date-fns"
import { vi } from "date-fns/locale";
import { cn } from "@/lib/utils";

export default function EventEditClient() {
    const form = useForm({
        defaultValues: {
            image: "",
            title: "",
            desc: "",
            startDate: "",
            endDate: "",
            status: "active"
        }
    });

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Chỉnh sửa sự kiện</h2>
            </header>

            <Form {...form}>
                <form
                    className="p-[20px] rounded-[10px] bg-white space-y-[20px]"
                >
                    {/* Thêm ảnh */}
                    <div className="flex items-center justify-center w-full aspect-16/5 rounded-[10px] border border-dashed border-neutral-400 bg-neutral-100">
                        <div className="flex flex-col items-center gap-[15px]">
                            <IoImage
                                size={80}
                                className="text-yellowBold"
                            />

                            <div className="space-y-[40px]">
                                <div className="space-y-[5px]">
                                    <p className="text-[16px] text-center font-semibold text-neutral-600">Kéo và thả ảnh của bạn để tải lên</p>
                                    <p className="text-[14px] text-center text-neutral-400">Định dạng có thể là JPG, PNG, WEBP. Bạn có thể kéo nhiều hoặc chọn nhiều ảnh để tải lên.</p>
                                </div>

                                <div className="text-center">
                                    <Button
                                        variant="outline"
                                        className="shadow-none"
                                    >
                                        Chọn ảnh
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tiêu đề */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Tiêu đề</FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Nhập tiêu đề sự kiện . . ."
                                                className="px-[15px] py-[20px]"
                                                {...field}
                                            />
                                        </FormControl>
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
                                        <FormLabel>Miêu tả</FormLabel>

                                        <FormControl>
                                            <Textarea
                                                className="p-[12px] resize-none h-[100px]"
                                                placeholder="Hãy miêu tả sự kiện . . ."
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

                        <div className="flex items-center gap-[10px]">
                            <FormField
                                control={form.control}
                                name="startDate"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
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
                                        </FormItem>
                                    )
                                }}
                            />

                            <FaMinus
                                size={18}
                                className="text-darkMedium"
                            />

                            <FormField
                                control={form.control}
                                name="endDate"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
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
                                        </FormItem>
                                    )
                                }}
                            />
                        </div>
                    </div>

                    <FormField 
                        control={form.control}
                        name="status"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[10px]">
                                        <FormLabel className="text-[15px] font-medium">Trạng thái</FormLabel>

                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex items-center gap-[20px]"
                                            >
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="active" />
                                                        </FormControl>

                                                        <span>Kích hoạt</span>
                                                    </FormLabel>
                                                </FormItem>

                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="inactive" />
                                                        </FormControl>

                                                        <span>Không kích hoạt</span>
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <div className="text-right">
                        <Button>Lưu thay đổi</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}