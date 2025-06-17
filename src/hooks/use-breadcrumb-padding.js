"use client"

import useProductFilter from "@/hooks/use-product-filter";

const sidebarProductPaths = ["/san-pham", "/san-pham/tim-kiem"];

export default function useBreadcrumbPadding(pathname) {
    const { isOpen: prodOpen } = useProductFilter();

    const isProductSidebar = sidebarProductPaths.some(item => item === pathname);
    if (prodOpen && isProductSidebar) return "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]";

    return (sidebarProductPaths.some(item => pathname.startsWith(item))) ? "responsive-horizontal" : "";
}