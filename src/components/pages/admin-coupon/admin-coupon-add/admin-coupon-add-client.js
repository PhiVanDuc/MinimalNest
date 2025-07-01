"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";

import AdminCouponAddEvent from "./admin-coupon-add-event";
import MainLoading from "@/components/customs/main-loading";
import AdminCouponAddGeneral from "./admin-coupon-add-general";
import AdminCouponAddCondition from "./admin-coupon-add-condition";

import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import couponSchema from "@/lib/schemas/coupon-schema";
import { getEvents } from "@/lib/api/server-action/event";
import { addCoupon } from "@/lib/api/server-action/coupon";
import { convertToNumber } from "@/lib/utils/format-currency";

export default function AdminCouponAddClient() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
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
            const { result: events } = await getEvents({ all: true, isDiscount: true });
            if (events?.success) {
                setEvents(events?.data?.events);
            }
            
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

        const coupon = await addCoupon(newData);
        const message = coupon?.message;

        if (coupon?.success) toast.success(message);
        else toast.error(message); 

        setSubmitting(false);
    }

    if (loading) return <MainLoading />

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
