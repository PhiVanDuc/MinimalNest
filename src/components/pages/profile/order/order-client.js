"use client"

import { useEffect, useState } from "react";

import OrderList from "./order-list";
import OrderHeader from "./order-header";
import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import { getOrders } from "@/lib/api/server-action/order";

export default function OrderClient({
    userInfo,
    searchParams
}) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result } = await getOrders(userInfo?.id, searchParams?.status);
            if (!result?.success) {
                setError(`${status},${result?.message}`);
                setLoading(false);
                return;
            }

            setOrders(result?.data?.orders);
            setLoading(false);
        })();
    }, []);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <div className="w-full space-y-[40px]">
            <OrderHeader />
            <OrderList orders={orders} />
        </div>
    )
}
