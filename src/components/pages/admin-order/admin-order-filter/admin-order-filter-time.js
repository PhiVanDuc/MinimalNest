"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

import { format } from "date-fns"
import { vi } from "date-fns/locale";

export default function AdminOrderFilterTime({
    range,
    setRange
}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="relative flex px-[15px] pr-[50px] h-[47px] text-[14px] text-darkBold font-medium hover:bg-neutral-100 bg-neutral-100 shadow-none rounded-[10px]">
                    <CalendarIcon
                        size={18}
                        className="absolute top-[50%] right-[10px] translate-y-[-50%] text-darkMedium z-10"
                    />

                    {
                        range?.from &&
                            range?.to ?
                            (
                                <div className="flex items-center gap-[10px]">
                                    <p>{format(range.from, "'Ngày' dd MMMM yyyy", { locale: vi })}</p>
                                    <p>–</p>
                                    <p>{format(range.to, "'Ngày' dd MMMM yyyy", { locale: vi })}</p>
                                </div>
                            ) :
                            <p>Chọn khoảng thời gian.</p>
                    }
                </Button>
            </PopoverTrigger>

            <PopoverContent>
                <Calendar
                    mode="range"
                    locale={vi}
                    selected={range}
                    onSelect={setRange}
                    disabled={{ before: new Date() }}
                    clearButton="Xóa"
                    previousMonthLabel="Tháng trước"
                    nextMonthLabel="Tháng sau"
                    monthYearHeaderFormat="MMMM yyyy"
                    // weekStartsOn={1}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}