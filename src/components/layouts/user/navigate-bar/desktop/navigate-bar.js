import Link from "next/link";
import Logo from "@/components/customs/logo/logo";

import NavigateBarItems from "./navigate-bar-items";
import NavigateBarActions from "./navigate-bar-actions";

export default function NavigateBar() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 responsive-horizontal h-[80px] hidden xl:flex justify-between items-center bg-white z-20 border-b border-slate-200"
        >
            <Logo />
            
            <NavigateBarItems />

            <div className="flex items-center gap-x-[5px]">
                <Link
                    href="/gio-hang"
                    className="hidden xl:flex px-[16px] py-[8px] text-[14px] text-darkMedium font-medium leading-0 rounded-[8px] hover:bg-neutral-100 hover:text-darkBold transition-colors duration-300"
                >
                    Giỏ hàng
                </Link>
                
                <NavigateBarActions />
            </div>
        </nav>
    )
}