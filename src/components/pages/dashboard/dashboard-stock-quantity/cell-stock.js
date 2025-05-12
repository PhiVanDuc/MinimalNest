"use client"

import { useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function CellStock({ row }) {
    const [stock, setStock] = useState(80);
    
    return (
        <div className="space-y-[5px]">
            <Progress
                value={stock}
                max={200}
                classNameIndicator="bg-green-500"
            />
            <p className="text-[13px] text-darkMedium font-semibold">{stock} còn nhiều.</p>
        </div>
    )
}
