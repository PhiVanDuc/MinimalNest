import RoleTable from "./role-table/role-table";
import columns from "./columns";

import { Button } from "@/components/ui/button";
import RoleFilter from "./role-filter/role-filter";
import RoleFilterSelected from "./role-filter/role-filter-selected";

export default function Role() {
    // Fetch

    return (
        <section className="space-y-[30px]">
            <header className="space-y-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[24px] font-semibold">Quản lý vai trò</h1>
                    <Button className="bg-darkBold">Thêm vai trò</Button>
                </div>

                <RoleFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <RoleFilterSelected />
                <RoleTable
                    columns={columns}
                />
            </div>
        </section>
    )
}