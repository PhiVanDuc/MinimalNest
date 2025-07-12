"use client"

import { useState, useEffect } from "react";

import OrderLoading from "../order/order-loading";
import ReturnGoodsHeader from "./return-goods-header";
import ReturnGoodsList from "./return-goods-list";
import Error from "@/components/customs/error";

import { getReturnGoods } from "@/lib/api/server-action/return_goods";

export default function ReturnGoodsClient({
    userInfo,
    searchParams
}) {
    const [returnGoods, setReturnGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result } = await getReturnGoods(userInfo?.id, searchParams?.status);
            if (!result?.success) {
                setError(`${status},${result?.message}`);
                setLoading(false);
                return;
            }

            setReturnGoods(result?.data?.return_goods);
            setLoading(false);
        })();
    }, [searchParams]);

    if (loading) return <OrderLoading />
    if (error) return <Error message={error} />

    return (
        <div className="w-full space-y-[40px]">
            <ReturnGoodsHeader />
            <ReturnGoodsList
                returnGoods={returnGoods}
            />
        </div>
    )
}
