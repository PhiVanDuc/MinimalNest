import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import ColorButtonAdd from "./color-button-add";
import ColorFilter from "./color-filter/color-filter";
import ColorFilterSelected from "./color-filter/color-filter-selected";

export default function Color() {
    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý màu sắc</h1>
                    <ColorButtonAdd />
                </div>

                <ColorFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <ColorFilterSelected />
                <CustomTable columns={columns} />
                <CustomPagination />
            </div>
        </section>
    )
}
