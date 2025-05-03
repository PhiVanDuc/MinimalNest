import AccountDetailBookAddress from "./account-detail-book-address";
import AccountDetailFormProfile from "./account-detail-form-profile";
import AccountDetailOrderStatistic from "./account-detail-order-statistic";
import AccountDetailRole from "./account-detail-role";
import AccountDetailStatus from "./account-detail-status";

export default function AccountDetail() {
    return (
        <section className="space-y-[30px]">
            <header>
                <h1 className="text-[24px] font-semibold">Chi tiết tài khoản</h1>
            </header>

            <div className="py-[20px] rounded-[10px] bg-white">
                <AccountDetailStatus />
                
                <div className="px-[20px] space-y-[40px] ">
                    <AccountDetailBookAddress />
                    <AccountDetailFormProfile />
                    <AccountDetailRole />
                    <AccountDetailOrderStatistic />
                </div>
            </div>
        </section>
    )
}
