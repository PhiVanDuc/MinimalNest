import CustomTable from "@/components/customs/admin/custom-table";

import columns from "./columns";
// w-[35%]
export default function DashboardTopCustomer() {
    return (
        <div className="self-stretch p-[25px] rounded-[10px] bg-white space-y-[20px] w-[100%]">
            <header className="flex justify-between">
                <h2 className="text-[18px] font-semibold">Khách quen</h2>
            </header>

            <CustomTable
                columns={columns}
                data={[]}
            />
        </div>
    )
}