import Logo from "@/components/customs/logo/logo";

import NavigateBarItems from "./navigate-bar-items";
import NavigateBarActions from "./navigate-bar-actions";

import { getLivingSpaces } from "@/lib/api/server-action/living-space";

export default async function NavigateBar() {
    const { response: livingSpacesResponse, result: livingSpaces } = await getLivingSpaces();

    return (
        <nav
            className="fixed top-0 left-0 right-0 responsive-horizontal h-[80px] hidden xl:flex justify-between items-center bg-white z-20 border-b border-slate-200"
        >
            <Logo />
            <NavigateBarItems livingSpaces={livingSpaces?.data?.living_spaces} />
            <NavigateBarActions />
        </nav>
    )
}