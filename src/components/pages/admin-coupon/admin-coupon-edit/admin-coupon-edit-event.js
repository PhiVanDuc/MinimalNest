"use client"

import { useState, useEffect } from "react";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import formatDate from "@/lib/utils/format-date";

export default function AdminCouponEditEvent({ form, events }) {
    const watchEvent = form.watch("event");
    const [dates, setDates] = useState([]);

    useEffect(() => {
        if (!watchEvent) return;
        setDates([watchEvent.start_date, watchEvent.end_date]);
    }, [watchEvent]);

    return (
        <div className="p-[20px] rounded-[10px] bg-white space-y-[20px]">
            <FormField
                control={form.control}
                name="event"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Chọn sự kiện</FormLabel>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <div className="space-y-[5px]">
                                            <FormControl>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "shadow-none justify-between w-full px-[15px] py-[20px]",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {
                                                        field.value?.event ?
                                                            field.value.event :
                                                            "Chọn sự kiện"
                                                    }

                                                    <ChevronsUpDown size={18} className="opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </div>
                                    </PopoverTrigger>

                                    <PopoverContent className="p-0 w-[--radix-popover-trigger-width]">
                                        <Command>
                                            <CommandInput
                                                placeholder="Tìm sự kiện ..."
                                                className="h-9"
                                            />
                                            <CommandList>
                                                <CommandEmpty>Không tìm thấy sự kiện.</CommandEmpty>

                                                <CommandGroup>
                                                    {events.map((event) => (
                                                        <CommandItem
                                                            key={event.id}
                                                            value={event.event}
                                                            onSelect={() => {
                                                                form.setValue("event", event);
                                                            }}
                                                        >
                                                            {event.event}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    event.id === field.value?.id ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )
                }}
            />

            {
                watchEvent?.id ? (
                    <div className="space-y-[10px]">
                        <div className="flex items-center gap-[10px] font-medium">
                            <p className="text-[14px] text-darkMedium min-w-[55px]">Bắt đầu</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <p className="text-[14px] text-darkBold">{formatDate(dates[0])}</p>
                        </div>

                        <div className="flex items-center gap-[10px] font-medium">
                            <p className="text-[14px] text-darkMedium min-w-[55px]">Kết thúc</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <p className="text-[14px] text-darkBold">{formatDate(dates[1])}</p>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}