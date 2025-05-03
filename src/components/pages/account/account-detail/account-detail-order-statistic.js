import Money from "@/components/customs/money";

export default function AccountDetailOrderStatistic() {
    return (
        <div className="flex items-start gap-[20px]" >
            <header>
                <h2 className="text-[18px] font-semibold translate-y-[2px]">Đơn hàng</h2>
            </header>

            <div className="flex flex-wrap gap-[5px]">
                <p className="shrink-0 px-[15px] py-[5px] text-[15px] text-yellowBold font-medium rounded-full bg-yellowBold/20">
                    Đã mua - 20 đơn hàng
                </p>

                <div className="shrink-0 flex gap-[3px] items-center px-[15px] py-[5px] text-[15px] text-yellowBold font-medium rounded-full bg-yellowBold/20">
                    <p>Đã chi - </p>
                    <Money
                        price={100000000}
                        moneyClassName="text-[15px] text-yellowBold"
                    />
                </div>
            </div>
        </div>
    )
}