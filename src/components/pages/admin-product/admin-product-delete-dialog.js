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
import { deleteProduct } from "@/lib/api/server-action/product";

export default function AdminProductDeleteDialog({ open, setOpen, productId }) {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận xóa sản phẩm</DialogTitle>
                    <DialogDescription>
                        Bạn có chắc chắn muốn xóa sản phẩm này? Hành động này không thể hoàn tác.
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
                            const result = await deleteProduct(productId);
                            const message = result?.message;

                            if (result?.success) {
                                setOpen(false);
                                toast.success(message);
                                router.refresh();
                            }
                            else toast.error(message || "Lỗi xóa sản phẩm!");
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
