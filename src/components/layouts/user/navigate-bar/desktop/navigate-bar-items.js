"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Mark from "../mark";
import NavigateBarLivingSpace from "./navigate-bar-living-space";

import { cn } from "@/lib/utils";
import { navbarItems } from "@/static/navbar";

export default function NavigateBarItems({ livingSpaces }) {
    const firstPath = usePathname();
    const [pathname, setPathname] = useState(() => firstPath === "/" ? "/home" : firstPath);

    useEffect(() => {
        setPathname(firstPath === "/" ? "/home" : firstPath);
    }, [firstPath]);

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
                                livingSpaces &&
                                (<NavigateBarLivingSpace item={item} livingSpaces={livingSpaces} />)
                            )
                        }
                    </li>
                ))
            }
        </ul>
    )
}