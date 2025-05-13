import columns from "./columns";
import AdminProductButton from "./admin-product-button";

import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import AdminProductFilter from "./admin-product-filter/admin-product-filter";
import AdminProductFilterSelected from "./admin-product-filter/admin-product-filter-selected";

export default function AdminProduct() {
    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý sản phẩm</h1>
                    <AdminProductButton />
                </div>

                <AdminProductFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <AdminProductFilterSelected />
                <CustomTable columns={columns} />
                <CustomPagination />
            </div>
        </section>
    )
}