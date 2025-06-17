import columns from "./columns";

import Filter from "./filter/filter";
import Error from "@/components/customs/error";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import getAccessToken from "@/lib/utils/getAccessToken";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getAdminReturnGoods } from "@/lib/api/server-action/return_goods";

export default async function AdminReturnGoods({ searchParams }) {
    const {decode: { decode: { permissions }}} = getAccessToken();

    const { response, result: return_goods } = await getAdminReturnGoods({
        page: +searchParams?.page || 1,
        status: searchParams?.status,
        from: searchParams?.from,
        to: searchParams?.to
    });

    if (!return_goods?.success) return <Error message={`${response?.status},${return_goods?.message}`} />

    return (
        <section className="space-y-[20px]">
            <div className="space-y-[25px] p-[20px] bg-white rounded-[10px]">
                <header>
                    <h1 className="text-[22px] font-semibold">Quản lý trả hàng</h1>
                </header>

                <Filter searchParams={searchParams} />
            </div>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <TooltipProvider>
                    <CustomTable
                        data={return_goods?.data?.rows || []}
                        columns={columns}
                        moreData={{
                            permissions
                        }}
                    />
                </TooltipProvider>
                
                {
                    return_goods?.data?.rows?.length > 0 &&
                    <CustomPagination page={+searchParams?.page || 1} pageSize={return_goods?.data?.pageSize || 0} totalCount={return_goods?.data?.totalItems || 0} />
                }
            </div>
        </section>
    )
}
