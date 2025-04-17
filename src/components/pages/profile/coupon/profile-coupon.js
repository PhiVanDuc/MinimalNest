import { RiCopperCoinLine } from "react-icons/ri";
import ProfileCouponList from "./profile-coupon-list";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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

                <Dialog>
                    <DialogTrigger asChild>
                        <p className="w-fit text-[13px] sm:text-[14px] font-medium text-yellowBold hover:underline underline-offset-1 cursor-pointer">Điểm tích lũy là gì?</p>
                    </DialogTrigger>

                    <DialogContent className="px-0 gap-0">
                        <DialogHeader className="mb-[30px] px-[24px]">
                            <DialogTitle>Điểm tích lũy</DialogTitle>
                            <DialogDescription>Giải đáp thắc mắc quy ước và cách sử dụng điểm tích lũy.</DialogDescription>
                        </DialogHeader>

                        <ScrollArea className="max-h-[350px] px-[24px]">
                            <div className="space-y-[20px]">
                                <div className="space-y-[4px]">
                                    <p className="text-[14px] sm:text-[15px] text-darkBold font-semibold">Cách nhận điểm</p>
                                    <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[20px]">Bạn sẽ nhận được điểm tích lũy sau mỗi lần mua thành công 1 món đơn hàng và số điểm tích lũy sẽ dựa trên số tiền bạn chi cho đơn hàng đó.</p>
                                </div>

                                <div className="space-y-[4px]">
                                    <p className="text-[14px] sm:text-[15px] text-darkBold font-semibold">Quy ước <span className="text-[12px] md:text-[14px] font-medium text-yellowBold">(tiền/1.000)</span></p>
                                    <ul className="space-y-[6px]">
                                        <li className="flex items-center gap-[10px]">
                                            <span className="shrink-0 w-[5px] aspect-square rounded-full bg-slate-300" />
                                            <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[20px]">Đơn hàng 10.000 đồng sẽ nhận được 10 điểm.</p>
                                        </li>
                                        <li className="flex items-center gap-[10px]">
                                            <span className="shrink-0 w-[5px] aspect-square rounded-full bg-slate-300" />
                                            <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[20px]">Đơn hàng 400.000 đồng sẽ nhận được 400 điểm</p>
                                        </li>
                                        <li className="flex items-center gap-[10px]">
                                            <span className="shrink-0 w-[5px] aspect-square rounded-full bg-slate-300" />
                                            <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[20px]">Đơn hàng 1.000.000 đồng sẽ nhận được 1.000 điểm.</p>
                                        </li>
                                        <li className="flex items-center gap-[10px]">
                                            <span className="shrink-0 w-[5px] aspect-square rounded-full bg-slate-300" />
                                            <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[20px]">Đơn hàng 60.000.000 đồng sẽ nhận được 60.000 điểm.</p>
                                        </li>
                                        <li className="flex items-center gap-[10px]">
                                            <span className="shrink-0 w-[5px] aspect-square rounded-full bg-slate-300" />
                                            <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[20px]">Khi bạn nhận được điểm lẻ sẽ được làm tròn lên.</p>
                                        </li>
                                    </ul>            
                                </div>

                                <div className="space-y-[4px]">
                                    <p className="text-[14px] sm:text-[15px] text-darkBold font-semibold">Sử dụng</p>
                                    <ul className="space-y-[6px]">
                                        <li className="flex items-center gap-[10px]">
                                            <span className="shrink-0 w-[5px] aspect-square rounded-full bg-slate-300" />
                                            <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[20px]">1 điểm tích lũy sẽ được giảm 10 đồng vào hóa đơn.</p>
                                        </li>
                                        <li className="flex items-center gap-[10px]">
                                            <span className="shrink-0 w-[5px] aspect-square rounded-full bg-slate-300" />
                                            <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[20px]">Khi thanh toán, bạn có thể sử dụng điểm tích lũy để giảm tổng số tiền cần thanh toán.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </header>

            <ProfileCouponList />
        </div>
    )
}