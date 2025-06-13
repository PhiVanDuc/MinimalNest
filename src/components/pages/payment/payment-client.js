"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import PaymentBookAddress from "./payment-book-address";
import CustomTable from "@/components/customs/admin/custom-table";
import PaymentCoupon from "@/components/pages/payment/payment-coupon";
import PaymentMethod from "@/components/pages/payment/payment-method";
import PaymentMessage from "@/components/pages/payment/payment-message";
import PaymentSummary from "@/components/pages/payment/payment-summary";

import { Form } from "@/components/ui/form";
import { TooltipProvider } from "@/components/ui/tooltip";

import { toast } from "sonner";
import paymentProductColumns from "./payment-product-columns";

export default function PaymentClient({
    bookAddresses,
    reservedOrderInfo
}) {
    const { reserved_order, coupons, totalOrder } = reservedOrderInfo;
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        defaultValues: {
            address: bookAddresses?.find(address => address?.default_address) || {},
            products: reserved_order?.reserved_order_items || [],
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

    const onSubmit = async (data) => {
        const stripe = data?.paymentStripe?.stripe;
        const elements = data?.paymentStripe?.elements;
        const clientSecret = data?.paymentStripe?.clientSecret;

        if (!stripe || !elements || !clientSecret) return;
        if (submitting) return;
        setSubmitting(true);
        
        if (data?.paymentMethod === "other") {
            const { error: formError } = await elements.submit();
            if (formError) {
                setSubmitting(false);
                return;
            }

            const { error } = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: window.location.origin + "/ho-so/don-hang",
                },
                redirect: "if_required"
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