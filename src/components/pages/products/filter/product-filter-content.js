"use client"

import { useDispatch, useSelector } from "react-redux";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

import { types, categories, colors } from "./product-filter-data";
import { updateFilters, updateOthers, updateRadioFilters } from "@/redux/slices/product-filter/product-filter-slice";
import { cn } from "@/lib/utils";

export default function ProductFilterContent() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.productFilter.filters);
    const others = useSelector(state => state.productFilter.others);

    const handleChooseFilter = (type = "filters", data, radio) => {
        if (type === "others") {
            dispatch(updateOthers(data));
            return;
        }

        if (radio) {
            dispatch(updateRadioFilters(data));
            return;
        }

        dispatch(updateFilters(data));
    }
    
    return (
        <ScrollArea
            className="relative flex-1 px-[20px]"
        >
            <div className="space-y-[10px]">
                <h3 className="text-[14px] text-darkBland font-semibold">Danh sách bộ lọc</h3>

                <div className="space-y-[10px]">
                    <label className="flex items-center gap-x-[15px] px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] font-medium text-darkMedium hover:text-darkBold cursor-pointer">
                        <Switch
                            checked={filters?.["discount"] ? true : false}
                            onCheckedChange={() => {
                                handleChooseFilter(
                                    "filters",
                                    {
                                        discount: {
                                            subLabel: "Giảm giá"
                                        }
                                    }
                                )
                            }}
                        />
                        <p>Giảm giá</p>
                    </label>

                    <Accordion
                        type="single"
                        collapsible
                        className="space-y-[5px]"
                    >
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
                                        const isCheck = filters?.[item.label];

                                        return (
                                            <p
                                                key={item.id}
                                                className={cn(
                                                    "px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 font-medium text-darkMedium hover:text-darkBold cursor-pointer transition-colors",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "filters",
                                                        {
                                                            list: types,
                                                            payload: {
                                                                [item.label]: {
                                                                    subLabel: item.subLabel
                                                                }
                                                            }
                                                        },
                                                        true
                                                    )
                                                }}
                                            >
                                                {item.subLabel}
                                            </p>
                                        )
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-1"
                            className="border-none space-y-[10px]"
                        >
                            <AccordionTrigger
                            className="px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] [&[data-state=open]]:text-darkBold font-medium text-darkMedium [&[data-state=open]]:bg-neutral-100"
                            >
                                Danh mục
                            </AccordionTrigger>
                            
                            <AccordionContent className="pl-[20px] pb-0 space-y-[5px]">
                                {
                                    categories.map(item => {
                                        const isCheck = filters?.[item.label];

                                        return (
                                            <p
                                                key={item.id}
                                                className={cn(
                                                    "px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 transition-colors font-medium text-darkMedium hover:text-darkBold cursor-pointer",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "filters", 
                                                        {
                                                            [item.label]: {
                                                                subLabel: item.subLabel
                                                            }
                                                        }
                                                    )
                                                }}
                                            >
                                                {item.subLabel}
                                            </p>
                                        )
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="border-none space-y-[20px]"
                        >
                            <AccordionTrigger
                            className="px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] [&[data-state=open]]:text-darkBold font-medium text-darkMedium [&[data-state=open]]:bg-neutral-100"
                            >
                                Giá
                            </AccordionTrigger>
                            
                            <AccordionContent className="pl-[20px] pb-0 space-y-[20px] pt-[8px]">
                                <Slider
                                    defaultValue={[others["price-min"]?.value || 20, others["price-min"]?.value || 80]}
                                    min={1}
                                    max={100}
                                    step={1}
                                    onValueChange={(prices) => {
                                        handleChooseFilter(
                                            "others",
                                            {
                                                "price-min": {
                                                    label: "price-min",
                                                    subLabel: "Giá tối thiểu",
                                                    value: prices[0]
                                                }
                                            }
                                        );

                                        handleChooseFilter(
                                            "others",
                                            {
                                                "price-max": {
                                                    label: "price-max",
                                                    subLabel: "Giá tối đa",
                                                    value: prices[1]
                                                }
                                            }
                                        );
                                    }}
                                />

                                <div className="flex items-center justify-between">
                                    <div className="space-y-[2px] text-center">
                                        <p className="text-[14px] font-medium text-darkBland">Thấp nhất</p>
                                        <p className="text-[13px] font-semibold text-darkBold">
                                            {others["price-min"]?.value || 20}
                                        </p>
                                    </div>

                                    <div className="space-y-[2px] text-center">
                                        <p className="text-[14px] font-medium text-darkBland">Cao nhất</p>
                                        <p className="text-[13px] font-semibold text-darkBold">
                                            {others["price-max"]?.value || 80}
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="border-none space-y-[10px]"
                        >
                            <AccordionTrigger
                            className="px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] [&[data-state=open]]:text-darkBold font-medium text-darkMedium [&[data-state=open]]:bg-neutral-100"
                            >
                                Màu sắc
                            </AccordionTrigger>
                            
                            <AccordionContent className="pl-[20px] pb-0 space-y-[5px]">
                                {
                                    colors.map(item => {
                                        const isCheck = filters?.[item.label];

                                        return (
                                            <div    
                                                key={item.id}
                                                className={cn(
                                                    "flex items-center gap-x-[15px] px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 font-medium text-darkMedium hover:text-darkBold cursor-pointer transition-colors",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "filters",
                                                        {
                                                            [item.label]: {
                                                                subLabel: item.subLabel,
                                                                codeColor: item.codeColor
                                                            }
                                                        }
                                                    )
                                                }}
                                            >
                                                <span
                                                    className="inline-block w-[20px] h-[20px] rounded-full border border-neutral-300"
                                                    style={{
                                                        background: item.codeColor
                                                    }}
                                                />
                                                <p>{item.subLabel}</p>
                                            </div>
                                        )
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 left-0 h-[30px] bg-gradient-to-t from-white to-transparent" />
        </ScrollArea>
    )
}