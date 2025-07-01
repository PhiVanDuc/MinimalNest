"use client"

import { useState, useEffect } from "react";

import ConsiderForm from "./consider-form";
import ConsiderOrder from "./consider-order";
import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import { getDetailAdminReturnGoods } from "@/lib/api/server-action/return_goods";

export default function Consider({ params }) {
    const [returnGoods, setReturnGoods] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: returnGoods } = await getDetailAdminReturnGoods(params?.returnGoodsId);

            if (!returnGoods?.success) {
                setError(`${status},${returnGoods?.message}`);
                setLoading(false);
                return;
            }

            setReturnGoods(returnGoods?.data?.return_goods);
            setLoading(false);
        })();
    }, []);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[30px]">
            <h1 className="text-[24px] font-semibold">Xem xét trả hàng</h1>

            <div className="flex items-start gap-[20px]">
                <ConsiderOrder returnGoods={returnGoods} />
                <ConsiderForm returnGoods={returnGoods} />
            </div>
        </section>
    )
}
