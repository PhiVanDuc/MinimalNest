"use client"

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentStripeForm from "./payment-stripe-form";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentStripe({
    form,
    totalOrder
}) {
    return (
        <Elements
            stripe={stripePromise}
            options={{
                mode: "payment",
                locale: "vi",
                amount: totalOrder,
                currency: "vnd"
            }}
        >
            <PaymentStripeForm
                form={form}
                totalOrder={totalOrder}
            />
        </Elements>
    )
}
