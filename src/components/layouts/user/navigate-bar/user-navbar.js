import AuthButtons from "@/components/pages/auth/auth-buttons";
import Logo from "@/components/customs/logo/logo";
import NavigateItems from "./navigate-items";
import Link from "next/link";

export default function UserNavbar() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 responsive-horizontal h-[80px] hidden xl:flex justify-between items-center bg-white z-20 border-b border-slate-200"
        >
            <Logo />
            <NavigateItems />
            <div className="flex items-center gap-x-[5px]">
                <Link
                    href="/gio-hang"
                    className="hidden xl:flex px-[20px] py-[12px] text-[15px] text-darkMedium font-medium rounded-[8px] hover:bg-neutral-100 hover:text-darkBold transition-colors duration-300"
                >
                    Giỏ hàng
                </Link>
                <AuthButtons />
            </div>
        </nav>
    )
}