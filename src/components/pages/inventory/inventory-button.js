"use client"

import { Button } from "@/components/ui/button";

export default function InventoryButton({ permissions }) {
    return (
        <div className="flex items-center gap-[10px]">
            <Button
                variant="outline"
                className="shadow-none text-[14px]"
            >
                Xuất Excel
            </Button>

            {
                permissions?.includes("add-inventory") &&
                <Button
                    className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
                >
                    Nhập hàng
                </Button>
            }
        </div>
    )
}
