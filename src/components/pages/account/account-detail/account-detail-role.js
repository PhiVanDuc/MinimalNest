export default function AccountDetailRole() {
    return (
        <div className="flex items-start gap-[20px]">
            <header>
                <h2 className="text-[18px] font-semibold translate-y-[2px]">Vai trò</h2>
            </header>

            <div className="flex flex-wrap gap-[5px]">
                <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[15px] text-yellowBold font-medium rounded-full bg-yellowBold/20">
                    Quản trị sản phẩm
                </p>
                
                <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[15px] text-yellowBold font-medium rounded-full bg-yellowBold/20">
                    Quản trị đơn hàng
                </p>
            </div>
        </div>
    )
}
