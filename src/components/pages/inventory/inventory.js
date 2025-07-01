import getAccessToken from "@/lib/utils/getAccessToken";
import InventoryClient from "./inventory-client";

export default async function Inventory({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();
    
    return (
        <InventoryClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}
