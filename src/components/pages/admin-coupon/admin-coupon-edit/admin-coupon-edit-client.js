"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
} from "@/components/ui/form";

import AdminCouponEditEvent from "./admin-coupon-edit-event";
import AdminCouponEditGeneral from "./admin-coupon-edit-general";
import AdminCouponEditCondition from "./admin-coupon-edit-condition";

import couponSchema from "@/lib/schemas/coupon-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { convertToNumber, convertToNumberDb } from "@/lib/utils/format-currency";
import { editCoupon } from "@/lib/api/server-action/coupon";
import { toast } from "sonner";

export default function AdminCouponEditClient({ events, coupon, couponId }) {
    const [submitting, setSubmitting] = useState();

    const form = useForm({
        resolver: zodResolver(couponSchema),
        defaultValues: {
            event: coupon?.event || {},
            code: coupon?.code || "",
            desc: coupon?.desc || "",
            discountType: coupon?.discount_type || "amount",
            conditions: ["login"],
            discountPrice: `${convertToNumberDb(coupon?.discount_price || "0")}`,
            minOrderTotal: `${convertToNumberDb(coupon?.min_order_total || "0")}`,
            minItems: `${coupon?.min_items}` || "0",
            customerType: coupon?.customer_type || "all",
            quantity: `${coupon?.quantity}` || "0"
        }
    });

    console.log(coupon);

    const onSubmit = async (data) => {
        setSubmitting(true);

        const newData = {
            ...data,
            discountPrice: convertToNumber(data?.discountPrice),
            minOrderTotal: convertToNumber(data?.minOrderTotal),
            minItems: convertToNumber(data?.minItems),
            quantity: convertToNumber(data?.quantity),
        };

        const coupon = await editCoupon(newData, couponId);
        const message = coupon?.message;

        if (coupon?.success) toast.success(message);
        else toast.error(message); 

        setSubmitting(false);
    }

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Chỉnh sửa phiếu giảm giá</h2>
            </header>

            <Form {...form}>
                <form
                    className="space-y-[20px]"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <AdminCouponEditEvent form={form} events={events} />
                    <AdminCouponEditGeneral form={form} />
                    <AdminCouponEditCondition form={form} submitting={submitting} />
                </form>
            </Form>
        </section>
    )
}
