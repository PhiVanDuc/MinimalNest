"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Error from "@/components/customs/error";
import ReturnGoodsOrder from "./return-goods-order";
import MainLoading from "@/components/customs/main-loading";
import CustomTable from "@/components/customs/admin/custom-table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

import { FaArrowRotateLeft } from "react-icons/fa6";

import { toast } from "sonner";
import columns from "./columns";
import { cn } from "@/lib/utils";
import { getOrders } from "@/lib/api/server-action/order";
import { convertToNumberDb } from "@/lib/utils/format-currency";
import { addReturnGoods } from "@/lib/api/server-action/return_goods";

export default function ReturnGoodsClient({ decode }) {
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            order: {},
            products: []
        }
    });

    const watchOrder = form.watch("order");
    const selectedOrder = watchOrder?.id;

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: orders } = await getOrders(decode?.decode?.id, "fulfilled");

            if (!orders?.success) {
                setError(`${status},${orders?.message}`);
                setLoading(false);
                return;
            }

            const dataOrders = orders?.data?.orders;

            form.reset({
                order: {
                    ...dataOrders[0] || {},
                    bank_info: ""
                },
                products: []
            });
            
            setOrders(dataOrders);
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        form.setValue("products", []);
    }, [watchOrder]);

    const onSubmit = async (data) => {
        if (submitting) return;

        const order = data?.order;
        const products = data?.products;

        if (products?.length === 0) {
            toast.warning("Vui lòng chọn sản phẩm muốn hoàn trả!");
            return;
        }

        if (order?.payment_method === "cod" && !order?.bank_info) {
            toast.warning("Vui lòng cung cấp thông tin chuyển khoản!");
            return;
        }

        // Tạo trước thông tin return goods
        const return_goods = {
            account_id: order?.account_id,
            full_name: order?.full_name,
            phone_number: order?.phone_number,
            address: order?.address,
            payment_method: order?.payment_method,
            bank_info: order?.bank_info || null,
            payment_intent_id: order?.payment_intent_id || null,
            reject_message: null,
            status: "pending",
            refund_amount: 0,
            is_refunded: false
        }

        // Tính refund_amount
        products.forEach(product => {
            const { price, price_discount, return_quantity } = product;
            const { coupon_code, discount_type, discount_amount, total_order } = order;

            // Bước 1: Tính giá hoàn trả cơ bản (chưa xét coupon)
            const defindPrice = price_discount 
                ? convertToNumberDb(price_discount)
                : convertToNumberDb(price);

            let refund = defindPrice * return_quantity

            // Bước 2: Kiểm tra đơn có dùng coupon
            if (coupon_code) {
                const totalOrder = convertToNumberDb(total_order);
                const discountAmount = convertToNumberDb(discount_amount);

                // Bước 3: Xác định loại giảm giá
                if (discount_type === "amount") {
                    const ratio = refund / totalOrder;
                    const refundCouponAmount = discountAmount * ratio;
                    refund -= refundCouponAmount;
                }
                else if (discount_type === "percent") {
                    const refundCouponAmount = refund * (discountAmount / 100);
                    refund -= refundCouponAmount;
                }
            }

            return_goods.refund_amount += refund;
        });

        // Chuẩn bị dữ liệu cho return goods items
        const return_goods_items = products.map(product => {
            const { product_id, variant_id, product_name, image, color, code_color, size, size_desc, return_quantity, message, cost_price, price_discount, price } = product;

            return {
                product_id,
                variant_id,
                product_name,
                image,
                color,
                code_color,
                size,
                size_desc,
                return_quantity,
                cost_price,
                message,
                price_discount,
                price,
                sub_total: price_discount ?
                    convertToNumberDb(price_discount) * +return_quantity :
                    convertToNumberDb(price) * +return_quantity
            }
        });

        // Tạo FormData
        const formData = new FormData();
        formData.append("return_goods", JSON.stringify(return_goods));
        formData.append("return_goods_items", JSON.stringify(return_goods_items));

        products.forEach((product, index) => {
            const imgs = product.proof_imgs || [];

            imgs.forEach((file, imgIndex) => {
                formData.append(`proof_imgs[${imgIndex}][${product?.product_id}]`, file);
            });
        });

        // --------------------------------------------------------------------------------
        // --------------------------------------------------------------------------------

        setSubmitting(true);

        const result = await addReturnGoods(formData);
        const message = result?.message;

        if (result?.success) {
            toast.success(message);
            router.push("/ho-so/tra-hang");
        }
        else toast.error(message);

        setSubmitting(false);
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[30px]">
            <header className="space-y-[5px]">
                <h1 className="text-[24px] font-semibold">Trả hàng</h1>
                <p className="text-[14px] md:text-[16px] text-darkBland font-medium">Chúng tôi sẽ phản hồi yêu cầu đổi trả trong tối đa 3 ngày. Mong bạn kiên nhẫn đợi thông báo!</p>
            </header>
            
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={cn(
                        "",
                        (decode?.success) ? "flex items-start gap-[20px]" : ""
                    )}
                >
                    <ReturnGoodsOrder
                        form={form}
                        orders={orders}
                    />

                    <div className="w-[60%] space-y-[15px]">
                        {
                            watchOrder?.id ?
                            (
                                <div className="space-y-[30px]">
                                    <div className="flex items-center justify-between">
                                        <p className="w-fit text-[13px] text-white font-medium px-[15px] py-[5px] rounded-full bg-blueChecked">Đơn hàng {watchOrder?.id}</p>
                                    
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            className="shrink-0 w-fit text-darkMedium font-medium gap-[10px]"
                                            onClick={() => {
                                                form.setValue("order", {})
                                            }}
                                        >
                                            Đổi đơn hàng
                                            <FaArrowRotateLeft size={15} />
                                        </Button>
                                    </div>

                                    <div>
                                        <p className="text-[14px] font-medium text-darkBland text-center">Vui lòng chọn sản phẩm bạn muốn hoàn trả.</p>

                                        <CustomTable
                                            data={watchOrder?.order_items || []}
                                            columns={columns}
                                            enableExpandRow={true}
                                            moreData={{
                                                form
                                            }}
                                        />
                                    </div>
                                </div>
                            ) :
                            <div className="p-[20px] border rounded-[10px]">
                                <p className="text-[15px] text-darkMedium text-center font-medium">Vui lòng chọn đơn hàng để tiếp tục.</p>
                            </div>
                        }

                        {
                            watchOrder?.payment_method === "cod" &&
                            <FormField
                                control={form.control}
                                name="order.bank_info"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <div className="space-y-[5px]">
                                                <FormLabel>Thông tin chuyển khoản</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Số tài khoản - Ngân hàng . . . "
                                                        className="px-[15px] py-[20px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                        </FormItem>
                                    )
                                }}
                            />
                        }

                        {
                            selectedOrder &&
                            (
                                <Button
                                    className="w-full bg-yellowBold hover:bg-yellowBold hover:opacity-90"
                                    disabled={submitting}
                                >
                                    { submitting ? "Đang gửi yêu cầu" : "Gửi yêu cầu" }
                                </Button>
                            )
                        }
                    </div>
                </form>
            </Form>
        </section>
    )
}
