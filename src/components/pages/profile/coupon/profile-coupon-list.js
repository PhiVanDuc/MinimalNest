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
import CouponItem from "../../coupon/coupon-item";

let coupons = [
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
];

export default async function ProfileCouponList() {
    // Fetch dữ liệu ở đây

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-[25px]">
                {
                    coupons.map(coupon => {
                        return (
                            <CouponItem key={coupon.id} coupon={coupon} />
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