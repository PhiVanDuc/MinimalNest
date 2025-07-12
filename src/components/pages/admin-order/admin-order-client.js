"use client"

import { useEffect, useState } from "react";

import columns from "./columns";
import Error from "@/components/customs/error";
import AdminOrderLoading from "./admin-order-loading";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import AdminOrderButton from "./admin-order-button";
import AdminOrderFilter from "./admin-order-filter/admin-order-filter";

import { getAdminOrders } from "@/lib/api/server-action/order";

export default function AdminOrderClient({
    searchParams,
    permissions
}) {
    const [orders, setOrders] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [chooseOrders, setChooseOrders] = useState([]);

    useEffect(() => {
        const page = Number(searchParams?.page || 1);
        const status = searchParams?.status || "all";
        const from = searchParams?.from || "";
        const to = searchParams?.to || "";

        (async () => {
            const { status: ordersStatus, result: orders } = await getAdminOrders({ page, status, from, to });

            if (!orders?.success) {
                setError(`${ordersStatus},${orders?.message}`);
                setLoading(true);
                return;
            }

            setOrders(orders);
            setLoading();
        })();
    }, [searchParams]);

    if (loading) return <AdminOrderLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <div className="space-y-[25px] p-[20px] bg-white rounded-[10px]">
                <header className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý đơn hàng</h1>
                    <AdminOrderButton
                        permissions={permissions || []}
                        chooseOrders={chooseOrders}
                        setChooseOrders={setChooseOrders}
                    />
                </header>

                <AdminOrderFilter searchParams={searchParams} />
            </div>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={orders?.data?.rows || []}
                    columns={columns}
                    moreData={{
                        permissions: permissions || [],
                        chooseOrders: chooseOrders,
                        setChooseOrders: setChooseOrders
                    }}
                />
                
                {
                    orders?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={+searchParams?.page || 1}
                        pageSize={orders?.data?.pageSize || 0}
                        totalCount={orders?.data?.totalItems || 0}
                    />
                }
            </div>
        </section>
    )
}
