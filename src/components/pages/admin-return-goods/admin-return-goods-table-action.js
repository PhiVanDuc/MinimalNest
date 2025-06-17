"use client"

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FiEdit2 } from "react-icons/fi";

export default function AdminReturnGoodsTableAction({ data }) {
    const router = useRouter();
    const isClick = data?.status === "pending";

    return (
        <div className="flex justify-center">
            <div
                className={cn(
                    "w-[35px] aspect-square flex items-center justify-center cursor-pointer",
                    isClick ? "" : "cursor-not-allowed"
                )}
                onClick={() => {
                    if (!isClick) return;
                    router.push(`/quan-tri/tra-hang/xem-xet/${data?.id}`)
                }}
            >
                <FiEdit2
                    size={18}
                    className={cn(
                        "shrink-0",
                        isClick ? "" : "text-darkBland"
                    )}
                />
            </div>
        </div>
    )
}
