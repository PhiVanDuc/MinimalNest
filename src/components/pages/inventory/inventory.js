import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import InventoryButton from "./inventory-button";
import InventoryFilter from "./inventory-filter/inventory-filter";
import InventoryFilterSelected from "./inventory-filter/inventory-filter-selected";

export default function Inventory() {
    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý kho hàng</h1>
                    <InventoryButton />
                </div>

                <InventoryFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <InventoryFilterSelected />
                <CustomTable columns={columns} />
                <CustomPagination />
            </div>
        </section>
    )
}
