"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import { refundAdminReturnGoods } from "@/lib/api/server-action/return_goods";
import { toast } from "sonner";

export default function AdminReturnGoodsRefundButton({ data }) {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    const handleRefund = async () => {
        if (submitting) return;
        setSubmitting(true);

        const result = await refundAdminReturnGoods(data?.id);
        const message = result?.message;

        if (result?.message) {
            toast.success(message);
            router.refresh();
        }
        else toast.error(message);

        setSubmitting(false);
    }

    return (
        <div className="flex justify-center">
            {
                data?.is_refunded ?
                <p className="text-[14px] text-center">Đã hoàn tiền.</p> :
                data?.status !== "fulfilled" ?
                <p className="text-[14px] text-center">Chưa thể hoàn tiền.</p> :
                data?.payment_method === "stripe" ?
                (
                    <button
                        type="button"
                        className="text-[13px] text-center text-white font-medium px-[12px] py-[4px] rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                        onClick={handleRefund}
                    >
                        { submitting ? "Đang hoàn tiền" : "Stripe" }
                    </button>
                ) :
                (
                    <Tooltip
                        delayDuration={100}
                    >
                        <TooltipTrigger>
                            <div
                                className="text-[13px] text-center text-white font-medium px-[12px] py-[4px] rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                                onClick={handleRefund}
                            >
                                { submitting ? "Đang cập nhật" : "Chuyển khoản" }
                            </div>
                        </TooltipTrigger>

                        <TooltipContent className="max-w-[300px] leading-[22px] text-center">
                            {data?.bank_info}
                        </TooltipContent>
                    </Tooltip>
                )
            }
        </div>
    )
}
