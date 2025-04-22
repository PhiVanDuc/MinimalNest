"use client"

import Image from "next/image";

import { BiLogoStripe } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function OrderDetailPayment() {
    return (
        <div className="space-y-[20px]">
            <h2 className="text-[16px] md:text-[18px] font-semibold">Phương thức thanh toán</h2>

            <RadioGroup
                defaultValue="item 1"
                className="rounded-[10px] border"
            >
                <label className="border-b flex items-center gap-[20px] p-[20px] cursor-not-allowed">
                    <RadioGroupItem
                        value="item 1"
                        disabled={true}
                    />

                    <div className="flex items-center gap-[10px]">
                        <div className="w-[26px]"><FaShippingFast size={26} className="text-darkMedium" /></div>
                        <p className="text-[14px] font-medium">Thanh toán khi nhận hàng (COD)</p>
                    </div>
                </label>

                <label className="border-b flex items-center gap-[20px] p-[20px] cursor-not-allowed">
                    <RadioGroupItem
                        value="item 3"
                        disabled={true}
                    />

                    <div className="flex items-center gap-[10px]">
                        <div className="flex justify-center w-[26px]"><BiLogoStripe size={26} className="text-darkMedium" /></div>
                        <p className="text-[14px] font-medium">Visa, Mastercard, v.v</p>
                    </div>
                </label>

                <label className="flex items-center gap-[20px] p-[20px] cursor-not-allowed">
                    <RadioGroupItem
                        value="item 2"
                        disabled={true}
                    />

                    <div className="flex items-center gap-[10px]">
                        <div className="w-[26px]">
                            <Image
                                src="/momo_icon.png"
                                alt="Momo icon"
                                width={26}
                                height={26}
                                className="w-[26px] aspect-square object-cover object-center"
                            />
                        </div>
                        <p className="text-[14px] font-medium">Ví Momo</p>
                    </div>
                </label>
            </RadioGroup>
        </div>
    )
}
