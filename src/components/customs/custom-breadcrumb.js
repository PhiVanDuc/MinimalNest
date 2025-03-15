"use client"

import { Fragment, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { v4 } from "uuid";
import { cn } from "@/lib/utils";

const breadcrumbMap = {
    "san-pham": "Sản phẩm",
    "tim-kiem": "Tìm kiếm",
    "gioi-thieu": "Giới thiệu",
    "lien-lac": "Liên lạc"
};

export default function CustomBreadcrumb() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);

    const isOpen = useSelector(state => state.productFilterOpen);

    const breadcrumbs = useMemo(() => {
        return [
            { href: "/", label: "Trang chủ" },
            ...pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                return {
                    href,
                    label: breadcrumbMap[segment] || segment,
                };
            }),
        ];
    }, [pathSegments]);

    if (breadcrumbs.length <= 3) {
        return (
            <div
                className={cn(
                    "flex justify-center pt-[86px] xl:pt-[116px] pb-[40px]",
                    pathname === "/" ? "hidden" : ""
                )}
            >
                <div
                    className={cn(
                        "max-width transition-all duration-300",
                        (isOpen && (pathname === "/san-pham" || pathname === "/san-pham/tim-kiem")) ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
                    )}
                >
                    <Breadcrumb>
                        <BreadcrumbList className="text-[15px]">
                            {breadcrumbs.map((crumb, index) => {
                                const isCurrent = index === breadcrumbs.length - 1;
                                return (
                                    <Fragment key={v4()}>
                                        <BreadcrumbItem>
                                            {isCurrent ? (
                                                <BreadcrumbPage className="text-yellowBold font-medium">
                                                    {crumb.label}
                                                </BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink href={crumb.href}>
                                                    {crumb.label}
                                                </BreadcrumbLink>
                                            )}
                                        </BreadcrumbItem>
                                        {!isCurrent && <BreadcrumbSeparator />}
                                    </Fragment>
                                );
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        );
    }

    const firstCrumbs = breadcrumbs.slice(0, 2);
    const dropdownCrumbs = breadcrumbs.slice(2, breadcrumbs.length - 1);
    const lastCrumb = breadcrumbs[breadcrumbs.length - 1];

    return (
        <div className={cn(
            "pt-[86px] xl:pt-[116px] pb-[40px] max-width transition-all duration-300",
            (isOpen && (pathname === "/san-pham" || pathname === "/san-pham/tim-kiem")) ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal",
            pathname === "/" ? "hidden" : ""
        )} >
            <Breadcrumb>
                <BreadcrumbList className="text-[15px]">
                    {/* 2 phần tử đầu */}
                    {firstCrumbs.map((crumb) => (
                        <Fragment key={v4()}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={crumb.href}>
                                    {crumb.label}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </Fragment>
                    ))}

                    {/* Dropdown menu cho phần tử từ thứ 3 đến liền trước phần tử cuối */}
                    <BreadcrumbItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1">
                                <BreadcrumbEllipsis className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                {dropdownCrumbs.map((crumb) => (
                                    <DropdownMenuItem key={v4()}>
                                        <a href={crumb.href}>{crumb.label}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    {/* Phần tử cuối */}
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-yellowBold font-medium">
                            {lastCrumb.label}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}