import PaymentClient from "./payment-client";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Payment({ params }) {
    const { decode } = getAccessToken();
    
    return (
        <PaymentClient
            params={params}
            userInfo={decode?.decode || {}}
        />
    )
}