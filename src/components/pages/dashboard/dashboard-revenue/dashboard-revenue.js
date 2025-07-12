"use client"

import { useState, useEffect } from "react";

import Error from "@/components/customs/error";
import Money from "@/components/customs/money";
import DashboardRevenueLoading from "./dashboard-revenue-loading";

import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis
} from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart";

import { convertToNumberDb } from "@/lib/utils/format-currency";
import { getTotalRevenueDetail } from "@/lib/api/server-action/dashboard";

export default function DashboardRevenue() {
    const [totalRevenueDetail, setTotalRevenueDetail] = useState(0);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const chartConfig = {
        cost: {
            label: "Tổng chi",
            color: "#487FFF"
        },
        revenue: {
            label: "Tổng thu",
            color: "#487FFF"
        },
    }

    useEffect(() => {
        (async () => {
            const { status, result: totalRevenueDetail } = await getTotalRevenueDetail();
            
            if (!totalRevenueDetail?.success) {
                setError(`${status},${totalRevenueDetail?.message}`);
                setLoading(false);
                return;
            }

            setTotalRevenueDetail(totalRevenueDetail?.data);
            setChartData(() => {
                return totalRevenueDetail?.data?.total_revenue_monthly?.map(item => {
                    return {
                        month: item?.month,
                        revenue: convertToNumberDb(item?.revenue),
                        cost: convertToNumberDb(item?.cost)
                    }
                });
            });
            setLoading(false);
        })();
    }, []);

    if (loading) return <DashboardRevenueLoading />
    if (error) return <Error message={error} />

    return (
        <div className="p-[25px] w-full border-r self-stretch">
            <header className="flex items-center justify-between mb-[15px]">
                <h2 className="text-[17px] font-bold">Báo cáo doanh thu.</h2>
                <p className="w-[150px] text-[14px] rounded-[5px] border border-neutral-300 px-[15px] py-[5px] cursor-pointer">Theo năm</p>
            </header>

            <div className="space-y-[10px] mb-[30px]">
                <div className="flex items-center gap-[15px]">
                    <span className="inline-block w-[20px] aspect-square rounded-[5px] bg-yellowBold" />
                    <div className="flex items-center text-[14px]">
                        <p className="font-semibold w-[85px]">Tổng chi:</p>
                        <Money
                            price={convertToNumberDb(totalRevenueDetail?.total_revenue_yearly?.cost)}
                            moneyClassName="text-[14px]"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-[15px]">
                    <span className="inline-block w-[20px] aspect-square rounded-[5px] bg-blueChart" />
                    <div className="flex items-center text-[14px]">
                        <p className="font-semibold w-[85px]">Tổng thu:</p>
                        <Money
                            price={convertToNumberDb(totalRevenueDetail?.total_revenue_yearly?.revenue)}
                            moneyClassName="text-[14px]"
                        />
                    </div>
                </div>
            </div>

            <ChartContainer
                config={chartConfig}
            >
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12
                    }}
                >

                    <CartesianGrid vertical={false} />

                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `T${value}`}
                    />

                    <ChartTooltip
                        cursor={false}
                        content={
                            <ChartTooltipContent
                                className="w-[300px]"
                                indicator="line"
                            />
                        }
                    />

                    <Bar dataKey="cost" fill="#F39E50" radius={8} />
                    <Bar dataKey="revenue" fill="#487FFF" radius={8} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}