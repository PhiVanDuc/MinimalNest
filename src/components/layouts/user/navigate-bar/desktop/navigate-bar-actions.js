import NavigateBarUnauth from "./navigate-bar-unauth";
import NavigateBarAuthed from "./navigate-bar-authed";

import getAccessToken from "@/lib/utils/getAccessToken";

export default function NavigateBarActions() {
    const { accessToken, decode } = getAccessToken();

    return (
        <>
            { accessToken ? <NavigateBarAuthed userInfo={decode} /> : <NavigateBarUnauth /> }
        </>
    )
}