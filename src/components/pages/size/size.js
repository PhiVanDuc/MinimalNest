import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";

import SizeButtonAdd from "./size-button-add";
import SizeFilter from "./size-filter/size-filter";
import SizeFilterSelected from "./size-filter/size-filter-selected";
import CustomPagination from "@/components/customs/admin/custom-pagination";

export default function Size() {
    // Fetch

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý kích cỡ</h1>
                    <SizeButtonAdd />
                </div>

                <SizeFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <SizeFilterSelected />
                <CustomTable columns={columns} />
                <CustomPagination />
            </div>
        </section>
    )
}