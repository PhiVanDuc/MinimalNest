import Link from "next/link";
import CustomTable from "@/components/customs/admin/custom-table";

import columns from "./columns";

export default function DashboardTopProduct() {
    return (
        <div className="p-[25px] rounded-[10px] bg-white space-y-[20px]">
            <header className="flex justify-between">
                <h2 className="text-[18px] font-semibold">Sản phẩm bán chạy</h2>
            </header>

            <CustomTable
                data={[]}
                columns={columns}
            />
        </div>
    )
}