"use client"

import { useState, useEffect } from "react";

import columns from "./columns";
import Error from "@/components/customs/error";
import CustomTable from "@/components/customs/admin/custom-table";

import { getVipCustomers } from "@/lib/api/server-action/dashboard";

export default function DashboardTopCustomer() {
    const [vipCustomers, setVipCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: vipCustomers } = await getVipCustomers();
            console.log(vipCustomers);

            if (!vipCustomers?.success) {
                setError(`${status},${vipCustomers?.message}`);
                setLoading(false);
                return;
            }

            setVipCustomers(vipCustomers?.data?.accounts);
            setLoading(false);
        })();
    }, []);

    if (loading) return <></>;
    if (error) return <Error message={error} />
 
    return (
        <div className="self-stretch p-[25px] rounded-[10px] bg-white space-y-[20px] w-[100%]">
            <header className="flex justify-between">
                <h2 className="text-[18px] font-semibold">Khách quen</h2>
            </header>

            <CustomTable
                columns={columns}
                data={vipCustomers || []}
            />
        </div>
    )
}