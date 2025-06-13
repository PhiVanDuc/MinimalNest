import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import AdminCouponButtonAdd from "./admin-coupon-button-add";
import AdminCouponFilter from "./admin-coupon-filter/admin-coupon-filter";
import Error from "@/components/customs/error";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getCoupons } from "@/lib/api/server-action/coupon";

export default async function AdminCoupon({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();
    const { response, result: coupons } = await getCoupons({ page: searchParams?.page || 1, code: searchParams?.code || "" });

    if (!coupons?.success) return <Error message={`${response?.status},${coupons?.message}`} />

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
                <CustomPagination page={coupons?.data?.currentPage} pageSize={coupons?.data?.pageSize} totalCount={coupons?.data?.totalItems} />
            </div>
        </section>
    )
}
