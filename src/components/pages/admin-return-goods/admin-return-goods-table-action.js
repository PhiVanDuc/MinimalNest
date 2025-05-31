"use client"

import { useRouter } from "next/navigation";
import { FiEdit2 } from "react-icons/fi";

export default function AdminReturnGoodsTableAction() {
    const router = useRouter();

    return (
        <div className="flex justify-center">
            <div
                className="w-[35px] aspect-square flex items-center justify-center cursor-pointer"
                onClick={() => { router.push("/quan-tri/tra-hang/xem-xet/123") }}
            >
                <FiEdit2 size={20} className="shrink-0" />
            </div>
        </div>
    )
}
