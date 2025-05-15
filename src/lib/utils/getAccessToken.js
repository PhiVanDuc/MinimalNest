import { cookies } from "next/headers";
import decodeJwt from "./decode-jwt";

const getAccessToken = () => {
    const accessToken = cookies().get("access_token")?.value;
    const decode = decodeJwt(accessToken);

    return { accessToken, decode };
}

export default getAccessToken;