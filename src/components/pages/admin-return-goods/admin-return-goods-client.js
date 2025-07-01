"use client"

import { useEffect, useState } from "react";

import columns from "./columns";
import Filter from "./filter/filter";
import Error from "@/components/customs/error";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLoading from "@/components/customs/main-loading";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import { getAdminReturnGoods } from "@/lib/api/server-action/return_goods";

export default function AdminReturnGoodsClient({
    permissions,
    searchParams
}) {
    const [returnGoods, setReturnGoods] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: return_goods } = await getAdminReturnGoods({
                page: +searchParams?.page || 1,
                status: searchParams?.status,
                from: searchParams?.from,
                to: searchParams?.to
            });

            if (!return_goods?.success) {
                setError(`${status},${return_goods?.message}`);
                setLoading(false);
                return;
            }

            setReturnGoods(return_goods);
            setLoading(false);
        })();
    }, []);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <div className="space-y-[25px] p-[20px] bg-white rounded-[10px]">
                <header>
                    <h1 className="text-[22px] font-semibold">Quản lý trả hàng</h1>
                </header>

                <Filter searchParams={searchParams} />
            </div>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <TooltipProvider>
                    <CustomTable
                        data={returnGoods?.data?.rows || []}
                        columns={columns}
                        moreData={{
                            permissions
                        }}
                    />
                </TooltipProvider>
                
                {
                    returnGoods?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={+searchParams?.page || 1}
                        pageSize={returnGoods?.data?.pageSize || 0}
                        totalCount={returnGoods?.data?.totalItems || 0}
                    />
                }
            </div>
        </section>
    )
}
