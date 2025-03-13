import { Suspense } from "react";

import UserNavbar from "./navigate-bar/user-navbar";
import NavigateBarLoading from "./navigate-bar/navigate-bar-loading";
import UserNavbarMobile from "./navigate-bar/user-navbar-mobile";

export default function UserLayout({ children }) {
    return (
        <main className="overflow-x-hidden">
            <Suspense fallback={<NavigateBarLoading />}>
                <UserNavbar />
                <UserNavbarMobile />
            </Suspense>

            {children}
        </main>
    )
}
