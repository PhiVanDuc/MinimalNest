"use client"

import { useDispatch, useSelector } from "react-redux";
import { updateProductFilters } from "@/redux/slices/product-filters/product-filters-slice";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";

import { cn } from "@/lib/utils";
import { types, sorts, furniture, colors } from "./product-filters-data";

export default function ProductFiltersContent() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.productFilters.group);
    const filtersSeperate = useSelector(state => state.productFilters.seperate);
    const expand = useSelector(state => state.productFiltersToggle.expand);

    const handleUpdateFilters = (data, isSeperate = false) => {
        if (!isSeperate) dispatch(updateProductFilters({ group: true, payload: data }));
        else dispatch(updateProductFilters({ seperate: true, payload: data }));
    }

    return (
        <ScrollArea className={cn(
            "relative flex-1 px-[20px] mb-[20px]",
            !expand ? "xl:hidden" : ""
        )}>
            <h3 className="text-[13px] font-medium text-darkBland mb-[15px]">Danh Sách Bộ Lọc</h3>

            <div className="space-y-[5px] pb-[40px]">
                <label
                    style={{ marginTop: 0 }}
                    className="text-[16px] font-medium text-darkBland cursor-pointer flex items-center gap-x-[15px] px-[15px] py-[10px] rounded-[10px] hover:bg-neutral-100"
                >
                    <Switch
                        checked={filters.indexOf("discount") !== -1 ? true : false}
                        onCheckedChange={() => { handleUpdateFilters("discount") }}
                        className="data-[state=checked]:bg-yellowBold"
                    />
                    <p>Giảm giá</p>
                </label>

                <Accordion
                    type="single"
                    collapsible
                    className="space-y-[5px]"
                >
                    <AccordionItem
                        value="value-1"
                        className="border-0"
                    >
                        <AccordionTrigger
                            className="px-[15px] py-[10px] rounded-[10px] text-[16px] font-medium text-darkBold hover:bg-neutral-100 transition-all duration-300"
                        >
                            <p>Sắp xếp</p>
                        </AccordionTrigger>

                        <AccordionContent className="space-y-[5px] pt-[10px] pl-[20px]">
                            {
                                sorts.map(item => {
                                    const isCheck = filters.indexOf(item.name) !== -1 ? true : false;

                                    return (
                                        <label
                                            key={item.id}
                                            className={cn(
                                                "text-[15px] font-medium text-darkBland cursor-pointer flex items-center gap-x-[15px] px-[15px] py-[10px] rounded-[10px] hover:bg-neutral-100",
                                                isCheck ? "bg-neutral-100 text-darkBold hover:bg-neutral-100" : ""
                                            )}
                                            onClick={() => {
                                                const sortNames = sorts.map(item => item.name);
                                                const existingSort = filters.find(filter => sortNames.includes(filter));
            
                                                if (existingSort) {
                                                    handleUpdateFilters(existingSort);
                                                    if (existingSort === item.name) return;
                                                }
                                                handleUpdateFilters(item.name);
                                            }}
                                        >
                                            <Checkbox
                                                checked={isCheck}
                                                className="hidden"
                                                onClick={(e) => e.stopPropagation()}
                                            />

                                            <p>{item.label}</p>
                                        </label>
                                    )
                                })
                            }
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="value-0"
                        className="border-0"
                    >
                        <AccordionTrigger
                            className="px-[15px] py-[10px] rounded-[10px] text-[16px] font-medium text-darkBold hover:bg-neutral-100 transition-all duration-300"
                        >
                            <p>Loại</p>
                        </AccordionTrigger>

                        <AccordionContent className="space-y-[5px] pt-[10px] pl-[20px]">
                            {
                                types.map(item => {
                                    const isCheck = filters.indexOf(item.name) !== -1 ? true : false;

                                    return (
                                        <label
                                            key={item.id}
                                            className={cn(
                                                "text-[15px] font-medium text-darkBland cursor-pointer flex items-center gap-x-[15px] px-[15px] py-[10px] rounded-[10px] hover:bg-neutral-100",
                                                isCheck ? "bg-neutral-100 text-darkBold hover:bg-neutral-100" : ""
                                            )}
                                        >
                                            <Checkbox
                                                checked={isCheck}
                                                onCheckedChange={() => { handleUpdateFilters(item.name) }}
                                                className="hidden"
                                            />

                                            <p>{item.label}</p>
                                        </label>
                                    )
                                })
                            }
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="value-2"
                        className="border-0"
                    >
                        <AccordionTrigger
                            className="px-[15px] py-[10px] rounded-[10px] text-[16px] font-medium text-darkBold hover:bg-neutral-100 transition-all duration-300"
                        >
                            <p>Nội thất</p>
                        </AccordionTrigger>

                        <AccordionContent className="space-y-[5px] pt-[10px] pl-[20px]">
                            {
                                furniture.map(item => {
                                    const isCheck = filters.indexOf(item.name) !== -1 ? true : false;

                                    return (
                                        <label
                                            key={item.id}
                                            className={cn(
                                                "text-[15px] font-medium text-darkBland cursor-pointer flex items-center gap-x-[15px] px-[15px] py-[10px] rounded-[10px] hover:bg-neutral-100",
                                                isCheck ? "bg-neutral-100 text-darkBold hover:bg-neutral-100" : ""
                                            )}
                                        >
                                            <Checkbox
                                                checked={isCheck}
                                                onCheckedChange={() => { handleUpdateFilters(item.name) }}
                                                className="hidden"
                                            />

                                            <p>{item.label}</p>
                                        </label>
                                    )
                                })
                            }
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem
                        value="value-3"
                        className="border-0"
                    >
                        <AccordionTrigger
                            className="px-[15px] py-[10px] rounded-[10px] text-[16px] font-medium text-darkBold hover:bg-neutral-100 transition-all duration-300"
                        >
                            <p>Giá</p>
                        </AccordionTrigger>

                        <AccordionContent className="space-y-[20px] pt-[20px] pl-[20px]">
                            <Slider
                                defaultValue={[filtersSeperate["price-min"] || 20, filtersSeperate["price-max"] || 80]}
                                max={100}
                                step={2}
                                onValueChange={(prices) => { handleUpdateFilters({ "price-min": prices[0], "price-max": prices[1] }, true) }}
                            />

                            <div className="flex items-center justify-between">
                                <div className="space-y-[2px] text-center">
                                    <p className="text-[14px] font-medium text-darkBland">Thấp nhất</p>
                                    <p className="text-[13px] font-semibold text-darkBold">{filtersSeperate["price-min"] || 20}</p>
                                </div>

                                <div className="space-y-[2px] text-center">
                                    <p className="text-[14px] font-medium text-darkBland">Cao nhất</p>
                                    <p className="text-[13px] font-semibold text-darkBold">{filtersSeperate["price-max"] || 80}</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="value-4"
                        className="border-0"
                    >
                        <AccordionTrigger
                            className="px-[15px] py-[10px] rounded-[10px] text-[16px] font-medium text-darkBold hover:bg-neutral-100 transition-all duration-300"
                        >
                            <p>Màu sắc</p>
                        </AccordionTrigger>

                        <AccordionContent className="space-y-[5px] pt-[10px] pl-[20px]">
                            {
                                colors.map(item => {
                                    const isCheck = filters.indexOf(item.name) !== -1 ? true : false;

                                    return (
                                        <label
                                            key={item.id}
                                            className={cn(
                                                "text-[15px] font-medium text-darkBland cursor-pointer flex items-center px-[15px] py-[10px] rounded-[10px] hover:bg-neutral-100",
                                                isCheck ? "bg-neutral-100 text-darkBold hover:bg-neutral-100" : ""
                                            )}
                                        >
                                            <Checkbox
                                                checked={isCheck}
                                                onCheckedChange={() => { handleUpdateFilters(item.name) }}
                                                className="hidden"
                                            />

                                            <div className="flex items-center gap-x-[15px]">
                                                <span
                                                    className={`shrink-0 w-[15px] h-[15px] rounded-full border border-neutral-300`}
                                                    style={{
                                                        backgroundColor: item.code
                                                    }}
                                                />
                                                <p>{item.label}</p>
                                            </div>
                                        </label>
                                    )
                                })
                            }
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="absolute bottom-0 right-0 left-0 h-[40px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </ScrollArea>
    )
}