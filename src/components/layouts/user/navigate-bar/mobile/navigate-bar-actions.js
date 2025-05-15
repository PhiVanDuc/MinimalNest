import NavigateBarUnauth from "./navigate-bar-unauth";
import NavigateBarAuthed from "./navigate-bar-authed";

export default function NavigateBarActions({ accessToken, userInfo }) {
    return (
        <>
            { accessToken ? <NavigateBarAuthed userInfo={userInfo} /> : <NavigateBarUnauth /> }
        </>
    )
}