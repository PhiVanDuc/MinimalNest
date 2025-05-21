"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { deleteCoupon } from "@/lib/api/server-action/coupon";

export default function AdminCouponDeleteDialog({ open, setOpen, couponId }) {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận xóa phiếu giảm giá</DialogTitle>
                    <DialogDescription>
                        Bạn có chắc chắn muốn xóa phiếu giảm giá này? Hành động này không thể hoàn tác.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="flex justify-end gap-[5px]">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Hủy
                    </Button>

                    <Button
                        variant="destructive"
                        onClick={async () => {
                            if (submitting) return;

                            setSubmitting(true);
                            const result = await deleteCoupon(couponId);
                            const message = result?.message;

                            if (result?.success) {
                                setOpen(false);
                                toast.success(message);
                                router.refresh();
                            }
                            else toast.error(message || "Lỗi xóa phiếu giảm giá!");
                            setSubmitting(false);
                        }}
                        disabled={submitting}
                    >
                        { submitting ? "Đang xóa" : "Xác nhận xóa" }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
