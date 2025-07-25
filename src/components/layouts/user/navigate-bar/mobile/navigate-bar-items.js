"use client"

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/customs/logo/logo";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Menu, Undo2 } from "lucide-react";
import { FiShoppingBag } from "react-icons/fi";
import { BookText, House, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";
import generateSignatureClient from "@/lib/utils/generate-signature-client";
import { addLivingSpace } from "@/redux/slices/product-filter/product-filter-slice";

const items = [
    {
        label: "Trang chủ",
        icon: <House size={20} />,
        href: "/",
        highlight: "/home",
    },
    {
        label: "Phiếu giảm giá",
        icon: <BookText size={20} />,
        href: "/phieu-giam-gia",
        highlight: "/phieu-giam-gia",
    }
];

export default function NavigateBarItems({
    children,
    userInfo,
    livingSpaces
}) {
    const firstPath = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const dispatch = useDispatch();
    const [pathname, setPathname] = useState(() => firstPath === "/" ? "/home" : firstPath);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setPathname(firstPath === "/" ? "/home" : firstPath);
    }, [firstPath]);

    const handleClickSubNav = (item) => {
        if (item.slug === "all") {
            router.push("/san-pham");
            setIsOpen(false);
            return;
        }

        const params = pathname.startsWith("/san-pham/tim-kiem") ? new URLSearchParams(searchParams.toString()) : new URLSearchParams();

        params.set("living-space", item.slug);
        params.delete("signature");
        dispatch(addLivingSpace({
            label: item.living_space,
            param: item.slug
        }));

        const stringSearchParams = params.toString().replace(/%2C/g, ",");
        const signature = generateSignatureClient(params.toString().replace(/%2C/g, ","));
        
        router.push(`/san-pham/tim-kiem?${stringSearchParams}&signature=${signature}`);
        setIsOpen(false);
    }
    
    return (
        <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
            modal={true}
        >
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="group"
                >
                    <Menu className="text-slate-400 group-hover:text-darkBold transition duration-300" />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col gap-0 p-0">
                <SheetHeader className="hidden">
                    <SheetTitle className="hidden"></SheetTitle>
                    <SheetDescription className="hidden"></SheetDescription>
                </SheetHeader>

                <div className="flex items-center justify-between px-[20px] pt-[20px]">
                    <Logo className="text-[15px] md:text-[16px]" />

                    <Button
                        variant="ghost"
                        className="group"
                        onClick={() => { setIsOpen((state) => !state) }}
                    >
                        <Undo2 size={18} className="text-slate-400 group-hover:text-darkBold transition duration-300" />
                    </Button>
                </div>

                <ScrollArea className="relative flex-1 mt-[30px] px-[20px]">
                    <div className="space-y-[10px]">
                        <p className="text-[13px] font-medium text-darkBland">Thương mại</p>

                        <div className="space-y-[10px]">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem
                                    value="item-1"
                                    className="border-0"
                                >
                                    <AccordionTrigger
                                        className={cn(
                                            "py-[10px] px-[20px] rounded-[10px] hover:bg-neutral-100 text-[15px] text-darkMedium font-medium",
                                            pathname.startsWith("/products") ? "text-white bg-yellowBold hover:bg-yellowBold hover:opacity-80 transition duration-300" : ""
                                        )}
                                        iconColor={ pathname.startsWith("/products") ? "text-white" : "" }
                                    >
                                        <div className="flex items-center gap-x-[15px]">
                                            <FiShoppingBag size={20} />
                                            <p>Sản phẩm</p>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="mt-[10px] p-[10px] space-y-[10px] border-[1.5px] rounded-[10px]">
                                        <div
                                            className={cn(
                                                "flex items-center gap-x-[15px] py-[10px] px-[20px] rounded-[10px] hover:bg-neutral-100 text-[15px] text-darkMedium font-medium cursor-pointer",
                                                searchParams.get("living-space") === "all" ? "bg-yellowMedium hover:bg-yellowMedium hover:opacity-80" : ""
                                            )}
                                            onClick={() => {
                                                handleClickSubNav({
                                                    slug: "all",
                                                    living_space: "Tất cả"
                                                })
                                            }}
                                        >
                                            Tất cả
                                        </div>

                                        {
                                            livingSpaces.map(livingSpace => (
                                                <div
                                                    key={livingSpace.id}
                                                    className={cn(
                                                        "flex items-center gap-x-[15px] py-[10px] px-[20px] rounded-[10px] hover:bg-neutral-100 text-[15px] text-darkMedium font-medium cursor-pointer",
                                                        livingSpace.slug === searchParams.get("living-space") ? "bg-yellowMedium hover:bg-yellowMedium hover:opacity-80" : ""
                                                    )}
                                                    onClick={() => { handleClickSubNav(livingSpace) }}
                                                >
                                                    {livingSpace?.living_space}
                                                </div>
                                            ))
                                        }
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {
                                userInfo?.success && (
                                    <div
                                        className={cn(
                                            "flex items-center gap-x-[15px] py-[10px] px-[20px] rounded-[10px] hover:bg-neutral-100 text-[15px] text-darkMedium font-medium cursor-pointer",
                                            pathname.startsWith("/gio-hang") ? "bg-neutral-100" : 'bg-transparent'
                                        )}
                                        onClick={() => { router.push("/gio-hang"); }}
                                    >
                                        <ShoppingCart size={20} />
                                        <p>Giỏ hàng</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className="space-y-[10px] mt-[10px]">
                        <p className="text-[13px] font-medium text-darkBland">Thông tin</p>

                        <div className="space-y-[10px]">
                            {
                                items.map(item => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-x-[15px] py-[10px] px-[20px] rounded-[10px] hover:bg-neutral-100 text-[15px] text-darkMedium font-medium",
                                            pathname.startsWith(item.highlight) ? "text-white bg-yellowBold hover:bg-yellowBold hover:opacity-80 transition duration-300" : ""
                                        )}
                                        onClick={() => { setIsOpen(false); }}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="py-[20px]"></div>

                    <div className="absolute z-10 bottom-0 right-0 left-0 h-[40px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </ScrollArea>

                <SheetFooter className="px-[20px] py-[20px] overflow-x-hidden">
                    {children}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}