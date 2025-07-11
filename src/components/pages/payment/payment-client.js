"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import Error from "@/components/customs/error";
import PaymentBookAddress from "./payment-book-address";
import MainLoading from "@/components/customs/main-loading";
import CustomTable from "@/components/customs/admin/custom-table";
import PaymentCoupon from "@/components/pages/payment/payment-coupon";
import PaymentMethod from "@/components/pages/payment/payment-method";
import PaymentMessage from "@/components/pages/payment/payment-message";
import PaymentSummary from "@/components/pages/payment/payment-summary";

import { Form } from "@/components/ui/form";
import { TooltipProvider } from "@/components/ui/tooltip";

import { toast } from "sonner";
import calcPrice from "@/lib/utils/calc-price";
import { createOrder } from "@/lib/api/server-action/order";
import paymentProductColumns from "./payment-product-columns";
import { getBookAddresses } from "@/lib/api/server-action/book-address";
import { getReservedOrder } from "@/lib/api/server-action/reserved_order";
import { resetCartItemIds } from "@/redux/slices/cart-products/cart-item-ids-slice";

export default function PaymentClient({
    params,
    userInfo
}) {
    const router = useRouter();
    const dispatch = useDispatch()

    const [reservedOrderInfo, setReservedOrderInfo] = useState({});
    const [bookAddresses, setBookAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState(false);

    const { reserved_order, coupons, totalOrder } = reservedOrderInfo;

    const form = useForm({
        defaultValues: {
            address: {},
            products: [],
            coupon: {},
            message: "",
            paymentMethod: "cod",
            paymentStripe: {
                stripe: null,
                elements: null,
                clientSecret: null
            }
        }
    });

    const watchProducts = form.watch("products");

    useEffect(() => {
        (async () => {
            const [reservedOrderRes, bookAddressesRes] = await Promise.all([
                getReservedOrder(userInfo?.id, params?.reservedOrderId),
                getBookAddresses(userInfo?.id)
            ]);

            const { status: reservedOrderStatus, result: reservedOrderData } = reservedOrderRes;
            const { status: bookAddressesStatus, result: bookAddressesData } = bookAddressesRes;

            if (!reservedOrderData?.success || !bookAddressesData?.success) {
                if (!reservedOrderData?.success) {
                    setError(`${reservedOrderStatus},${reservedOrderData?.message}`);
                    setLoading(false);
                    return;
                }
                if (!bookAddressesData?.success || !bookAddressesData?.data) {
                    setError(`${bookAddressesStatus},${bookAddressesData?.message}`);
                    setLoading(false);
                    return;
                }
            }
            
            setReservedOrderInfo(reservedOrderData?.data);
            setBookAddresses(bookAddressesData?.data?.book_addresses);

            form.setValue("address", bookAddressesData?.data?.book_addresses?.find(address => address?.default_address) || {});
            form.setValue("products", reservedOrderData?.data?.reserved_order?.reserved_order_items || []);
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (reserved_order?.is_paid) {
            router.push('/gio-hang');
        }
    }, [reserved_order]);

    const onSubmit = async (data) => {
        const stripe = data?.paymentStripe?.stripe;
        const elements = data?.paymentStripe?.elements;
        const clientSecret = data?.paymentStripe?.clientSecret;

        if (submitting) return;
        setSubmitting(true);

        if (!data?.address?.id) {
            setSubmitting(false);
            toast.warning("Vui lòng chọn địa chỉ bạn muốn giao hàng!");
            return;
        }

        if (data?.paymentMethod === "stripe") {
            if (!stripe || !elements || !clientSecret) return;
            const { error: formError } = await elements.submit();
            if (formError) {
                setSubmitting(false);
                return;
            }
        }

        const order = await createOrder({
            reserved_order_id: reserved_order?.id,
            user: data?.address,
            products: data?.products?.map(prod => {
                const { cost_price, interest_rate, general_discount, discount_amount, discount_type } = prod?.product;

                const isDiscount = ((discount_amount && discount_type) || general_discount);

                const beforeDiscountPrice = calcPrice(cost_price, interest_rate, null, null);
                const price = isDiscount ?
                general_discount ?
                calcPrice(cost_price, interest_rate, general_discount?.discount_type, general_discount?.discount_amount) :
                calcPrice(cost_price, interest_rate, discount_type, discount_amount) :
                calcPrice(cost_price, interest_rate, null, null);

                return {
                    ...prod,
                    price: beforeDiscountPrice,
                    cost_price: cost_price,
                    ...(isDiscount && { price_discount: price })
                }
            }),
            ...(data?.coupon?.id && { coupon: data?.coupon }),
            ...(
                data?.message &&
                {message: data?.message}
            ),
            totalOrder: totalOrder,
            ...(
                data?.coupon?.id &&
                {totalOrderDiscount: calcPrice(totalOrder, 0, data?.coupon?.discount_type, data?.coupon?.discount_price)}
            ),
            paymentMethod: data?.paymentMethod,
            paymentIntentId: clientSecret?.split("_secret")?.[0]
        });
        
        if (order?.success) {
            const productIds = watchProducts?.map(reservedOrderItem => {
                return reservedOrderItem?.product?.id || "";
            });
            dispatch(resetCartItemIds(productIds));

            if (data?.paymentMethod === "cod") {
                router.push("/ho-so/don-hang");
                return;
            }
        }
        if (!order?.success) {
            setSubmitting(false);
            toast.error(order?.message); 
            return;
        }
        
        if (data?.paymentMethod === "stripe") {
            const { error } = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: window.location.origin + "/ho-so/don-hang",
                }
            });

            if (error) {
                console.log(error);

                setSubmitting(false);
                toast.error(error.message);
                return;
            }
        }

        setSubmitting(false);
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />
    if (reserved_order?.is_paid) return <></>

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <header className="flex items-center gap-[15px] mb-[20px]">
                    <p className="hidden sm:block text-[16px] md:text-[18px] font-semibold">MinimalNest</p>
                    <span className="hidden sm:block self-stretch my-[4px] w-[3px] rounded-full bg-yellowBold" />
                    <h1 className="text-[20px] md:text-[24px] font-semibold">Thanh toán</h1>
                </header>

                <div className="relative flex flex-col xl:flex-row items-start gap-[20px]">
                    <div className="space-y-[50px] w-full">
                        <PaymentBookAddress
                            form={form}
                            bookAddresses={bookAddresses}
                        />
                        
                        <TooltipProvider>
                            <CustomTable
                                data={form.watch("products")}
                                columns={paymentProductColumns}
                            />
                        </TooltipProvider>

                        <PaymentCoupon
                            form={form}
                            coupons={coupons}
                        />

                        <PaymentMessage
                            form={form}
                        />

                        <PaymentMethod
                            form={form}
                            totalOrder={totalOrder}
                        />
                    </div>

                    <PaymentSummary
                        form={form}
                        totalOrder={totalOrder}
                        submitting={submitting}
                    />
                </div>
            </form>
        </Form>
    )
}