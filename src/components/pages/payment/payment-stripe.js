"use client"

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentStripeForm from "./payment-stripe-form";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentStripe({
    form,
    totalOrder
}) {
    const appearance = {
        theme: 'flat',
        variables: {
            fontFamily: ' "Gill Sans", sans-serif',
            fontLineHeight: '1.5',
            borderRadius: '10px',
            colorBackground: '#F6F8FA',
            accessibleColorOnColorPrimary: '#262626'
        },
        rules: {
            '.Block': {
                backgroundColor: 'var(--colorBackground)',
                boxShadow: 'none',
                padding: '12px'
            },
            '.Input': {
                padding: '12px'
            },
            '.Input:disabled, .Input--invalid:disabled': {
                color: 'lightgray'
            },
            '.Tab': {
                padding: '10px 12px 8px 12px',
                border: 'none'
            },
            '.Tab:hover': {
                border: 'none',
                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
            },
            '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
                border: 'none',
                backgroundColor: '#fff',
                boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
            },
            '.Label': {
                fontWeight: '500'
            }
        }
    };

    return (
        <Elements
            stripe={stripePromise}
            options={{
                mode: "payment",
                locale: "vi",
                amount: totalOrder,
                currency: "vnd",
                appearance: appearance
            }}
        >
            <PaymentStripeForm
                form={form}
                totalOrder={totalOrder}
            />
        </Elements>
    )
}
