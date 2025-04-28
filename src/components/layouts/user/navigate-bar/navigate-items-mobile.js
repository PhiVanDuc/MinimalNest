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

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { TbLogout } from "react-icons/tb";
import { LayoutDashboard, Menu, Undo2 } from "lucide-react";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { BookText, House, Send, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";
import { livingSpaces } from "@/static/navbar";
import generateSignatureClient from "@/lib/generate-signature-client";
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

export default function NavigateItemsMobile() {
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
        if (item.livingSpace === "all") {
            router.push("/san-pham");
            setIsOpen(false);
            return;
        }

        const params = pathname.startsWith("/san-pham/tim-kiem") ? new URLSearchParams(searchParams.toString()) : new URLSearchParams();

        params.set("living-space", item.livingSpace);
        params.delete("signature");
        dispatch(addLivingSpace({
            label: item.label,
            param: item.livingSpace
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
                                        {
                                            livingSpaces.map(livingSpace => (
                                                <div
                                                    key={livingSpace.label}
                                                    className={cn(
                                                        "flex items-center gap-x-[15px] py-[10px] px-[20px] rounded-[10px] hover:bg-neutral-100 text-[15px] text-darkMedium font-medium cursor-pointer",
                                                        livingSpace.livingSpace === searchParams.get("living-space") ? "bg-yellowMedium hover:bg-yellowMedium hover:opacity-80" : ""
                                                    )}
                                                    onClick={() => { handleClickSubNav(livingSpace); }}
                                                >
                                                    <livingSpace.icon size={20} />
                                                    {livingSpace.label}
                                                </div>
                                            ))
                                        }
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div
                                className="flex items-center justify-between px-[15px] py-[10px] rounded-[10px] bg-slate-100 hover:opacity-80 cursor-pointer transition duration-300 overflow-x-hidden"
                            >
                                <div className="flex items-center gap-x-[15px] overflow-x-hidden">
                                    <div className="shrink-0 w-[40px] aspect-square rounded-full bg-slate-300" />
                                    <div className="space-y-[2px] overflow-x-hidden">
                                        <p className="text-[14px] font-semibold text-darkBold truncate">Phi Van Duc</p>
                                        <p className="text-[12px] font-medium text-darkMedium truncate">phivanduc325@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="start"
                            sideOffset={10}
                            className="p-[10px] rounded-[10px]"
                        >
                            <DropdownMenuGroup className="w-full">
                                <DropdownMenuItem
                                    className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                                    onClick={() => { router.push("/ho-so"); }}
                                >
                                    <div className="shrink-0 w-[24px] flex justify-center">
                                        <FiUser size={18} />
                                    </div>
                                    <p>Hồ sơ người dùng</p>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                                    onClick={() => { router.push("/quan-tri"); }}
                                >
                                    <div className="shrink-0 w-[24px] flex justify-center">
                                        <LayoutDashboard size={18} />
                                    </div>
                                    <p>Trang quản trị</p>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                                >
                                    <div className="shrink-0 w-[24px] flex justify-center">
                                        <TbLogout size={18} />
                                    </div>
                                    <p>Đăng xuất</p>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}