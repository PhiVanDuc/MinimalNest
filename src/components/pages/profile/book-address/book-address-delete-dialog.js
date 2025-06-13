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
import { deleteBookAddress } from "@/lib/api/server-action/book-address";

export default function BookAddressDeleteDialog({
    open,
    setOpen,
    form,
    addressId,
    setBookAddressesList
}) {
    const [submitting, setSubmitting] = useState(false);

    const handleDelete = async () => {
        if (submitting) return;
        setSubmitting(true);

        const result = await deleteBookAddress(addressId);
        const message = result?.message;

        if (result?.success) {
            setBookAddressesList(prev => prev.filter(addr => addr.id !== addressId));

            form.reset();
            setOpen(false);
            toast.success(message);
        }
        else toast.error(message || "Lỗi xóa vai trò!");

        setSubmitting(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận xóa vai trò</DialogTitle>
                    <DialogDescription>
                        Bạn có chắc chắn muốn xóa vai trò này? Hành động này không thể hoàn tác.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="flex justify-end gap-[5px]">
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                    >
                        Hủy
                    </Button>

                    <Button
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={submitting}
                    >
                        { submitting ? "Đang xóa" : "Xác nhận xóa" }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
