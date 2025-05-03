import columns from "./columns";

import CustomTable from "@/components/customs/admin/custom-table";
import EventButtonAdd from "./event-button-add";
import EventFilter from "./event-filter/event-filter";
import EventFilterSelected from "./event-filter/event-filter-selected";
import CustomPagination from "@/components/customs/admin/custom-pagination";

export default function Event() {
    // Fetch

    return (
        <section className="space-y-[30px]">
            <header className="space-y-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[24px] font-semibold">Quản lý vai trò</h1>
                    <EventButtonAdd />
                </div>

                <EventFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <EventFilterSelected />
                <CustomTable columns={columns} />
                <CustomPagination />
            </div>
        </section>
    )
}