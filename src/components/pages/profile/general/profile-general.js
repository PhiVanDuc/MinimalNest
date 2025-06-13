import { RiCopperCoinLine } from "react-icons/ri";
import ProfileGeneralBasicForm from "./profile-general-basic-form";
import ProfileGeneralChangePasswordForm from "./profile-general-change-password-form";
import ProfileGeneralDeleteAccount from "./profile-general-delete-account";

export default function ProfileGeneral() {return (
        <div className="space-y-[40px] w-full">
            <header className="sm:flex items-center justify-between space-y-[10px] sm:space-y-0">
                <h1 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Thông tin chung</h1>
                <div className="flex items-center gap-3 text-[15px] sm:text-[16px] font-medium sm:font-semibold text-blueChecked">
                    <RiCopperCoinLine className="shrink-0 text-[25px] md:text-[30px]" />
                    <p>Đang có 400 điểm tích lũy</p>
                </div>
            </header>

            <ProfileGeneralBasicForm />
            <ProfileGeneralChangePasswordForm />
            <ProfileGeneralDeleteAccount />
        </div>
    )
}