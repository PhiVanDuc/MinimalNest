import Error from "@/components/customs/error";
import ProfileGeneralBasicForm from "./profile-general-basic-form";
import ProfileGeneralChangePasswordForm from "./profile-general-change-password-form";

import { FaUserFriends } from "react-icons/fa";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getAccount } from "@/lib/api/server-action/account";

export default async function ProfileGeneral() {
    const { decode: { decode: { id } } } = getAccessToken();
    const { response, result: account } = await getAccount(id);

    if (!account?.success) return <Error message={`${response?.status},${account?.message}`} />

    return (
        <div className="space-y-[40px] w-full">
            <header className="sm:flex items-center justify-between space-y-[10px] sm:space-y-0">
                <h1 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Thông tin chung</h1>
                <div className="flex items-center gap-3 text-[14px] sm:text-[15px] font-medium sm:font-semibold text-blueChecked">
                    <FaUserFriends className="shrink-0 text-[20px] md:text-[25px]" />
                    <p>
                        {
                            account?.data?.account?.customer_type === "first_time_customer" ? "Khách hàng lần đầu" :
                            account?.data?.account?.customer_type === "new_customer" ? "Khách hàng mới" :
                            account?.data?.account?.customer_type === "vip_customer" && "Khách hàng quen"
                        }
                    </p>
                </div>
            </header>

            <ProfileGeneralBasicForm
                account={account?.data?.account}
            />

            <ProfileGeneralChangePasswordForm
                account={account?.data?.account}
            />
        </div>
    )
}