"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import AccountEditFormGeneral from "./account-edit-form-general";
import AccountEditFormRole from "./account-edit-form-role";

import { editAccount } from "@/lib/api/server-action/account";
import { toast } from "sonner";

export default function AccountEditForm({ roles, account }) {
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        defaultValues: {
            firstName: account?.first_name || "Lỗi lấy dữ liệu!",
            lastName: account?.last_name || "Lỗi lấy dữ liệu!",
            email: account?.email || "Lỗi lấy dữ liệu!",
            roles: account?.roles?.map(role => role?.id),
            status: account?.status || "active"
        }
    });

    const onSubmit = async (data) => {
        setSubmitting(true);

        const accountRes = await editAccount(account?.id, data);
        const message = accountRes?.message;

        if (accountRes?.success) toast.success(message);
        else toast.error(message || "Lỗi lưu thay đổi tài khoản!");

        setSubmitting(false);        
    }

    return (
        <Form {...form}>
            <form
                className="w-[60%] space-y-[20px]"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                {/* Thông tin chung */}
                <AccountEditFormGeneral form={form} />

                {/* Phân vai trò */}
                <AccountEditFormRole form={form} roles={roles} submitting={submitting} />
            </form>
        </Form>
    )
}