import { Suspense } from "react";
import NavigateBarLoading from "./navigate-bar/navigate-bar-loading";
import UserNavbar from "./navigate-bar/user-navbar";
import UserNavbarMobile from "./navigate-bar/user-navbar-mobile";
import CustomBreadcrumb from "@/components/customs/custom-breadcrumb";
import Newsletter from "./newsletter";
import Footer from "./footer";

export default function UserSidebarLayout({ children, sidebar, sidebarLoading }) {
    return (
        <main>
            <Suspense fallback={<NavigateBarLoading />}>
                <UserNavbar />
                <UserNavbarMobile />
            </Suspense>

            <Suspense fallback={sidebarLoading}>
                {sidebar}
            </Suspense>

            <div className="flex justify-center">
                <div className="max-width">
                    <CustomBreadcrumb />
                    {children}
                </div>
            </div>

            <Newsletter />
            <Footer />
        </main>
    )
}