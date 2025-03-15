import { Suspense } from "react";

import UserNavbar from "./navigate-bar/user-navbar";
import NavigateBarLoading from "./navigate-bar/navigate-bar-loading";
import UserNavbarMobile from "./navigate-bar/user-navbar-mobile";
import CustomBreadcrumb from "@/components/customs/custom-breadcrumb";
import { cn } from "@/lib/utils";

export default function UserLayout({ children }) {
    return (
        <main className="w-full overflow-x-hidden">
            <Suspense fallback={<NavigateBarLoading />}>
                <UserNavbar />
                <UserNavbarMobile />
            </Suspense>

            <CustomBreadcrumb />

            {children}
        </main>
    )
}
