import { Suspense } from "react";

import UserNavbar from "./navigate-bar/user-navbar";
import NavigateBarLoading from "./navigate-bar/navigate-bar-loading";
import UserNavbarMobile from "./navigate-bar/user-navbar-mobile";
import CustomBreadcrumb from "@/components/customs/custom-breadcrumb";
import Newsletter from "./newsletter";
import Footer from "./footer";

export default function UserLayout({ children }) {
    return (
        <main className="w-full">
            <Suspense fallback={<NavigateBarLoading />}>
                <UserNavbar />
                <UserNavbarMobile />
            </Suspense>

            <div className="flex justify-center">
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
