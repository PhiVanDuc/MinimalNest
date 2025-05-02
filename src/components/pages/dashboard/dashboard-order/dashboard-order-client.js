"use client"

import { useState } from 'react';

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";

import {
    Pie,
    PieChart
} from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { browser: "success", visitors: 350, fill: "var(--color-success)" },
    { browser: "failure", visitors: 20, fill: "var(--color-failure)" },
    { browser: "browsing", visitors: 50, fill: "var(--color-browsing)" },
    { browser: "delivering", visitors: 80, fill: "var(--color-delivering)" }
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    success: {
        label: "Thành công",
        color: "oklch(79.2% 0.209 151.711)",
    },
    failure: {
        label: "Thất bại",
        color: "oklch(70.4% 0.191 22.216)",
    },
    browsing: {
        label: "Đang duyệt",
        color: "#F29E50",
    },
    delivering: {
        label: "Đang giao",
        color: "oklch(70.7% 0.165 254.624)",
    }
}

export default function DashboardOrderClient() {
    const [selectRevenueTime, setSelectRevenueTime] = useState("yearly");

    return (
        <div className='shrink-0 flex flex-col w-[350px] self-stretch p-[25px]'>
            <header className='space-y-[10px]'>
                <h2 className='text-[18px] font-semibold'>Trạng thái đơn hàng</h2>

                <Select
                    defaultValue={selectRevenueTime}
                    onValueChange={value => { setSelectRevenueTime(value); }}
                >
                    <SelectTrigger className="shrink-0 w-full">
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

            <div className='flex-1 flex flex-col justify-center gap-y-[50px]'>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-[300px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            wrapperStyle={{ width: 200 }}
                            contentStyle={{ width: '200px' }}
                            content={<ChartTooltipContent hideLabel />}
                        />

                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={100}
                            outerRadius={140}
                            cornerRadius={8}
                            paddingAngle={3}
                        />
                    </PieChart>
                </ChartContainer>

                <div className='grid grid-cols-2 gap-x-[15px] gap-y-[20px]'>
                    <div className='flex items-center gap-[10px] text-[14px] font-medium'>
                        <span className="shrink-0 w-[20px] aspect-square rounded-full bg-green-400" />
                        <p className='flex-1 text-center'>Thành công</p>
                    </div>

                    <div className='flex items-center gap-[10px] text-[14px] font-medium'>
                        <span className="shrink-0 w-[20px] aspect-square rounded-full bg-red-400" />
                        <p className='flex-1 text-center'>Thất bại</p>
                    </div>

                    <div className='flex items-center gap-[10px] text-[14px] font-medium'>
                        <span className="shrink-0 w-[20px] aspect-square rounded-full bg-[#F29E50]" />
                        <p className='flex-1 text-center'>Đang duyệt</p>
                    </div>

                    <div className='flex items-center gap-[10px] text-[14px] font-medium'>
                        <span className="shrink-0 w-[20px] aspect-square rounded-full bg-blue-400" />
                        <p className='flex-1 text-center'>Đang giao</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
