import { Suspense } from "react";

import UserNavbar from "./navigate-bar/desktop/user-navbar";
import NavigateBarLoading from "./navigate-bar/navigate-bar-loading";
import UserNavbarMobile from "./navigate-bar/mobile/user-navbar-mobile";
import CustomBreadcrumb from "@/components/customs/custom-breadcrumb";
import Newsletter from "./newsletter";
import Footer from "./footer";
import { cn } from "@/lib/utils";

export default function UserLayout({ children, isOverflow = false }) {
    return (
        <main className={cn(
            "w-full",
            isOverflow ? "overflow-hidden" : ""
        )}>
            <Suspense fallback={<NavigateBarLoading />}>
                <UserNavbar />
                <UserNavbarMobile />
            </Suspense>

            <div className={cn(
                "flex justify-center mb-[100px] lg:mb-[150px]",
                isOverflow ? "overflow-hidden" : ""
            )}>
                <div className="responsive-horizontal max-width">
                    <CustomBreadcrumb />
                    {children}
                </div>
            </div>

            <Newsletter />
            <Footer />
        </main>
    )
}
