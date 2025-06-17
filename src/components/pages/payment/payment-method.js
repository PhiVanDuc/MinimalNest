"use client"

import { useEffect, useState } from "react";
import PaymentStripe from "./payment-stripe";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormField, FormLabel, FormItem } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";

import { BiLogoStripe } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import calcPrice from "@/lib/utils/calc-price";

export default function PaymentMethod({
    form,
    totalOrder
}) {
    const [accordionValue, setAccordionValue] = useState("");

    const watchValue = form.watch("paymentMethod");
    const watchCoupon = form.watch("coupon");

    useEffect(() => {
        let timeout;

        if (watchValue === "stripe") {
            timeout = setTimeout(() => {
                setAccordionValue("details")
            }, 100)
        } else {
            setAccordionValue("")
        }

        return () => clearTimeout(timeout)
    }, [watchValue])

    return (
        <div className="space-y-[20px]">
            <h2 className="text-[16px] md:text-[18px] font-semibold">Phương thức thanh toán</h2>

            <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => {
                    return (
                        <RadioGroup
                            defaultValue={field?.value}
                            onValueChange={field.onChange}
                            className="rounded-[10px] border"
                        >
                            <FormItem>
                                <FormLabel className="border-b flex items-center gap-[20px] p-[20px] cursor-pointer">
                                    <FormControl>
                                        <RadioGroupItem value="cod" />
                                    </FormControl>

                                    <div className="flex items-center gap-[10px]">
                                        <div className="w-[26px]"><FaShippingFast size={26} className="text-darkMedium" /></div>
                                        <p className="text-[14px] font-medium">Thanh toán khi nhận hàng (COD)</p>
                                    </div>
                                </FormLabel>
                            </FormItem>

                            <FormItem>
                                <FormLabel className="border-b flex items-center gap-[20px] p-[20px] cursor-pointer">
                                    <FormControl>
                                        <RadioGroupItem value="stripe" />
                                    </FormControl>

                                    <div className="flex items-center gap-[10px]">
                                        <div className="flex justify-center w-[26px]"><BiLogoStripe size={26} className="text-darkMedium" /></div>
                                        <p className="text-[14px] font-medium">Visa, Mastercard, v.v</p>
                                    </div>
                                </FormLabel>

                                {
                                    watchValue === "stripe" && (
                                        <Accordion
                                            type="single"
                                            collapsible
                                            value={accordionValue}
                                        >
                                            <AccordionItem
                                                value="details"
                                            >
                                                <AccordionContent className="p-[20px] text-[14px] text-darkMedium space-y-[10px]">
                                                    <PaymentStripe
                                                        form={form}
                                                        totalOrder={calcPrice(totalOrder, 0, watchCoupon?.discount_type, watchCoupon?.discount_amount)}
                                                    />
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    )
                                }
                            </FormItem>
                        </RadioGroup>
                    )
                }}
            />
        </div>
    )
}
