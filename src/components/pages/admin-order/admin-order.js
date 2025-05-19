import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import AdminOrderButton from "./admin-order-button";
import AdminOrderFilter from "./admin-order-filter/admin-order-filter";

import getAccessToken from "@/lib/utils/getAccessToken";

export default function AdminOrder() {
    const { decode: { decode: { permissions } } } = getAccessToken();

    return (
        <section className="space-y-[20px]">
            <div className="space-y-[25px] p-[20px] bg-white rounded-[10px]">
                <header className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý đơn hàng</h1>
                    <AdminOrderButton permissions={permissions || []} />
                </header>

                <AdminOrderFilter />
            </div>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />
                <CustomPagination />
            </div>
        </section>
    )
}
