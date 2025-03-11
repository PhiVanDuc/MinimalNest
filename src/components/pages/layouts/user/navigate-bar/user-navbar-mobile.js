import Logo from "@/components/customs/logo/logo";
import NavigateItemsMobile from "./navigate-items-mobile";

export default function UserNavbarMobile() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 responsive-horizontal py-[15px] xl:py-[20px] flex xl:hidden justify-between items-center bg-white z-20 border-b border-slate-200"
        >
            <Logo className="text-[20px] md:text-[22px]" />
            <NavigateItemsMobile />
        </nav>
    )
}
