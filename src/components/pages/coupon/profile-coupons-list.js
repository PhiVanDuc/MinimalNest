import Link from "next/link";
import { v4 } from "uuid";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

const coupons = [
    {
        id: v4(),
        image: "",
        code: "VIPSALE2025",
        title: "Voucher Độc Quyền – Nhận Ngay Ưu Đãi Chưa Từng Có",
        decrease: "Giảm 20% giảm tối đa 200k",
        prodDate: "20.02.2025",
        expDate: "25.02.2025",
        quantity: 2
    },
    {
        id: v4(),
        image: "",
        code: "VIPSALE2025",
        title: "Voucher Độc Quyền – Nhận Ngay Ưu Đãi Chưa Từng Có",
        decrease: "Giảm 20% giảm tối đa 200k",
        prodDate: "20.02.2025",
        expDate: "25.02.2025",
        quantity: 2
    },
    {
        id: v4(),
        image: "",
        code: "VIPSALE2025",
        title: "Voucher Độc Quyền – Nhận Ngay Ưu Đãi Chưa Từng Có",
        decrease: "Giảm 20% giảm tối đa 200k",
        prodDate: "20.02.2025",
        expDate: "25.02.2025",
        quantity: 2
    },
    {
        id: v4(),
        image: "",
        code: "VIPSALE2025",
        title: "Voucher Độc Quyền – Nhận Ngay Ưu Đãi Chưa Từng Có",
        decrease: "Giảm 20% giảm tối đa 200k",
        prodDate: "20.02.2025",
        expDate: "25.02.2025",
        quantity: 2
    },
    {
        id: v4(),
        image: "",
        code: "VIPSALE2025",
        title: "Voucher Độc Quyền – Nhận Ngay Ưu Đãi Chưa Từng Có",
        decrease: "Giảm 20% giảm tối đa 200k",
        prodDate: "20.02.2025",
        expDate: "25.02.2025",
        quantity: 2
    },
    {
        id: v4(),
        image: "",
        code: "VIPSALE2025",
        title: "Voucher Độc Quyền – Nhận Ngay Ưu Đãi Chưa Từng Có",
        decrease: "Giảm 20% giảm tối đa 200k",
        prodDate: "20.02.2025",
        expDate: "25.02.2025",
        quantity: 2
    }
]

export default function ProfileCouponsList() {
    return (
        <div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-[20px]">
                {
                    coupons.map(coupon => {
                        return (
                            <div
                                key={coupon.id}
                                className="relative flex items-center rounded-[15px] border bg-white"
                            >
                                <div className="relative w-[40%] self-stretch">
                                    <div className="w-full h-full bg-slate-300 rounded-tl-[15px] rounded-bl-[15px]" />
                                    <div className="flex flex-col absolute space-y-[10px] top-[50%] translate-y-[-50%] left-[10px]">
                                        <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                                        <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                                        <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                                        <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                                        <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                                    </div>
                                </div>
                                
                                <div className="py-[10px] px-[15px] sm:py-[15px] sm:px-[20px] w-[60%]">
                                    <div className="space-y-[5px] mb-[20px]">
                                        <div className="flex items-center gap-x-[10px]">
                                            <span className="inline-block w-[8px] aspect-square rounded-full bg-yellowBold" />
                                            <p className="text-[11px] sm:text-[12px] font-medium text-darkMedium">{coupon.code}</p>
                                        </div>

                                        <p className="truncate-2 text-[13px] sm:text-[14px] font-semibold text-darkBold">{coupon.title}</p>

                                        <div className="flex flex-col sm:flex-row">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-x-[15px] gap-y-[3px] text-[12px] sm:text-[13px] text-darkMedium">
                                                <p className="whitespace-nowrap">NBĐ: {coupon.prodDate}</p>
                                                <p className="whitespace-nowrap">HSD: {coupon.expDate}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-[5px] text-[14px]">
                                        <Button>
                                            <Link href="">Sản phẩm</Link>
                                        </Button>

                                        <Button variant="ghost">
                                            <Link href="/phieu-giam-gia/tieu-de-phieu-giam-gia">Chi tiết</Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="absolute flex justify-center top-[10px] right-[-7px] rounded-tl-full rounded-bl-full w-[40px] py-[2px] bg-yellowMedium text-[14px] text-darkBold font-medium">
                                    <p>3</p>
                                    <div
                                        className="absolute top-[25px] right-0 w-[50px] h-[50px] bg-yellowBold -z-10"
                                        style={{
                                            clipPath: "polygon(0 0, 100% 0, 0 100%)"
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div
                className="flex justify-center"
                style={{ marginTop: "50px" }}
            >
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#" isActive>2</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}