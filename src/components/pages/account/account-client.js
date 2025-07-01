"use client"

import { useEffect, useState } from "react";

import columns from "./columns";
import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";
import AccountFilter from "./account-filter/account-filter";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import { getAccounts } from "@/lib/api/server-action/account";

export default function AccountClient({
    permissions,
    searchParams
}) {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const {status, accounts} = await getAccounts(searchParams?.page || 1, searchParams?.name || "");
            if (!accounts?.success) {
                setError(`${status},${accounts?.message}`);
                setLoading(false);
                return
            }

            setAccounts(accounts);
            setLoading(false);
        })();
    }, [searchParams]);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <h1 className="text-[22px] font-semibold">Quản lý tài khoản</h1>
                <AccountFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={accounts?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />

                {
                    accounts?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={+searchParams?.page || 1}
                        pageSize={accounts?.data?.pageSize || 0}
                        totalCount={accounts?.data?.totalItems || 0}
                    />
                }
            </div>
        </section>
    )
}
