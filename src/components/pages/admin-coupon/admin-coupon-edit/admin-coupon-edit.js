"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import { Form } from "@/components/ui/form";

import AdminCouponEditEvent from "./admin-coupon-edit-event";
import AdminCouponEditGeneral from "./admin-coupon-edit-general";
import AdminCouponEditCondition from "./admin-coupon-edit-condition";

import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import couponSchema from "@/lib/schemas/coupon-schema";
import { getEvents } from "@/lib/api/server-action/event";
import { getCoupon } from "@/lib/api/server-action/coupon";
import { editCoupon } from "@/lib/api/server-action/coupon";
import { convertToNumber, convertToNumberDb } from "@/lib/utils/format-currency";

export default function AdminCouponEdit({ params }) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
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

    useEffect(() => {
        (async () => {
            const [eventsRes, couponRes] = await Promise.all([
                getEvents({ all: true, isDiscount: true }),
                getCoupon(params?.couponId)
            ]);

            const { status: eventsStatus, result: events } = eventsRes;
            const { status: couponStatus, result: coupon } = couponRes;

            if (!events?.success && !coupon?.success) {
                if (!events?.success) {
                    setError(`${eventsStatus},${events?.message}`);
                    setLoading(false);
                    return;
                }

                if (!coupon?.success) {
                    setError(`${couponStatus},${coupon?.message}`);
                    setLoading(false);
                    return;
                }
            }

            form.reset({
                event: coupon?.data?.coupon?.event || {},
                code: coupon?.data?.coupon?.code || "",
                desc: coupon?.data?.coupon?.desc || "",
                discountType: coupon?.data?.coupon?.discount_type || "amount",
                conditions: ["login"],
                discountPrice: `${convertToNumberDb(coupon?.data?.coupon?.discount_price || "0")}`,
                minOrderTotal: `${convertToNumberDb(coupon?.data?.coupon?.min_order_total || "0")}`,
                minItems: `${coupon?.data?.coupon?.min_items}` || "0",
                customerType: coupon?.data?.coupon?.customer_type || "all",
                quantity: `${coupon?.data?.coupon?.quantity}` || "0"
            });

            setEvents(events?.data?.events);
            setLoading(false);
        })();
    }, []);

    const onSubmit = async (data) => {
        setSubmitting(true);

        const newData = {
            ...data,
            discountPrice: convertToNumber(data?.discountPrice),
            minOrderTotal: convertToNumber(data?.minOrderTotal),
            minItems: convertToNumber(data?.minItems),
            quantity: convertToNumber(data?.quantity),
        };

        const coupon = await editCoupon(newData, params?.couponId);
        const message = coupon?.message;

        if (coupon?.success) toast.success(message);
        else toast.error(message); 

        setSubmitting(false);
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

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
