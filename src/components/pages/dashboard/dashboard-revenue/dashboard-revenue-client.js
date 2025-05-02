"use client"

import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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

import Money from "@/components/customs/money";

const chartData = [
    { month: 1, profit: 186, expense: 100 },
    { month: 2, profit: 305, expense: 150 },
    { month: 3, profit: 237, expense: 120 },
    { month: 4, profit: 73, expense: 40 },
    { month: 5, profit: 209, expense: 120 },
    { month: 6, profit: 214, expense: 125 },
    { month: 7, profit: 214, expense: 125 },
    { month: 8, profit: 214, expense: 125 },
    { month: 9, profit: 214, expense: 125 },
    { month: 10, profit: 214, expense: 125 },
    { month: 11, profit: 214, expense: 125 },
    { month: 12, profit: 214, expense: 125 },
];

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

export default function DashboardRevenueClient() {
    const [selectRevenueTime, setSelectRevenueTime] = useState("yearly");

    return (
        <div className="p-[25px] w-full border-r self-stretch">
            <header className="flex items-center justify-between mb-[15px]">
                <h2 className="text-[17px] font-bold">Báo cáo doanh thu.</h2>

                <Select
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
                </Select>
            </header>

            <div className="space-y-[10px] mb-[30px]">
                <div className="flex items-center gap-[15px]">
                    <span className="inline-block w-[20px] aspect-square rounded-[5px] bg-yellowBold" />
                    <div className="flex items-center text-[14px]">
                        <p className="font-semibold w-[85px]">Chi phí:</p>
                        <Money
                            price={6000000000}
                            moneyClassName="text-[14px]"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-[15px]">
                    <span className="inline-block w-[20px] aspect-square rounded-[5px] bg-blueChart" />
                    <div className="flex items-center text-[14px]">
                        <p className="font-semibold w-[85px]">Lợi nhuận:</p>
                        <Money
                            price={14000000000}
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
                        content={<ChartTooltipContent indicator="line" />}
                    />

                    <Bar dataKey="expense" fill="#F39E50" radius={8} />
                    <Bar dataKey="profit" fill="#487FFF" radius={8} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}