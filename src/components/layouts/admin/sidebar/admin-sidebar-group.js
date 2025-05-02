"use client"

import { usePathname, useRouter } from "next/navigation";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

export default function AdminSidebarGroup({ group }) {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="space-y-[5px]">
            <p className="text-[12px] font-medium text-darkBland">{group.groupLabel}</p>

            <Accordion
                type="signle"
                collapsible
                className="space-y-[5px]"
            >
                {
                    group.groupItems?.map((item, index) => {
                        const currentLev1 = (item?.href && pathname.startsWith(item?.href));

                        return !item?.subItems ?
                        (
                            <div
                                key={item.id}
                                className={cn(
                                    "flex items-center gap-[15px] px-[15px] py-[10px] rounded-[5px] cursor-pointer transition-all duration-300",
                                    currentLev1 ? "bg-yellowBold hover:bg-yellowBold text-white" : "text-darkMedium bg-transparent hover:bg-neutral-200"
                                )}
                                onClick={() => { router.push(item?.href) }}
                            >
                                <span className="text-[13px] font-medium">{item.label}</span>
                            </div>
                        ) :
                        (
                            <AccordionItem
                                key={item.id}
                                value={"Item " + index}
                            >
                                <AccordionTrigger
                                    className="flex items-center gap-[15px] px-[15px] py-[10px] rounded-[5px] text-darkMedium [&[data-state=open]]:text-white bg-transparent hover:bg-neutral-200 [&[data-state=open]]:hover:bg-yellowBold [&[data-state=open]]:bg-yellowBold cursor-pointer transition-all duration-300"
                                    iconSize="w-4 h-4"
                                >
                                    <span className="text-[13px] font-medium">{item.label}</span>
                                </AccordionTrigger>

                                <AccordionContent className="relative pl-[20px] pb-0 mt-[5px] space-y-[5px]">
                                    {
                                        item?.subItems?.map(subItem => {
                                            const currentLev2 = pathname.startsWith(subItem.href);

                                            return (
                                                <p
                                                    key={subItem.id}
                                                    className={cn(
                                                        "text-[13px] font-medium px-[15px] py-[10px] rounded-[5px] cursor-pointer transition-all duration-300",
                                                        currentLev2 ? "bg-yellowBold hover:bg-yellowBold text-white" : "bg-transparent hover:bg-neutral-100 text-darkMedium"
                                                    )}
                                                    onClick={() => { router.push(subItem?.href) }}
                                                >
                                                    {subItem.label}
                                                </p>
                                            )
                                        })
                                    }

                                    <span className="absolute top-0 bottom-0 left-[13px] w-[3px] rounded-full bg-yellowBold" />
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}