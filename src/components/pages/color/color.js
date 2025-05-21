import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import ColorButtonAdd from "./color-button-add";
import ColorFilter from "./color-filter/color-filter";
import Error from "@/components/customs/error";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getColors } from "@/lib/api/server-action/color";

export default async function Color({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();
    const { response, result: colors } = await getColors({ page: searchParams?.page || 1, color: searchParams?.color || "" });

    if (!colors?.success) return <Error message={`${response?.status},${colors?.message}`} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý màu sắc</h1>
                    { permissions?.includes("add-color") && <ColorButtonAdd /> }
                </div>

                <ColorFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={colors?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />
                <CustomPagination page={colors?.data?.currentPage} pageSize={colors?.data?.pageSize} totalCount={colors?.data?.totalItems} />
            </div>
        </section>
    )
}
