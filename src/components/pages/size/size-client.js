"use client"

import { useEffect, useState } from "react";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import columns from "./columns";
import SizeButtonAdd from "./size-button-add";
import SizeFilter from "./size-filter/size-filter";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import { getSizes } from "@/lib/api/server-action/size";

export default function SizeClient({
    permissions,
    searchParams
}) {
    const [sizes, setSizes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: sizes } = await getSizes({ page: searchParams?.page || 1, size: searchParams?.size || "" });
            if (!sizes?.success) {
                setError(`${status},${sizes?.message}`);
                setLoading(false);
                return;
            }

            setSizes(sizes);
            setLoading(false);
        })();
    }, [searchParams]);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý kích cỡ</h1>
                    { permissions?.includes("add-size") && <SizeButtonAdd /> }
                </div>

                <SizeFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={sizes?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />

                {
                    sizes?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={sizes?.data?.currentPage}
                        pageSize={sizes?.data?.pageSize}
                        totalCount={sizes?.data?.totalItems}
                    />
                }
            </div>
        </section>
    )
}
