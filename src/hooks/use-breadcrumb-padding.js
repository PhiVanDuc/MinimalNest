"use client"

import useProductFilter from "@/hooks/use-product-filter";
import useCouponFilter from "@/hooks/use-coupon-filter";

const sidebarProductPaths = ["/san-pham", "/san-pham/tim-kiem"];
const sidebarDiscountPaths = ["/phieu-giam-gia"];

export default function useBreadcrumbPadding(pathname) {
    const { isOpen: prodOpen } = useProductFilter();
    const { isOpen: coupOpen } = useCouponFilter();

    const isProductSidebar = sidebarProductPaths.some(item => item === pathname);
    const isDiscountSidebar = sidebarDiscountPaths.some(item => item === pathname);

    if (prodOpen && isProductSidebar) return "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]";
    else if (coupOpen && isDiscountSidebar) return "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]";

    return (sidebarProductPaths.some(item => pathname.startsWith(item)) || sidebarDiscountPaths.some(item => pathname.startsWith(item))) ? "responsive-horizontal" : "";
}