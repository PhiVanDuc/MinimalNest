"use client"

import useCouponFilter from "@/hooks/use-coupon-filter";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import CouponItem from "./coupon-item";

import { cn } from "@/lib/utils";
import coupons from "@/static/coupon";

export default function CouponListContent() {
    const { isOpen } = useCouponFilter();

    return (
        <div className="space-y-[40px]">
            <div
                className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-[25px]",
                    isOpen ? "2xl:grid-cols-2" : "2xl:grid-cols-3"
                )}
            >
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
