import Link from "next/link";
import DashboardTable from "../dashboard-table";

import columns from "./columns";

export default function DashboardStockQuantity() {
    return (
        <div className="p-[25px] rounded-[10px] bg-white space-y-[20px] w-[50%]">
            <header className="flex justify-between">
                <h2 className="text-[18px] font-semibold">Báo cáo kho</h2>
                <Link
                    href="/quan-tri/bang-thong-ke"
                    className="text-[15px] text-yellowBold font-semibold underline underline-offset-2"
                >
                    Xem thêm
                </Link>
            </header>

            <DashboardTable
                columns={columns}
            />
        </div>
    )
}