import { v4 } from "uuid";

import OrderDetailSummary from "./order-detail-summary";
import CustomTable from "@/components/customs/admin/custom-table";
import OrderDetailCoupon from "@/components/pages/profile/order/detail/order-detail-coupon";
import OrderDetailAddress from "@/components/pages/profile/order/detail/order-detail-address";
import OrderDetailMessage from "@/components/pages/profile/order/detail/order-detail-message";
import OrderDetailPayment from "@/components/pages/profile/order/detail/order-detail-payment";

import paymentProductColumns from "@/components/pages/payment/payment-product-columns";

const data = Array.from({ length: 3 }).map((_, index) => {
    return {
        id: v4(),
        category: "Danh mục",
        productName: "Tên sản phẩm",
        color: {
            id: v4(),
            label: "Màu đen",
            param: "black",
            codeColor: "#000000"
        },
        size: {
            id: v4(),
            label: "S",
            param: "s"
        },
        quantity: 1,
        singlePrice: "400000000",
        totalPrice: "400000000"
    }
});

export default function OrderDetail() {
    return (
        <div className="w-full">
            <header className="flex flex-wrap items-center justify-between gap-x-[20px] gap-y-[5px] mb-[20px]">
                <div className="flex items-center gap-[15px]">
                    <p className="hidden sm:block text-[16px] md:text-[18px] font-semibold">MinimalNest</p>
                    <span className="hidden sm:block shrink-0 self-stretch my-[4px] w-[3px] rounded-full bg-yellowBold" />
                    <h1 className="text-[20px] md:text-[24px] font-semibold">Chi tiết đơn hàng</h1>
                </div>

                <p className="text-[14px] md:text-[16px] text-blueChecked font-medium">Trạng thái đơn hàng</p>
            </header>

            <div className="relative flex flex-col xl:flex-row items-start gap-[20px]">
                <div className="space-y-[50px] w-full">
                    <OrderDetailAddress />
                    <CustomTable
                        data={data}
                        columns={paymentProductColumns}
                    />
                    <OrderDetailCoupon />
                    <OrderDetailMessage />
                    <OrderDetailPayment />
                </div>

                <OrderDetailSummary />
            </div>
        </div>
    )
}
