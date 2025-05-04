export default function AccountDetailStatus() {
    return (
        <div className="flex items-center justify-between px-[20px] pb-[20px] border-b mb-[20px]">
            <div className="flex items-center gap-[15px]">
                <p className="text-[15px] font-semibold text-darkMedium">Trạng thái</p>
                <p className="text-[15px] font-medium text-blueChecked px-[15px] py-[5px] rounded-full bg-blueChecked/20">Kích hoạt</p>
            </div>

            <p className="text-[15px] font-medium text-blueChecked px-[15px] py-[5px] rounded-full bg-blueChecked/20">Khách quen</p>
        </div>
    )
}
