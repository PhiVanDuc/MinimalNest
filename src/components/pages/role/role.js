import columns from "./columns";
import RoleTable from "./role-table/role-table";

import RoleButtonAdd from "./role-button-add";
import RoleFilter from "./role-filter/role-filter";
import RolePagination from "./role-table/role-pagination";
import RoleFilterSelected from "./role-filter/role-filter-selected";

export default function Role() {
    // Fetch

    return (
        <section className="space-y-[30px]">
            <header className="space-y-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[24px] font-semibold">Quản lý vai trò</h1>
                    <RoleButtonAdd />
                </div>

                <RoleFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <RoleFilterSelected />
                <RoleTable columns={columns} />
                <RolePagination />
            </div>
        </section>
    )
}