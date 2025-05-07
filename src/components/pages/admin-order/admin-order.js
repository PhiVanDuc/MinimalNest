import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import AdminOrderButton from "./admin-order-button";
import AdminOrderFilter from "./admin-order-filter/admin-order-filter";

export default function AdminOrder() {
    return (
        <section className="space-y-[30px]">
            <header className="flex items-center justify-between">
                <h1 className="text-[24px] font-semibold">Quản lý đơn hàng</h1>
                <AdminOrderButton />
            </header>

            <div className="space-y-[10px]">
                <AdminOrderFilter />

                <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                    <CustomTable columns={columns} />
                    <CustomPagination />
                </div>
            </div>
        </section>
    )
}
