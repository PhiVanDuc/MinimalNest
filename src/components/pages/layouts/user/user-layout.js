import { Suspense } from "react";

import UserNavbar from "@/components/pages/layouts/user/navigate-bar/user-navbar";
import UserNavbarMobile from "@/components/pages/layouts/user/navigate-bar/user-navbar-mobile";
import NavigateBarLoading from "./navigate-bar/navigate-bar-loading";

export default function UserLayout({ children }) {
    return (
        <main>
            <Suspense fallback={<NavigateBarLoading />}>
                <UserNavbar />
                <UserNavbarMobile />
            </Suspense>

            {children}
        </main>
    )
}
