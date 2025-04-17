"use client"

import useProductFilter from "@/hooks/use-product-filter";
import useCouponFilter from "@/hooks/use-coupon-filter";

const sidebarPaths = ["/san-pham", "/phieu-giam-gia"];

export default function useBreadcrumbPadding(pathname) {
    const { isOpen: prodOpen } = useProductFilter();
    const { isOpen: coupOpen } = useCouponFilter();
    const isSidebar = sidebarPaths.some(p => pathname.startsWith(p));

    if ((prodOpen && pathname.startsWith("/san-pham")) || (coupOpen && pathname.startsWith("/phieu-giam-gia"))) {
        return "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]";
    }
    return isSidebar ? "responsive-horizontal" : "";
}