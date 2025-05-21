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
import { deleteSize } from "@/lib/api/server-action/size";

export default function ColorDeleteDialog({ open, setOpen, sizeId }) {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận xóa kích cỡ</DialogTitle>
                    <DialogDescription>
                        Bạn có chắc chắn muốn xóa kích cỡ này? Hành động này không thể hoàn tác.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="flex justify-end gap-[5px]">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Hủy
                    </Button>

                    <Button
                        variant="destructive"
                        onClick={async () => {
                            setSubmitting(true);

                            const result = await deleteSize(sizeId);
                            const message = result?.message;

                            if (result?.success) toast.success(message);
                            else toast.error(message || "Lỗi xóa kích cỡ!");

                            setOpen(false);
                            setSubmitting(false);
                            router.refresh();
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
