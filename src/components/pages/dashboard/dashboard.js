import { Suspense } from "react";

import DashboardTotal from "./dashboard-total";
import DashboardTopProduct from "./dashboard-top-product/dashboard-top-product";
import DashboardTopCustomer from "./dashboard-top-customer/dashboard-top-customer";
import DashboardStockQuantity from "./dashboard-stock-quantity/dashboard-stock-quantity";
import DashboardRevenue from "./dashboard-revenue/dashboard-revenue";
import DashboardOrder from "./dashboard-order/dashboard-order";

export default function Dashboard() {
    return (
        <div className="space-y-[30px]">
            <h1 className="text-[24px] font-semibold">Bảng thống kê</h1>

            <div className="space-y-[25px]">
                <Suspense fallback="Loading . . .">
                    <DashboardTotal />
                </Suspense>

                <section className="flex items-start border rounded-[10px] bg-white">
                    <Suspense fallback="Loading . . .">
                        <DashboardRevenue />
                    </Suspense>

                    <Suspense fallback="Loading . . .">
                        <DashboardOrder />
                    </Suspense>
                </section>

                <Suspense fallback="Loading . . .">
                    <DashboardTopProduct />
                </Suspense>
                
                <div className="flex items-start gap-[25px]">
                    <Suspense fallback="Loading . . .">
                        <DashboardTopCustomer />
                    </Suspense>

                    <Suspense fallback="Loading . . .">
                        <DashboardStockQuantity />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}