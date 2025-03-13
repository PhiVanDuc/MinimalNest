import AuthButtons from "@/components/pages/auth/auth-buttons";
import Logo from "@/components/customs/logo/logo";
import NavigateItems from "./navigate-items";

export default function UserNavbar() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 responsive-horizontal py-[15px] xl:py-[20px] hidden xl:flex justify-between items-center bg-white z-20 border-b border-slate-200"
        >
            <Logo />
            <NavigateItems />
            <AuthButtons />
        </nav>
    )
}