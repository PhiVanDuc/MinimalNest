"use client"

import { useEffect, useState } from "react";

import columns from "./columns";
import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import RoleButtonAdd from "./role-button-add";
import RoleFilter from "./role-filter/role-filter";

import { getRoles } from "@/lib/api/server-action/role";

export default function RoleClient({
    permissions,
    searchParams
}) {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, roles: result } = await getRoles({ role: searchParams?.role || "", page: searchParams?.page || 1 });

            if (!result?.success) {
                setError(`${status},${result?.message}`);
                setLoading(false);
                return;
            }

            setRoles(result);
            setLoading(false);
        })();
    }, [searchParams]);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý vai trò</h1>
                    <RoleButtonAdd permissions={permissions || []} />
                </div>

                <RoleFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={roles?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />

                {
                    roles?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={+searchParams?.page || 1}
                        pageSize={roles?.data?.pageSize || 0}
                        totalCount={roles?.data?.totalItems || 0}
                    />
                }
            </div>
        </section>
    )
}
