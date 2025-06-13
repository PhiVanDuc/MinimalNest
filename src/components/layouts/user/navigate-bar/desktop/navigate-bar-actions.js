import NavigateBarUnauth from "./navigate-bar-unauth";
import NavigateBarAuthed from "./navigate-bar-authed";
import getAccessToken from "@/lib/utils/getAccessToken";
import { getCart } from "@/lib/api/server-action/cart";

export default async function NavigateBarActions() {
    const { accessToken, decode } = getAccessToken();
    const { response, result: cart } = await getCart(decode?.decode?.id);

    return (
        <>
            {
                accessToken ?
                <NavigateBarAuthed
                    userInfo={decode}
                    cart={cart?.data?.cart}
                /> :
                <NavigateBarUnauth />
            }
        </>
    )
}