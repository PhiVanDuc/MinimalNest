"use client"

import { useDispatch } from "react-redux";
import useCouponFilter from "@/hooks/use-coupon-filter";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";

import _ from "lodash";
import { cn } from "@/lib/utils";
import {
    addType,
    addEvents,
    addDiscountType,
    addUserTypes
} from "@/redux/slices/coupon-filter/coupon-filter-slice";
import { types, events, discountTypes, userTypes } from "@/static/coupon-filter";

export default function CouponFilterContent() {
    const {
        filterState: {
            typeState,
            eventsState,
            discountTypeState,
            userTypesState
        }
    } = useCouponFilter();
    const dispatch = useDispatch();

    const handleChooseFilter = (filter, payload) => {
        switch(filter) {
            case "type": {
                dispatch(addType(payload));
                break;
            }
            case "events": {
                dispatch(addEvents(payload));
                break;
            }
            case "discountType": {
                dispatch(addDiscountType(payload));
                break;
            }
            case "userTypes": {
                dispatch(addUserTypes(payload));
                break;
            }
        }
    }

    return (
        <ScrollArea
            className="relative flex-1 px-[20px]"
        >
            <div className="space-y-[10px] pb-[30px]">
                <h3 className="text-[14px] text-darkBland font-semibold">Danh sách bộ lọc</h3>

                <div className="space-y-[10px]">            
                    <Accordion
                        type="single"
                        collapsible
                        className="space-y-[5px]"
                    >
                        {/* Bắt đầu Types */}
                        <AccordionItem
                            value="item-0"
                            className="border-none space-y-[10px]"
                        >
                            <AccordionTrigger
                            className="px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] [&[data-state=open]]:text-darkBold font-medium text-darkMedium [&[data-state=open]]:bg-neutral-100"
                            >
                                Phân theo loại
                            </AccordionTrigger>
                            
                            <AccordionContent className="pl-[20px] pb-0 space-y-[5px]">
                                {
                                    types.map(item => {
                                        const isCheck = item.param === typeState?.param;

                                        return (
                                            <p
                                                key={item.id}
                                                className={cn(
                                                    "px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 font-medium text-darkMedium hover:text-darkBold cursor-pointer transition-colors",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "type",
                                                        {
                                                            label: item.label,
                                                            param: item.param
                                                        }
                                                    )
                                                }}
                                            >
                                                {item.label}
                                            </p>
                                        )
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>
                        {/* Kết thúc Types */}

                        {/* Bắt đầu Events */}
                        <AccordionItem
                            value="item-1"
                            className="border-none space-y-[10px]"
                        >
                            <AccordionTrigger
                                className="px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] [&[data-state=open]]:text-darkBold font-medium text-darkMedium [&[data-state=open]]:bg-neutral-100"
                            >
                                Sự kiện
                            </AccordionTrigger>
                            
                            <AccordionContent className="pl-[20px] pb-0 space-y-[5px]">
                                {
                                    events.map(item => {
                                        const isCheck = eventsState.some(event => event?.param === item.param);

                                        return (
                                            <p
                                                key={item.id}
                                                className={cn(
                                                    "px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 font-medium text-darkMedium hover:text-darkBold cursor-pointer transition-colors",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "events",
                                                        {
                                                            label: item.label,
                                                            param: item.param
                                                        }
                                                    )
                                                }}
                                            >
                                                {item.label}
                                            </p>
                                        )
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>
                        {/* Kết thúc Events */}

                        {/* Bắt đầu Discount Types */}
                        <AccordionItem
                            value="item-2"
                            className="border-none space-y-[10px]"
                        >
                            <AccordionTrigger
                                className="px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] [&[data-state=open]]:text-darkBold font-medium text-darkMedium [&[data-state=open]]:bg-neutral-100"
                            >
                                Giảm giá
                            </AccordionTrigger>
                            
                            <AccordionContent className="pl-[20px] pb-0 space-y-[5px]">
                                {
                                    discountTypes.map(item => {
                                        const isCheck = item.param === discountTypeState?.param;

                                        return (
                                            <p
                                                key={item.id}
                                                className={cn(
                                                    "px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 font-medium text-darkMedium hover:text-darkBold cursor-pointer transition-colors",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "discountType",
                                                        {
                                                            label: item.label,
                                                            param: item.param
                                                        }
                                                    )
                                                }}
                                            >
                                                {item.label}
                                            </p>
                                        )
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>
                        {/* Kết thúc Discount Types */}

                        {/* Bắt đầu User Types */}
                        <AccordionItem
                            value="item-3"
                            className="border-none space-y-[10px]"
                        >
                            <AccordionTrigger
                                className="px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] [&[data-state=open]]:text-darkBold font-medium text-darkMedium [&[data-state=open]]:bg-neutral-100"
                            >
                                Khách hàng
                            </AccordionTrigger>
                            
                            <AccordionContent className="pl-[20px] pb-0 space-y-[5px]">
                                {
                                    userTypes.map(item => {
                                        const isCheck = userTypesState.some(user => user?.param === item.param);

                                        return (
                                            <p
                                                key={item.id}
                                                className={cn(
                                                    "px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 font-medium text-darkMedium hover:text-darkBold cursor-pointer transition-colors",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "userTypes",
                                                        {
                                                            label: item.label,
                                                            param: item.param
                                                        }
                                                    )
                                                }}
                                            >
                                                {item.label}
                                            </p>
                                        )
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>
                        {/* Kết thúc User Types */}
                    </Accordion>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 left-0 h-[30px] bg-gradient-to-t from-white to-transparent" />
        </ScrollArea>
    )
}