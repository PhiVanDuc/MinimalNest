"use client"

import { useDispatch } from "react-redux";
import useProductFilter from "@/hooks/use-product-filter";

import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import _ from "lodash";
import { cn } from "@/lib/utils";
import {
    addCategories,
    addColors,
    addDiscount,
    addPriceMax,
    addPriceMin,
    addType,
} from "@/redux/slices/product-filter/product-filter-slice";
import { types, categories, colors } from "@/static/product-filter";

export default function ProductFilterContent() {
    const dispatch = useDispatch();
    const {
        filterState: {
            discountState,
            typeState,
            categoriesState,
            priceMinState,
            priceMaxState,
            colorsState
        }
    } = useProductFilter();

    const handleChooseFilter = (filter, payload) => {
        switch(filter) {
            case "discount": {
                dispatch(addDiscount(payload));
                break;
            }
            case "type": {
                dispatch(addType(payload));
                break;
            }
            case "categories": {
                dispatch(addCategories(payload));
                break;
            }
            case "price-min": {
                dispatch(addPriceMin(payload));
                break;
            }
            case "price-max": {
                dispatch(addPriceMax(payload));
                break;
            }
            case "colors": {
                dispatch(addColors(payload));
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
                    {/* Bắt đầu Discount */}
                    <label className="flex items-center gap-x-[15px] px-[20px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors text-[16px] font-medium text-darkMedium hover:text-darkBold cursor-pointer">
                        <Switch
                            checked={discountState.value}
                            onCheckedChange={() => {
                                handleChooseFilter(
                                    "discount",
                                    !discountState.value
                                )
                            }}
                        />
                        <p>Giảm giá</p>
                    </label>
                    {/* Kết thúc Discount */}
                    
                    <Accordion
                        type="single"
                        collapsible
                        className="space-y-[5px]"
                    >
                        {/* Bắt đầu Type */}
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
                        {/* Kết thúc Type */}
                        
                        {/* Bắt đầu Categories */}
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
                                        const isCheck = categoriesState.some(category => category?.param === item.param);

                                        return (
                                            <p
                                                key={item.id}
                                                className={cn(
                                                    "px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 transition-colors font-medium text-darkMedium hover:text-darkBold cursor-pointer",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "categories",
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
                        {/* Kết thúc Categories */}
                        
                        {/* Bắt đầu Price */}
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
                                    defaultValue={[priceMinState?.value || 10, priceMaxState?.value || 80]}
                                    value={[priceMinState?.value || 10, priceMaxState?.value || 80]}
                                    min={1}
                                    max={100}
                                    step={1}
                                    onValueChange={(prices) => {
                                        handleChooseFilter(
                                            "price-min",
                                            prices[0]
                                        );

                                        handleChooseFilter(
                                            "price-max",
                                            prices[1]
                                        );
                                    }}
                                />

                                <div className="flex items-center justify-between">
                                    <div className="space-y-[2px] text-center">
                                        <p className="text-[14px] font-medium text-darkBland">Thấp nhất</p>
                                        <p className="text-[13px] font-semibold text-darkBold">
                                            { priceMinState?.value || 10 }
                                        </p>
                                    </div>

                                    <div className="space-y-[2px] text-center">
                                        <p className="text-[14px] font-medium text-darkBland">Cao nhất</p>
                                        <p className="text-[13px] font-semibold text-darkBold">
                                            { priceMaxState?.value || 80 }
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        {/* Kết thúc Price */}
                        
                        {/* Bắt đầu Colors */}
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
                                        const isCheck = colorsState.some(color => color?.param === item.param);

                                        return (
                                            <div    
                                                key={item.id}
                                                className={cn(
                                                    "flex items-center gap-x-[15px] px-[15px] py-[12px] rounded-[10px] text-[15px] hover:bg-neutral-100 font-medium text-darkMedium hover:text-darkBold cursor-pointer transition-colors",
                                                    isCheck ? "bg-neutral-100 text-darkBold" : ""
                                                )}
                                                onClick={() => {
                                                    handleChooseFilter(
                                                        "colors",
                                                        {
                                                            label: item.label,
                                                            param: item.param,
                                                            codeColor: item.codeColor
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
                                                <p>{item.label}</p>
                                            </div>
                                        )
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>
                        {/* Kết thúc Colors */}
                    </Accordion>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 left-0 h-[30px] bg-gradient-to-t from-white to-transparent" />
        </ScrollArea>
    )
}