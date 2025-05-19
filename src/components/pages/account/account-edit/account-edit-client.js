"use client"

import AccountEditForm from "./account-edit-form";
import AccountEditOrder from "./account-edit-order";

export default function AccountEditClient({ roles, account }) {
    return (
        <section className="space-y-[30px]">
            <h1 className="text-[24px] font-semibold">Chỉnh sửa tài khoản</h1>

            <div className="flex items-start gap-[20px]">
                <AccountEditForm roles={roles} account={account} />
                <AccountEditOrder />
            </div>
        </section>
    )
}
