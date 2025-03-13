"use client"

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { Armchair, Sun } from "lucide-react";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiCookingPotBold, PiPaintBrushBold } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";
import { HiOutlineArchive } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa6";
import Mark from "./mark";

const items = [
    {
        label: "Trang chủ",
        href: "/",
        highlight: "/home",
    },
    {
        label: "Sản phẩm",
        href: "/san-pham",
        highlight: "/san-pham",
        subNav: true,
        subNavItems: [
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
        ]
    },
    {
        label: "Giới thiệu",
        href: "/gioi-thieu",
        highlight: "/gioi-thieu",
    },
    {
        label: "Liên lạc",
        href: "/lien-lac",
        highlight: "/lien-lac",
    },
];

export default function NavigateItems() {
    const firstPath = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [pathname, setPathname] = useState(() => firstPath === "/" ? "/home" : firstPath);
    const [isOpenSubNav, setIsOpenSubNav] = useState(false);

    useEffect(() => {
        setPathname(firstPath === "/" ? "/home" : firstPath);
    }, [firstPath]);

    const handleClickSubNav = (item) => {
        if (item.livingSpace === "all") router.push("/san-pham");
        else {
            const obj = {};
            searchParams.forEach((value, key) => {
                obj[key] = value;
            });

            obj["living-space"] = item.livingSpace;
            router.push(`/san-pham/tim-kiem?${new URLSearchParams(obj).toString().replace(/%2C/g, ',')}`);
        }
    }

    return (
        <ul className="w-fit hidden xl:flex items-center gap-x-[55px]">
            {
                items.map(item => (
                    <li
                        key={item.label}
                    >
                        {
                            !item.subNav ?
                            (
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "group relative text-[15px] font-medium",
                                        pathname.startsWith(item.highlight) ? "text-yellowBold" : "text-darkMedium"
                                    )}
                                >
                                    {item.label}
                                    <Mark className={cn(
                                        "group-hover:opacity-100",
                                        pathname.startsWith(item.highlight) ? "opacity-100 bg-yellowBold" : ""
                                    )} />
                                </Link>
                            ) :
                            (
                                <DropdownMenu
                                    open={isOpenSubNav}
                                    onOpenChange={setIsOpenSubNav}
                                >
                                    <DropdownMenuTrigger
                                        className={cn(
                                            "relative flex items-center gap-x-[10px] text-[15px] font-medium focus:outline-none",
                                            pathname.startsWith(item.highlight) ? "text-yellowBold" : "text-darkMedium"
                                        )}
                                    >
                                        {item.label}

                                        <FaChevronDown
                                            size={15}
                                            className={cn(
                                                "transition duration-300 translate-y-[-1.5px]",
                                                isOpenSubNav ? "-rotate-90" : "rotate-0"
                                            )}
                                        />

                                        <Mark className={cn(
                                            "group-hover:opacity-100",
                                            pathname.startsWith(item.highlight) ? "opacity-100 bg-yellowBold" : ""
                                        )} />
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent
                                        align="start"
                                        sideOffset={15}
                                        className="rounded-[10px] p-[15px]"
                                    >
                                        <DropdownMenuGroup className="grid grid-cols-2 gap-x-[80px] gap-y-[10px]">
                                            {
                                                item.subNavItems.map(item => (
                                                    <DropdownMenuItem
                                                        key={item.label}
                                                        className={cn(
                                                            "flex items-center text-darkMedium hover:text-darkBold px-[15px] py-[10px] gap-x-[20px] rounded-[5px] cursor-pointer",
                                                            searchParams.get("livingSpace") === item.livingSpace ? "bg-yellowMedium hover:bg-yelloMedium text-darkBold" : ""
                                                        )}
                                                        onClick={() => { handleClickSubNav(item) }}
                                                    >
                                                        {item.icon}
                                                        <p className="text-[15px]">{item.label}</p>
                                                    </DropdownMenuItem> 
                                                ))
                                            }
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )
                        }
                    </li>
                ))
            }
        </ul>
    )
}