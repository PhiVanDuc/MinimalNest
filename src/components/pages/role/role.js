import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import RoleButtonAdd from "./role-button-add";
import RoleFilter from "./role-filter/role-filter";
import Error from "@/components/customs/error";

import { getRoles } from "@/lib/api/server-action/role";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Role({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();
    const { response, roles } = await getRoles({ role: searchParams?.role || "", page: searchParams?.page || 1 });
    
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
                                <RoleButtonAdd permissions={permissions || []} />
                            </div>

                            <RoleFilter />
                        </header>

                        <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                            <CustomTable
                                data={roles?.data?.rows}
                                columns={columns}
                                moreData={{ permissions: permissions || [] }}
                            />
                            <CustomPagination page={+searchParams?.page || 1} pageSize={roles?.data?.pageSize || 0} totalCount={roles?.data?.totalItems || 0} />
                        </div>
                    </section>
                )
            }
        </>
    )
}