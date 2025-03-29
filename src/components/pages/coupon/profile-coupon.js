import { RiCopperCoinLine } from "react-icons/ri";
import ProfileCouponsList from "./profile-coupons-list";

export default function ProfileCoupon() {
    return (
        <div className="space-y-[40px] w-full">
            <header className="space-y-[5px]">
                <div className="sm:flex items-center justify-between space-y-[10px] sm:space-y-0">
                    <h1 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Kho phiếu giảm giá</h1>
                    <div className="flex items-center gap-3 text-[15px] sm:text-[16px] font-medium sm:font-semibold text-blueChecked">
                        <RiCopperCoinLine className="shrink-0 text-[25px] md:text-[30px]" />
                        <p>Đang có 400 điểm tích lũy</p>
                    </div>
                </div>
            </header>

            <ProfileCouponsList />
        </div>
    )
}