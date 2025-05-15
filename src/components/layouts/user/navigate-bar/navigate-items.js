"use client"

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import Mark from "./mark";
import { FaChevronDown } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { navbarItems } from "@/static/navbar";
import generateSignatureClient from "@/lib/utils/generate-signature-client";
import { addLivingSpace } from "@/redux/slices/product-filter/product-filter-slice";

export default function NavigateItems() {
    const firstPath = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const dispatch = useDispatch();
    const [pathname, setPathname] = useState(() => firstPath === "/" ? "/home" : firstPath);
    const [isOpenSubNav, setIsOpenSubNav] = useState(false);

    useEffect(() => {
        setPathname(firstPath === "/" ? "/home" : firstPath);
    }, [firstPath]);

    const handleClickSubNav = (item) => {
        if (item.livingSpace === "all") {
            router.push("/san-pham");
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
    }

    return (
        <ul className="w-fit hidden xl:flex items-center gap-x-[55px]">
            {
                navbarItems.map(item => (
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
                                                            searchParams.get("living-space") === item.livingSpace ? "bg-yellowMedium hover:bg-yelloMedium text-darkBold" : ""
                                                        )}
                                                        onClick={() => { handleClickSubNav(item) }}
                                                    >
                                                        <item.icon size={20} />
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