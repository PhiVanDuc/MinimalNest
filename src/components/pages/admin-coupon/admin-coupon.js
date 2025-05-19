import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import AdminCouponButtonAdd from "./admin-coupon-button-add";
import AdminCouponFilter from "./admin-coupon-filter/admin-coupon-filter";
import AdminCouponFilterSelected from "./admin-coupon-filter/admin-coupon-filter-selected";

import getAccessToken from "@/lib/utils/getAccessToken";

export default function AdminCoupon() {
    // Fetch
    const { decode: { decode: { permissions } } } = getAccessToken();

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
                <AdminCouponFilterSelected />
                <CustomTable
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />
                <CustomPagination />
            </div>
        </section>
    )
}
