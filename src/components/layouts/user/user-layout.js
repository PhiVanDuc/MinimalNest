import { Suspense } from "react";

import NavigateBar from "./navigate-bar/desktop/navigate-bar";
import NavigateBarLoading from "./navigate-bar/navigate-bar-loading";
import NavigateBarMobile from "./navigate-bar/mobile/navigate-bar-mobile";
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
                <NavigateBar />
                <NavigateBarMobile />
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
