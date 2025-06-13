"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
} from "@/components/ui/form";

import AdminCouponAddEvent from "./admin-coupon-add-event";
import AdminCouponAddGeneral from "./admin-coupon-add-general";
import AdminCouponAddCondition from "./admin-coupon-add-condition";

import couponSchema from "@/lib/schemas/coupon-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { convertToNumber } from "@/lib/utils/format-currency";
import { addCoupon } from "@/lib/api/server-action/coupon";
import { toast } from "sonner";

export default function AdminCouponAddClient({ events }) {
    const [submitting, setSubmitting] = useState();

    const form = useForm({
        resolver: zodResolver(couponSchema),
        defaultValues: {
            event: {},
            code: "",
            desc: "",
            discountType: "amount",
            conditions: ["login"],
            discountPrice: "0",
            minOrderTotal: "0",
            minItems: "0",
            customerType: "all",
            quantity: "0"
        }
    });

    const onSubmit = async (data) => {
        setSubmitting(true);

        const newData = {
            ...data,
            discountPrice: convertToNumber(data?.discountPrice),
            minOrderTotal: convertToNumber(data?.minOrderTotal),
            minItems: convertToNumber(data?.minItems),
            quantity: convertToNumber(data?.quantity),
        };

        const coupon = await addCoupon(newData);
        const message = coupon?.message;

        if (coupon?.success) toast.success(message);
        else toast.error(message); 

        setSubmitting(false);
    }

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Thêm phiếu giảm giá</h2>
            </header>

            <Form {...form}>
                <form
                    className="space-y-[20px]"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <AdminCouponAddEvent form={form} events={events} />
                    <AdminCouponAddGeneral form={form} />
                    <AdminCouponAddCondition form={form} submitting={submitting} />
                </form>
            </Form>
        </section>
    )
}
