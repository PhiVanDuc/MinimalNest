"use client"

import { useEffect, useState } from "react";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";
import ProfileGeneralBasicForm from "./profile-general-basic-form";
import ProfileGeneralChangePasswordForm from "./profile-general-change-password-form";

import { FaUserFriends } from "react-icons/fa";
import { getAccount } from "@/lib/api/server-action/account";

export default function ProfileGeneralClient({ userInfo }) {
    const [account, setAccount] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result } = await getAccount(userInfo?.id);
            if (!result?.success) {
                setError(`${status},${result?.message}`);
                setLoading(false);
                return;
            }

            setAccount(result?.data?.account);
            setLoading(false);
        })();
    }, []);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <div className="space-y-[40px] w-full">
            <header className="sm:flex items-center justify-between space-y-[10px] sm:space-y-0">
                <h1 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Thông tin chung</h1>
                <div className="flex items-center gap-3 text-[14px] sm:text-[15px] font-medium sm:font-semibold text-blueChecked">  
                    <FaUserFriends className="shrink-0 text-[20px] md:text-[25px]" />
                    <p>
                        {
                            account?.customer_type === "first_time_customer" ? "Khách hàng lần đầu" :
                            account?.customer_type === "new_customer" ? "Khách hàng mới" :
                            account?.customer_type === "vip_customer" && "Khách hàng quen"
                        }
                    </p>
                </div>
            </header>

            <ProfileGeneralBasicForm
                account={account}
            />

            <ProfileGeneralChangePasswordForm
                account={account}
            />
        </div>
    )
}
