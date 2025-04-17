"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import useBreadcrumbPadding from "@/hooks/use-breadcrumb-padding";

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

import { cn } from "@/lib/utils";

const breadcrumbMap = {
    "san-pham": "Sản phẩm",
    "tim-kiem": "Tìm kiếm",
    "gioi-thieu": "Giới thiệu",
    "lien-lac": "Liên lạc",
    "ho-so": "Hồ sơ - Thông tin chung",
    "phieu-giam-gia": "Phiếu giảm giá",
    "don-hang": "Đơn hàng",
};

export default function CustomBreadcrumb() {
    const pathname = usePathname();
    if (pathname === "/") return null;

    const segments = pathname.split("/").filter(Boolean);
    const crumbs = [
        { href: "/", label: "Trang chủ" },
        ...segments.map((seg, i) => ({
            href: "/" + segments.slice(0, i + 1).join("/"),
            label: breadcrumbMap[seg] ?? seg,
        })),
    ];

    const paddingClass = useBreadcrumbPadding(pathname);
    const baseClasses = cn(
        "pt-[100px] xl:pt-[120px] pb-[40px] transition-all duration-300",
        paddingClass
    );

    const showEllipsis = crumbs.length > 3;
    const firstTwo = crumbs.slice(0, 2);
    const middle = crumbs.slice(2, -1);
    const last = crumbs[crumbs.length - 1];

    return (
        <div className={baseClasses}>
            <Breadcrumb>
                <BreadcrumbList className="text-[15px]">
                    {crumbs.length === 2 ? (
                        // Nếu chỉ có 2 crumbs, render trực tiếp
                        crumbs.map((crumb, index) => (
                            <Fragment key={crumb.href}>
                                <BreadcrumbItem>
                                    {index === crumbs.length - 1 ? (
                                        <BreadcrumbPage className="text-yellowBold font-medium">
                                            {crumb.label}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {index < crumbs.length - 1 && <BreadcrumbSeparator />}
                            </Fragment>
                        ))
                    ) : (
                        <>
                            {/* Render 2 đầu */}
                            {firstTwo.map(crumb => (
                                <Fragment key={crumb.href}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </Fragment>
                            ))}
    
                            {/* Nếu nhiều hơn 3 crumbs thì hiển thị dropdown */}
                            {showEllipsis ? (
                                <>
                                    <BreadcrumbItem>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center gap-1">
                                                <BreadcrumbEllipsis className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start">
                                                {middle.map(crumb => (
                                                    <DropdownMenuItem key={crumb.href}>
                                                        <a href={crumb.href}>{crumb.label}</a>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </>
                            ) : (
                                // Nếu không, render liền mạch
                                middle.map(crumb => (
                                    <Fragment key={crumb.href}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                    </Fragment>
                                ))
                            )}
    
                            {/* Luôn render phần tử cuối */}
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-yellowBold font-medium">
                                    {last.label}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );    
}