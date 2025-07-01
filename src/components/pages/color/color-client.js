"use client"

import { useState, useEffect } from "react";

import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import Error from "@/components/customs/error";
import ColorButtonAdd from "./color-button-add";
import ColorFilter from "./color-filter/color-filter";
import MainLoading from "@/components/customs/main-loading";

import { getColors } from "@/lib/api/server-action/color";

export default function ColorClient({
    permissions,
    searchParams
}) {
    const [colors, setColors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: colors } = await getColors({ page: searchParams?.page || 1, color: searchParams?.color || "" });
            if (!colors?.success) {
                setError(`${status},${colors?.message}`);
                setLoading(false);
                return;
            }

            setColors(colors);
            setLoading(false);
        })();
    }, [searchParams]);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý màu sắc</h1>
                    { permissions?.includes("add-color") && <ColorButtonAdd /> }
                </div>

                <ColorFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={colors?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />

                {
                    colors?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={colors?.data?.currentPage}
                        pageSize={colors?.data?.pageSize}
                        totalCount={colors?.data?.totalItems}
                    />
                }
            </div>
        </section>
    )
}
