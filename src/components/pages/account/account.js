import columns from "./columns";

import AccountFilter from "./account-filter/account-filter";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import Error from "@/components/customs/error";

import { getAccounts } from "@/lib/api/server-action/account";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Account({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();
    const { response, accounts } = await getAccounts(searchParams?.page || 1, searchParams?.name || "");

    if (!accounts?.success) return <Error message={`${response.status},${accounts?.message}`} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <h1 className="text-[22px] font-semibold">Quản lý tài khoản</h1>
                <AccountFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={accounts?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />
                <CustomPagination page={+searchParams?.page || 1} pageSize={accounts?.data?.pageSize || 0} totalCount={accounts?.data?.totalItems || 0}/>
            </div>
        </section>
    )
}