"use client"

import { useState } from "react";

import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import AdminOrderButton from "./admin-order-button";
import AdminOrderFilter from "./admin-order-filter/admin-order-filter";

export default function AdminOrderClient({
    searchParams,
    permissions,
    orders
}) {
    const [chooseOrders, setChooseOrders] = useState([]);

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
                    <CustomPagination page={+searchParams?.page || 1} pageSize={orders?.data?.pageSize || 0} totalCount={orders?.data?.totalItems || 0} />
                }
            </div>
        </section>
    )
}
