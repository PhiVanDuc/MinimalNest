import DashboardTotal from "./dashboard-total";
import DashboardOrder from "./dashboard-order";
import DashboardRevenue from "./dashboard-revenue";

import DashboardTopProduct from "./dashboard-top-product/dashboard-top-product";
import DashboardTopCustomer from "./dashboard-top-customer/dashboard-top-customer";

export default function Dashboard() {
    return (
        <div className="space-y-[30px]">
            <h1 className="text-[24px] font-semibold">Bảng thống kê</h1>

            <div className="space-y-[25px]">
                <DashboardTotal />

                <section className="flex items-start border rounded-[10px] bg-white">
                    <DashboardRevenue />
                    <DashboardOrder />
                </section>

                <DashboardTopProduct />
                
                <div className="flex items-start gap-[25px]">
                    <DashboardTopCustomer />
                </div>
            </div>
        </div>
    )
}