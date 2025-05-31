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
            <NavigateBarActions />
        </nav>
    )
}