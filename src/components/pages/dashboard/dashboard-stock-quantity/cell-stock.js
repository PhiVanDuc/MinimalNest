"use client"

import { useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function CellStock({ row }) {
    const data = row?.original;

    const [stock, setStock] = useState(data?.total_quantity || 0);

    const getStockStatus = () => {
        if (stock >= 50) {
            return {
                color: "bg-green-500",
                message: `${stock} còn nhiều hàng`
            };
        } else if (stock >= 15) {
            return {
                color: "bg-amber-400",
                message: `${stock} còn hàng`
            };
        } else if (stock <= 14 && stock >= 1) {
            return {
                color: "bg-red-500", // Màu đỏ cho hết hàng
                message: `${stock} Sắp hết hàng`
            };
        } else {
            return {
                color: "bg-red-500", // Màu đỏ cho hết hàng
                message: `${stock} hết hàng`
            };
        }
    };

    const status = getStockStatus();
    
    return (
        <div className="space-y-[5px]">
            <Progress
                value={stock}
                max={200}
                classNameIndicator={`${status?.color}`}
            />
            <p className="text-[13px] text-darkMedium font-semibold">{status?.message}</p>
        </div>
    )
}
