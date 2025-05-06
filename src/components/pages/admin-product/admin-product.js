import columns from "./columns";
import AdminProductButtonAdd from "./admin-product-button-add";

import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import AdminProductFilter from "./admin-product-filter/admin-product-filter";
import AdminProductFilterSelected from "./admin-product-filter/admin-product-filter-selected";

export default function AdminProduct() {
    return (
        <section className="space-y-[30px]">
            <header className="space-y-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[24px] font-semibold">Quản lý sản phẩm</h1>
                    <AdminProductButtonAdd />
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