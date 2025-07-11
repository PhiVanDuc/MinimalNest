import Link from "next/link";
import CustomTable from "@/components/customs/admin/custom-table";

import columns from "./columns";

export default function DashboardStockQuantity() {
    return (
        <div className="self-stretch p-[25px] rounded-[10px] bg-white space-y-[20px] w-[65%]">
            <header className="flex justify-between">
                <h2 className="text-[18px] font-semibold">Báo cáo kho</h2>
            </header>

            <CustomTable
                data={[]}
                columns={columns}
            />
        </div>
    )
}