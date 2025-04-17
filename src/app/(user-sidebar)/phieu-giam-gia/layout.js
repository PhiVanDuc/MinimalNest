import UserSidebarLayout from "@/components/layouts/user/user-sidebar-layout";
import CouponFilter from "@/components/pages/coupon/filter/coupon-filter";
import CouponFilterLoading from "@/components/pages/coupon/filter/coupon-filter-loading";

export default function Layout({ children }) {
    return (
        <UserSidebarLayout
            sidebar={<CouponFilter />}
            sidebarLoading={<CouponFilterLoading />}
        >
            {children}
        </UserSidebarLayout>
    )
}
