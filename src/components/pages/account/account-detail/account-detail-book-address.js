import { FaLocationDot } from "react-icons/fa6";

export default function AccountDetailBookAddress() {
    return (
        <div className="p-[20px] rounded-[10px] bg-neutral-100 space-y-[15px]">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <FaLocationDot size={20} />
                    <h2 className="text-[18px] font-semibold">Sổ địa chỉ</h2>
                </div>

                <p className="text-[15px] text-blueChecked font-medium underline underline-offset-1">Hiện khách hàng có 3 địa chỉ</p>
            </header>

            <div className="relative space-y-[20px] ml-[30px]">
                <div className="relative">
                    <div className="pl-[20px]">
                        <p className="text-[15px] font-semibold">Phí Văn Đức 032*****51</p>
                        <p className="text-[14px] text-darkMedium">Địa chỉ chi tiết mà người dùng nhập . . .</p>
                    </div>

                    <span className="absolute top-0 w-[8px] aspect-square rounded-full bg-yellowBold" />
                </div>

                <div className="relative">
                    <div className="pl-[20px]">
                        <p className="text-[15px] font-semibold">Phí Văn Đức 032*****51</p>
                        <p className="text-[14px] text-darkMedium">Địa chỉ chi tiết mà người dùng nhập . . .</p>
                    </div>

                    <span className="absolute top-0 w-[8px] aspect-square rounded-full bg-yellowBold" />
                </div>

                <div className="relative">
                    <div className="pl-[20px]">
                        <p className="text-[15px] font-semibold">Phí Văn Đức 032*****51</p>
                        <p className="text-[14px] text-darkMedium">Địa chỉ chi tiết mà người dùng nhập . . .</p>
                    </div>

                    <span className="absolute top-0 w-[8px] aspect-square rounded-full bg-yellowBold" />
                </div>

                <span
                    className="absolute top-0 bottom-0 left-[2.5px] w-[2.5px] bg-yellowBold rounded-full"
                    style={{ marginTop: "0px" }}
                />
            </div>
        </div>
    )
}
