import Logo from "@/components/customs/logo/logo";
import NavigateBarItems from "./navigate-bar-items";
import NavigateBarActions from "./navigate-bar-actions";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getLivingSpaces } from "@/lib/api/server-action/living-space";

export default async function NavigateBarMobile() {
    const { decode } = getAccessToken();
    const { result: livingSpaces } = await getLivingSpaces();
    
    return (
        <nav
            className="fixed top-0 left-0 right-0 responsive-horizontal h-[80px] flex xl:hidden justify-between items-center bg-white z-20 border-b border-slate-200"
        >
            <Logo className="text-[15px] md:text-[16px]" />
            <NavigateBarItems
                userInfo={decode}
                livingSpaces={livingSpaces?.data?.living_spaces || []}
            >
                <NavigateBarActions />
            </NavigateBarItems>
        </nav>
    )
}
