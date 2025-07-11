"use client"

import { useState, useEffect } from "react";

import Error from "@/components/customs/error";
import Money from "@/components/customs/money";
import DashboardRevenueLoading from "./dashboard-revenue-loading";

// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";

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
    // const [selectRevenueTime, setSelectRevenueTime] = useState("yearly");
    const [totalRevenueDetail, setTotalRevenueDetail] = useState(0);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const chartConfig = {
        expense: {
            label: "Chi phí",
            color: "#487FFF"
        },
        profit: {
            label: "Lợi nhuận",
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
                return totalRevenueDetail?.data?.monthly?.map(item => {
                    return {
                        month: item?.month,
                        profit: convertToNumberDb(item?.profit),
                        expense: convertToNumberDb(item?.cost)
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

                {/* <Select
                    defaultValue={selectRevenueTime}
                    onValueChange={value => { setSelectRevenueTime(value); }}
                >
                    <SelectTrigger className="shrink-0 w-[150px]">
                        <SelectValue
                            placeholder="Chọn loại thời gian."
                        />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="yearly">Theo năm</SelectItem>
                        <SelectItem value="monthly">Theo tháng</SelectItem>
                        <SelectItem value="weekly">Theo tuần</SelectItem>
                        <SelectItem value="today">Hôm nay</SelectItem>
                    </SelectContent>
                </Select> */}

                <p className="w-[150px] text-[14px] rounded-[5px] border border-neutral-300 px-[15px] py-[5px] cursor-pointer">Theo năm</p>
            </header>

            <div className="space-y-[10px] mb-[30px]">
                <div className="flex items-center gap-[15px]">
                    <span className="inline-block w-[20px] aspect-square rounded-[5px] bg-yellowBold" />
                    <div className="flex items-center text-[14px]">
                        <p className="font-semibold w-[85px]">Chi phí:</p>
                        <Money
                            price={convertToNumberDb(totalRevenueDetail?.annual?.cost)}
                            moneyClassName="text-[14px]"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-[15px]">
                    <span className="inline-block w-[20px] aspect-square rounded-[5px] bg-blueChart" />
                    <div className="flex items-center text-[14px]">
                        <p className="font-semibold w-[85px]">Lợi nhuận:</p>
                        <Money
                            price={convertToNumberDb(totalRevenueDetail?.annual?.profit)}
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

                    <Bar dataKey="expense" fill="#F39E50" radius={8} />
                    <Bar dataKey="profit" fill="#487FFF" radius={8} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}