import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import Filter from "./filter/filter";

import getAccessToken from "@/lib/utils/getAccessToken";

export default function AdminReturnGoods() {
    const { accessToken, decode: { permissions } } = getAccessToken(); 

    return (
        <section className="space-y-[20px]">
            <div className="space-y-[25px] p-[20px] bg-white rounded-[10px]">
                <header>
                    <h1 className="text-[22px] font-semibold">Quản lý trả hàng</h1>
                </header>

                <Filter />
            </div>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    columns={columns}
                    moreData={{
                        permissions
                    }}
                />
                <CustomPagination />
            </div>
        </section>
    )
}
