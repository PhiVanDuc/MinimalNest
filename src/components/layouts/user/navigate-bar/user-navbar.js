import AuthButtons from "@/components/pages/auth/auth-buttons";
import Logo from "@/components/customs/logo/logo";
import NavigateItems from "./navigate-items";
import { Button } from "@/components/ui/button";

export default function UserNavbar() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 responsive-horizontal h-[80px] hidden xl:flex justify-between items-center bg-white z-20 border-b border-slate-200"
        >
            <Logo />
            <NavigateItems />
            <div className="flex items-center gap-x-[5px]">
                <Button
                    variant="ghost"
                    className="hidden xl:flex hover:bg-transparent text-[15px] text-darkMedium hover:bg-neutral-100 hover:text-darkBold transition-colors duration-300"
                >
                    Giỏ hàng
                </Button>
                <AuthButtons />
            </div>
        </nav>
    )
}