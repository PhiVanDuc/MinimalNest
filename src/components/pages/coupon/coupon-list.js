import CouponListClient from "./coupon-list-client";
import CouponListHeader from "./coupon-list-header";
import CouponListContent from "./coupon-list-content";

export default function CouponList() {
    // Gọi api lấy danh sách mã giảm giá từ server side

    return (
        <div className="space-y-[60px]">
            <CouponListClient>
                <CouponListHeader />
                <CouponListContent />
            </CouponListClient>
        </div>
    )
}
