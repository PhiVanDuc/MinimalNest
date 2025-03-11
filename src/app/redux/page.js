"use client"

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import { useDispatch, useSelector } from "react-redux"
import { update } from "@/redux/slices/counter/counterSlice";

export default function Page() {
    const dispatch = useDispatch();
    const count = useSelector((state) => {
        return state.counter.count;
    });

    const handleUpdateCount = (action) => {
        dispatch(update(action === "desc" ? "desc" : "asc"));
    }
    
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex items-center gap-x-[40px]">
                <Button
                    variant="outline"
                    className="text-darkMedium"
                    onClick={() => { handleUpdateCount("desc") }}
                >
                    <Minus size={20} />
                </Button>

                <p className="text-[20px] font-medium text-darkBold">{count}</p>

                <Button
                    variant="outline"
                    className="text-darkMedium"
                    onClick={() => { handleUpdateCount("asc") }}
                >
                    <Plus size={20} />
                </Button>
            </div>
        </div>
    )
}