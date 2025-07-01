"use client"

import { useEffect, useState } from "react";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import AccountEditForm from "./account-edit-form";
import AccountEditOrder from "./account-edit-order";

import { getRoles } from "@/lib/api/server-action/role";
import { getAccount } from "@/lib/api/server-action/account";

export default function AccountEditClient({ params }) {
    const [account, setAccount] = useState({});
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const [rolesRes, accountRes] = await Promise.all([
                getRoles({ all: "true" }),
                getAccount(params.accountId)
            ]);

            const { status: rolesStatus, roles } = rolesRes;
            const { status: accountStatus, result: account } = accountRes;

            if (!roles?.success || !account?.success) {
                if (!roles?.success) {
                    setError(`${rolesStatus},${roles?.message}`);
                    setLoading(false);
                    return;
                }

                if (!account?.success) {
                    setError(`${accountStatus},${account?.message}`);
                    setLoading(false);
                    return;
                }
            }

            setAccount(account?.data?.account);
            setRoles(roles?.data?.roles);
            setLoading(false);
        })();
    }, []);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

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

