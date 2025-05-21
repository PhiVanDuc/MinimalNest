import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";

import SizeButtonAdd from "./size-button-add";
import SizeFilter from "./size-filter/size-filter";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import Error from "@/components/customs/error";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getSizes } from "@/lib/api/server-action/size";

export default async function Size({ searchParams }) {
    // Fetch
    const { decode: { decode: { permissions } } } = getAccessToken();
    const { response, result: sizes } = await getSizes({ page: searchParams?.page || 1, size: searchParams?.size || "" });

    if (!sizes?.success) return <Error message={`${response?.status},${sizes?.message}`} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý kích cỡ</h1>
                    { permissions?.includes("add-size") && <SizeButtonAdd /> }
                </div>

                <SizeFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={sizes?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />
                <CustomPagination page={sizes?.data?.currentPage} pageSize={sizes?.data?.pageSize} totalCount={sizes?.data?.totalItems} />
            </div>
        </section>
    )
}