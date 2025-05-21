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
import { deleteEvent } from "@/lib/api/server-action/event";

export default function EventDeleteDialog({ open, setOpen, slug }) {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận xóa sự kiện</DialogTitle>
                    <DialogDescription>
                        Bạn có chắc chắn muốn xóa sự kiện này? Hành động này không thể hoàn tác.
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
                            const result = await deleteEvent(slug);
                            const message = result?.message;

                            if (result?.success) {
                                setOpen(false);
                                toast.success(message);
                                router.refresh();
                            }
                            else toast.error(message || "Lỗi xóa sự kiện!");
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
