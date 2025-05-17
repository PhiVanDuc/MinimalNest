import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";

import RoleButtonAdd from "./role-button-add";
import RoleFilter from "./role-filter/role-filter";
import RoleFilterSelected from "./role-filter/role-filter-selected";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import Error from "@/components/customs/error";

import { getRoles } from "@/lib/api/server-action/role";

export default async function Role({ page }) {
    const { response, roles } = await getRoles(page);

    return (
        <>
            {
                !roles?.success ?
                (<Error message={`${response?.status},${roles?.message}`} />) :
                (
                    <section className="space-y-[20px]">
                        <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[22px] font-semibold">Quản lý vai trò</h1>
                                <RoleButtonAdd />
                            </div>

                            <RoleFilter />
                        </header>

                        <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                            <RoleFilterSelected />
                            <CustomTable
                                data={roles?.data?.rows}
                                columns={columns}
                            />
                            <CustomPagination />
                        </div>
                    </section>
                )
            }
        </>
    )
}