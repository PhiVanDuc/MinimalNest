"use client"

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import Mark from "../mark";
import { FaChevronDown } from "react-icons/fa6";

import generateSignatureClient from "@/lib/utils/generate-signature-client";
import { addLivingSpace } from "@/redux/slices/product-filter/product-filter-slice";
import { cn } from "@/lib/utils";

export default function NavigateBarLivingSpace({ item, livingSpaces }) {
    const [isOpenSubNav, setIsOpenSubNav] = useState(false);

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClickSubNav = (livingSpace) => {
        if (livingSpace.slug === "tat-ca") {
            router.push("/san-pham");
            return;
        }

        const params = pathname.startsWith("/san-pham/tim-kiem") ? new URLSearchParams(searchParams.toString()) : new URLSearchParams();

        params.set("living-space", livingSpace.slug);
        params.delete("signature");
        dispatch(addLivingSpace({
            label: livingSpace.living_space,
            param: livingSpace.slug
        }));

        const stringSearchParams = params.toString().replace(/%2C/g, ",");
        const signature = generateSignatureClient(params.toString().replace(/%2C/g, ","));
        
        router.push(`/san-pham/tim-kiem?${stringSearchParams}&signature=${signature}`);
    }
    
    return (
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
                align="center"
                sideOffset={15}
                className="rounded-[10px] p-[15px]"
            >
                <DropdownMenuGroup className="grid grid-cols-3 gap-x-[80px] gap-y-[10px]">
                    <DropdownMenuItem
                        className={cn(
                            "flex items-center text-darkMedium hover:text-darkBold px-[15px] py-[10px] gap-x-[20px] rounded-[5px] cursor-pointer",
                            searchParams.get("living-space") === "tat-ca" ? "bg-yellowMedium hover:bg-yelloMedium text-darkBold" : ""
                        )}
                        onClick={() => {
                            handleClickSubNav({ slug: 'tat-ca' })
                        }}
                    >
                        <p className="text-[15px]">Tất cả</p>
                    </DropdownMenuItem> 

                    {
                        livingSpaces.map(livingSpace => (
                            <DropdownMenuItem
                                key={livingSpace?.id}
                                className={cn(
                                    "flex items-center text-darkMedium hover:text-darkBold px-[15px] py-[10px] gap-x-[20px] rounded-[5px] cursor-pointer",
                                    searchParams.get("living-space") === livingSpace?.slug ? "bg-yellowMedium hover:bg-yelloMedium text-darkBold" : ""
                                )}
                                onClick={() => { handleClickSubNav(livingSpace) }}
                            >
                                <p className="text-[15px]">{livingSpace?.living_space}</p>
                            </DropdownMenuItem> 
                        ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
