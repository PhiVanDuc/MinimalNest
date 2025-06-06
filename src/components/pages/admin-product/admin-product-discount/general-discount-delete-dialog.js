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
import { deleteGeneralDiscount } from "@/lib/api/server-action/general-discount";

export default function GeneralDiscountDeleteDialog({
    open,
    setOpen,
    id,
    formArray,
    index,
    setDiscountSelected
}) {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận xóa giảm giá chung</DialogTitle>
                    <DialogDescription>
                        Bạn có chắc chắn muốn xóa giảm giá chung này? Hành động này không thể hoàn tác.
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
                            const result = await deleteGeneralDiscount(id);
                            const message = result?.message;

                            if (result?.success) {
                                toast.success(message);
                                setOpen(false);
                                formArray.remove(index);
                                setDiscountSelected(null);
                            }
                            else toast.error(message || "Lỗi xóa giảm giá chung!");
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
