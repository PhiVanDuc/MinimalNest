"use client"

import { Button } from "@/components/ui/button";
import { useIntentoryExcel } from "./inventory-excel-provider";
import { cn } from "@/lib/utils";

export default function InventoryButton({ permissions }) {
    const { isDisplay, setIsDisplay } = useIntentoryExcel();

    return (
        <>
            {
                permissions?.includes("add-inventory") &&
                <Button
                    variant={isDisplay ? "" : "outline"}
                    className={cn(
                        "text-[14px] shadown-none",
                        isDisplay ? "bg-yellowBold hover:bg-yellowBold hover:opacity-90 text-white transition-all" : ""
                    )}
                    onClick={() => {
                        setIsDisplay(!isDisplay);
                    }}
                >
                    {
                        isDisplay ? "Tắt thêm số lượng" : "Thêm số lượng"
                    }
                </Button>
            }   
        </>
    )
}
