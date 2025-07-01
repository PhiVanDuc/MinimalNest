import getAccessToken from "@/lib/utils/getAccessToken";
import ProfileGeneralClient from "./profile-general-client";

export default async function ProfileGeneral() {
    const { decode } = getAccessToken();

    return (
        <ProfileGeneralClient
            userInfo={decode?.decode}   
        />
    )
}