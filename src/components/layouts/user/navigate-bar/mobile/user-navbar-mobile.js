import Logo from "@/components/customs/logo/logo";
import NavigateItemsMobile from "./navigate-items-mobile";
import getAccessToken from "@/lib/utils/getAccessToken";

export default function UserNavbarMobile() {
    const { accessToken, decode } = getAccessToken();

    return (
        <nav
            className="fixed top-0 left-0 right-0 responsive-horizontal h-[80px] flex xl:hidden justify-between items-center bg-white z-20 border-b border-slate-200"
        >
            <Logo className="text-[20px] md:text-[22px]" />
            <NavigateItemsMobile accessToken={accessToken} userInfo={decode} />
        </nav>
    )
}
