"use client"

import { useEffect, useState } from "react";

import Money from "@/components/customs/money";
import Error from "@/components/customs/error";
import DashboardTotalLoading from "./dashboard-total-loading";

import { FaBoxOpen } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import { BadgePercent } from "lucide-react";

import { convertToNumberDb } from "@/lib/utils/format-currency";
import { getTotalOrders, getTotalProducts, getTotalRevenue } from "@/lib/api/server-action/dashboard";

export default function DashboardTotal() {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const [totalProductsRes, totalOrdersRes, totalRevenueRes] = await Promise.all([
                getTotalProducts(),
                getTotalOrders(),
                getTotalRevenue()
            ]);

            const { status: totalProductsStatus, result: totalProducts } = totalProductsRes;
            const { status: totalOrdersStatus, result: totalOrders } = totalOrdersRes;
            const { status: totalRevenueStatus, result: totalRevenue } = totalRevenueRes;

            if (!totalProducts?.success) {
                setError(`${totalProductsStatus},${totalProducts?.message}`);
                setLoading(false);
                return;
            }

            if (!totalOrders?.success) {
                setError(`${totalOrdersStatus},${totalOrders?.message}`);
                setLoading(false);
                return;
            }

            if (!totalRevenue?.success) {
                setError(`${totalRevenueStatus},${totalRevenue?.message}`);
                setLoading(false);
                return;
            }

            setTotalProducts(totalProducts?.data?.total_products);
            setTotalOrders(totalOrders?.data?.total_orders);
            setTotalRevenue(totalRevenue?.data?.total_revenue);
            setLoading(false);
        })();
    }, []);

    if (loading) return <DashboardTotalLoading />
    if (error) return <Error message={error} />

    return (
        <section className="grid grid-cols-2 2xl:grid-cols-3 gap-[10px]">
            <div className="p-[20px] rounded-[10px] bg-white border">
                <div className="flex items-center gap-[20px]">
                    <div className="shrink-0 flex items-center justify-center w-[60px] aspect-square rounded-[8px] text-blue-600 border border-blue-600/40 bg-blue-600/20">
                        <FaBoxOpen size={25} />
                    </div>

                    <div>
                        <h2 className="text-[16px] text-darkMedium font-medium">Tổng sản phẩm</h2>
                        <p className="text-[22px] font-bold">{totalProducts}</p>
                    </div>
                </div>
{/* 
                <p className="text-[15px] font-medium text-darkBland">Đã tăng <span className="px-[8px] py-[4px] rounded-[4px] text-[14px] text-blueChecked bg-blueChecked/20">+ 10</span> trong tuần này.</p> */}
            </div>

            <div className="p-[20px] rounded-[10px] bg-white border">
                <div className="flex items-center gap-[20px]">
                    <div className="shrink-0 flex items-center justify-center w-[60px] aspect-square rounded-[8px] text-[#F29E50] border border-[#F29E50]/40 bg-[#F29E50]/20">
                        <ShoppingCart size={25} />
                    </div>

                    <div>
                        <h2 className="text-[16px] text-darkMedium font-medium">Tổng đơn hàng</h2>
                        <p className="text-[22px] font-bold">{totalOrders}</p>
                    </div>
                </div>

                {/* <p className="text-[15px] font-medium text-darkBland">Đã giảm <span className="whitespace-normal px-[8px] py-[4px] rounded-[4px] text-[14px] text-red-500 bg-red-500/20">- 100</span> trong tuần này.</p> */}
            </div>

            <div className="p-[20px] rounded-[10px] bg-white border">
                <div className="flex items-center gap-[20px]">
                    <div className="shrink-0 flex items-center justify-center w-[60px] aspect-square rounded-[8px] text-purple-600 border border-purple-600/40 bg-purple-600/20">
                        <BadgePercent size={25} />
                    </div>

                    <div>
                        <h2 className="text-[16px] text-darkMedium font-medium">Tổng doanh số</h2>
                        <Money
                            price={convertToNumberDb(totalRevenue)}
                            moneyClassName="text-[22px] font-bold"
                        />
                    </div>
                </div>

                {/* <div className="flex flex-wrap items-center gap-[3px] text-[15px] font-medium text-darkBland">
                    <p>Đã giảm</p>
                    <div className="px-[8px] py-[4px] rounded-[4px] bg-red-500/20">
                        <Money
                            price={30000000}
                            moneyClassName="w-fit text-[14px] text-red-500 font-medium"
                            sign="-"
                        />
                    </div>
                    <p>Trong tuần này.</p>
                </div> */}
            </div>
        </section>
    )
}