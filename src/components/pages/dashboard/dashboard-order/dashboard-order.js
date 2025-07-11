"use client"

import { useState, useEffect } from 'react';

import Error from '@/components/customs/error';
import DashboardOrderLoading from './dashboard-order-loading';

import {
    Pie,
    PieChart
} from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { getOrderStatusQuantities } from '@/lib/api/server-action/dashboard';
import { convertToNumberDb } from '@/lib/utils/format-currency';

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    fulfilled: {
        label: "Thành công",
        color: "oklch(79.2% 0.209 151.711)",
    },
    canceled: {
        label: "Thất bại",
        color: "oklch(70.4% 0.191 22.216)",
    },
    pending: {
        label: "Đang duyệt",
        color: "#F29E50",
    },
    packing: {
        label: "Đang đóng gói",
        color: "oklch(70.7% 0.165 254.624)",
    }
}

export default function DashboardOrder() {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: orderStatusQuantities } = await getOrderStatusQuantities();
            
            if (!orderStatusQuantities?.success) {
                setError(`${status},${orderStatusQuantities?.message}`);
                setLoading(false);
                return;
            }

            setChartData([
                { browser: "fulfilled", visitors: convertToNumberDb(orderStatusQuantities?.data?.fulfilled), fill: "var(--color-fulfilled)" },
                { browser: "canceled", visitors: convertToNumberDb(orderStatusQuantities?.data?.canceled), fill: "var(--color-canceled)" },
                { browser: "pending", visitors: convertToNumberDb(orderStatusQuantities?.data?.pending), fill: "var(--color-pending)" },
                { browser: "packing", visitors: convertToNumberDb(orderStatusQuantities?.data?.packing), fill: "var(--color-packing)" }
            ]);
            setLoading(false);
        })();
    }, []);

    if (loading) return <DashboardOrderLoading />
    if (error) return <Error message={error} />

    return (
        <div className='shrink-0 flex flex-col w-[350px] self-stretch p-[25px]'>
            <header className='space-y-[10px]'>
                <h2 className='text-[18px] font-semibold'>Trạng thái đơn hàng</h2>
                <p className="text-[14px] rounded-[5px] border border-neutral-300 px-[15px] py-[5px] cursor-pointer">Theo năm</p>
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
                        <p className='flex-1 text-center'>Đang đóng gói</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
