"use client"

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import Link from "next/link";
import Logo from "@/components/customs/logo/logo";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Armchair, BookText, House, Send, Sun } from "lucide-react";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiCookingPotBold } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";
import { HiOutlineArchive } from "react-icons/hi";
import { Menu, Undo2 } from "lucide-react";
import { FiShoppingBag } from "react-icons/fi";
import { cn } from "@/lib/utils";

const livingSpaces = [
    {
        label: "Tất cả",
        icon: <TbLayoutDashboard size={20} />,
        livingSpace: "all",
    },
    {
        label: "Phòng tắm",
        icon: <LuShowerHead size={20} />,
        livingSpace: "bathroom",
    },
    {
        label: "Phòng khách",
        icon: <Armchair size={20} />,
        livingSpace: "living-room",
    },
    {
        label: "Ngoài trời",
        icon: <Sun size={20} />,
        livingSpace: "outside",
    },
    {
        label: "Phòng ăn - Nhà bếp",
        icon: <PiCookingPotBold size={20} />,
        livingSpace: "kitchen",
    },
    {
        label: "Lưu trữ",
        icon: <HiOutlineArchive size={20} />,
        livingSpace: "archive",
    },
    {
        label: "Phòng ngủ",
        icon: <MdOutlineBed size={20} />,
        livingSpace: "bedroom",
    }
];

const items = [
    {
        label: "Trang chủ",
        icon: <House size={20} />,
        href: "/",
        highlight: "/home",
    },
    {
        label: "Giới thiệu",
        icon: <BookText size={20} />,
        href: "/gioi-thieu",
        highlight: "/gioi-thieu",
    },
    {
        label: "Liên lạc",
        icon: <Send size={20} />,
        href: "/lien-lac",
        highlight: "/lien-lac",
    },
];

export default function NavigateItemsMobile() {
    const firstPath = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [pathname, setPathname] = useState(() => firstPath === "/" ? "/home" : firstPath);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickSubNav = (item) => {
        if (item.livingSpace === "all") router.push("/san-pham");
        else {
            const obj = {};
            searchParams.forEach((value, key) => {
                obj[key] = value;
            });

            obj['living-space'] = item.livingSpace;
            router.push(`/san-pham/tim-kiem?${new URLSearchParams(obj).toString().replace(/%2C/g, ',')}`);
        }

        setIsOpen(false);
    }

    useEffect(() => {
        setPathname(firstPath === "/" ? "/home" : firstPath);
    }, [firstPath]);

    return (
        <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
            modal={true}
        >
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col gap-0 p-0">
                <SheetHeader className="hidden">
                    <SheetTitle className="hidden"></SheetTitle>
                    <SheetDescription className="hidden"></SheetDescription>
                </SheetHeader>

                <div className="flex items-center justify-between px-[20px] pt-[20px]">
                    <Logo className="text-[20px] md:text-[22px]" />

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
                                        "py-[10px] px-[20px] rounded-[10px] hover:bg-slate-100 text-[15px] text-darkMedium font-medium",
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
                                    {
                                        livingSpaces.map(livingSpace => (
                                            <div
                                                key={livingSpace.label}
                                                className={cn(
                                                    "flex items-center gap-x-[15px] py-[10px] px-[20px] rounded-[10px] hover:bg-slate-100 text-[15px] text-darkMedium font-medium cursor-pointer",
                                                    livingSpace.livingSpace === searchParams.get("living-space") ? "bg-yellowMedium hover:bg-yellowMedium hover:opacity-80" : ""
                                                )}
                                                onClick={() => { handleClickSubNav(livingSpace); }}
                                            >
                                                {livingSpace.icon}
                                                {livingSpace.label}
                                            </div>
                                        ))
                                    }
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
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
                                            "flex items-center gap-x-[15px] py-[10px] px-[20px] rounded-[10px] hover:bg-slate-100 text-[15px] text-darkMedium font-medium",
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
                    <div className="flex items-center justify-between px-[15px] py-[10px] rounded-[10px] bg-slate-100 hover:opacity-80 cursor-pointer transition duration-300 overflow-x-hidden">
                        <div className="flex items-center gap-x-[15px] overflow-x-hidden">
                            <div className="shrink-0 w-[50px] aspect-square rounded-full bg-slate-300" />
                            <div className="space-y-[2px] overflow-x-hidden">
                                <p className="text-[15px] font-semibold text-darkBold truncate">Phi Van Duc</p>
                                <p className="text-[13px] font-medium text-darkMedium truncate">phivanduc325@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}