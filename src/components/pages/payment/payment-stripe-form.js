"use client"

import { useEffect } from "react";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { createPaymentIntent } from "@/lib/api/server-action/payment";
import { toast } from "sonner";

export default function PaymentStripeForm({
    form,
    totalOrder
}) {
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        (async () => {
            const paymentIntent = await createPaymentIntent(totalOrder);
            
            if (paymentIntent?.success) form.setValue("paymentStripe.clientSecret", paymentIntent?.data?.client_secret);
            else toast.error(paymentIntent?.message);
        })();
    }, [totalOrder]);

    useEffect(() => {
        if (stripe && elements) {
            form.setValue("paymentStripe.stripe", stripe);
            form.setValue("paymentStripe.elements", elements);
        }
    }, [stripe, elements]);

    return (
        <>
            { form.watch("paymentStripe.clientSecret") && <PaymentElement /> }
        </>
    )
}
