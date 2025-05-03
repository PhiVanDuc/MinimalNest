"use client"

import { useForm } from "react-hook-form";

import {
    Form
} from "@/components/ui/form";

import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

export default function AccountEdit() {
    const form = useForm({
        defaultValues: {
            roles: [],
            status: "actived"
        }
    });

    return (
        <DialogContent className="gap-[30px]">
            <DialogHeader>
                <DialogTitle>Chỉnh sửa tài khoản</DialogTitle>
                <DialogDescription>Bạn có chỉ có thể chỉnh sửa vai trò và trạng thái của tài khoản.</DialogDescription>
            </DialogHeader>

            <Form></Form>
        </DialogContent>
    )
}