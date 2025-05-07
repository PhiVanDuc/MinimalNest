import columns from "./columns";

import AccountFilter from "./account-filter/account-filter";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import AccountFilterSelected from "./account-filter/account-filter-selected";

export default function Account() {
    // Fetch

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <h1 className="text-[22px] font-semibold">Quản lý tài khoản</h1>
                <AccountFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <AccountFilterSelected />
                <CustomTable columns={columns} />
                <CustomPagination />
            </div>
        </section>
    )
}
