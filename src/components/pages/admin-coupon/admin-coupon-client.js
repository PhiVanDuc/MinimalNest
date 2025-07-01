"use client"

import { useState, useEffect } from "react";

import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";
import AdminCouponButtonAdd from "./admin-coupon-button-add";
import AdminCouponFilter from "./admin-coupon-filter/admin-coupon-filter";

import { getCoupons } from "@/lib/api/server-action/coupon";

export default function AdminCouponClient({
    permissions,
    searchParams
}) {
    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: coupons } = await getCoupons({ page: searchParams?.page || 1, code: searchParams?.code || "" });

            if (!coupons?.success) {
                setError(`${status},${coupons?.message}`);
                setLoading(false);
                return;
            }

            setCoupons(coupons);
            setLoading(false);
        })();
    }, [searchParams]);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý phiếu giảm giá</h1>
                    { permissions?.includes("add-coupon") && <AdminCouponButtonAdd /> }
                </div>

                <AdminCouponFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={coupons?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />
                
                {
                    coupons?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={coupons?.data?.currentPage}
                        pageSize={coupons?.data?.pageSize}
                        totalCount={coupons?.data?.totalItems}
                    />
                }
            </div>
        </section>
    )
}