import { Button } from "@/components/ui/button";
import { BadgePercent, Timer, Text, Scale } from "lucide-react";

export default function ProfileCouponDetail() {
    return (
        <div className="w-full">
            <div className="w-full space-y-[15px] mb-[40px]">
                <div className="w-full aspect-video sm:aspect-16/7 lg:aspect-16/6 rounded-[10px] bg-slate-300" />
                
                <div className="flex flex-wrap items-center justify-between gap-y-[4px] gap-x-[20px]">
                    <h1 className="text-[18px] sm:text-[20px] text-darkBold font-semibold truncate-2">Voucher Độc Quyền – Nhận Ngay Ưu Đãi Chưa Từng Có.</h1>
                    <span className="text-[14px] sm:text-[16px] text-blueChecked font-semibold">(Còn 100 phiếu.)</span>
                </div>
            </div>

            <div className="space-y-[40px]">
                <div className="flex flex-col sm:flex-row items-start gap-[20px]">
                    <div className="space-y-[4px] w-full">
                        <div className="flex items-center gap-[10px]">
                            <BadgePercent className="w-[22px] aspect-square text-yellowBold" />
                            <p className="text-[16px] sm:text-[18px] text-darkBold font-semibold">Giảm 5% tối đa 100k</p>
                        </div>
                        <p className="text-[15px] md:text-[16px] text-darkMedium font-medium pl-[32px]">Áp dụng cho đơn hàng tối thiểu từ 499k trở lên</p>
                    </div>

                    <div className="space-y-[4px] w-full">
                        <div className="flex items-center gap-[10px]">
                            <Timer className="w-[22px] aspect-square text-yellowBold" />
                            <h2 className="text-[16px] sm:text-[18px] text-darkBold font-semibold">Hạn sử dụng phiếu</h2>
                        </div>
                        <p className="text-[15px] md:text-[16px] text-darkMedium font-medium pl-[32px]">01 Th03 2025 14:55 - 31 Th05 2025 14:55</p>
                    </div>
                </div>

                <div className="space-y-[4px]">
                    <div className="flex items-center gap-[10px]">
                        <Scale className="w-[22px] aspect-square text-yellowBold" />
                        <h2 className="text-[16px] sm:text-[18px] text-darkBold font-semibold">Điều kiện sử dụng</h2>
                    </div>
                    
                    <ul className="space-y-[10px]">
                        <li className="flex items-center gap-x-[10px] text-[15px] md:text-[16px] text-darkMedium font-medium pl-[32px]">
                            <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full bg-yellowBold" />
                            Cần đăng nhập để sử dụng.
                        </li>

                        <li className="flex items-center gap-x-[10px] text-[15px] md:text-[16px] text-darkMedium font-medium pl-[32px]">
                            <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full bg-yellowBold" />
                            Mỗi tài khoản có thể sử dụng 1 lần duy nhất.
                        </li>

                        <li className="flex items-center gap-x-[10px] text-[15px] md:text-[16px] text-darkMedium font-medium pl-[32px]">
                            <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full bg-yellowBold" />
                            Áp dụng cho đơn hàng tối thiểu 499k.
                        </li>

                        <li className="flex items-center gap-x-[10px] text-[15px] md:text-[16px] text-darkMedium font-medium pl-[32px]">
                            <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full bg-yellowBold" />
                            Áp dụng cho các sản phẩm thuộc danh mục <span className="text-blueChecked">"Ghế, giường, thảm, . . ."</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-[4px]">
                    <div className="flex items-center gap-[10px]">
                        <Text className="w-[22px] aspect-square text-yellowBold" />
                        <h2 className="text-[16px] sm:text-[18px] text-darkBold font-semibold">Mô tả phiếu</h2>
                    </div>
                    <p className="text-[15px] md:text-[16px] text-darkMedium font-medium pl-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="text-right">
                    <Button className="px-[25px] py-[22px]">Sản phẩm</Button>
                </div>
            </div>
        </div>
    )
}