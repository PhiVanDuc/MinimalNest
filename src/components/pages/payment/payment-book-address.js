"use client"

import { useRouter } from "next/navigation";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";

export default function PaymentBookAddress({
    form,
    bookAddresses
}) {
    const router = useRouter();
    const watchAddress = form.watch("address");

    const handleChangeAddress = (field, value) => {
        const address = bookAddresses.find(address => address?.id === value);
        field?.onChange(address);
    }

    return (
        <section>
            <Accordion
                type="single"
                collapsible
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger
                        className="w-full border p-[20px] rounded-[10px] text-[16px] font-medium"
                    >
                        Chọn địa chỉ
                    </AccordionTrigger>

                    <AccordionContent
                        className="p-0 pt-[10px]"
                    >
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormControl>
                                            <RadioGroup
                                                defaultValue={watchAddress?.id}
                                                onValueChange={(value) => { handleChangeAddress(field, value) }}
                                                className="gap-[0px] gap-y-[10px]"
                                            >
                                                {
                                                    bookAddresses?.length > 0 ?
                                                    bookAddresses?.map(address => {
                                                        return (
                                                            <FormItem
                                                                key={address?.id}
                                                            >
                                                                <FormLabel className="flex items-center justify-between gap-[20px] p-[20px] border rounded-[10px] cursor-pointer">
                                                                    <div className="space-y-[5px]">
                                                                        <div className="flex flex-wrap items-center gap-[10px]">
                                                                            <p className="text-[16px] font-semibold">{address?.full_name}</p>

                                                                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />

                                                                            <p className="text-[15px] font-medium text-darkMedium">{address?.phone_number}</p>
                                                                        </div>

                                                                        <p className="text-[14px] md:text-[15px] leading-[22px] text-darkMedium">{address?.address}</p>
                                                                    </div>

                                                                    <FormControl>
                                                                        <RadioGroupItem value={address?.id} />
                                                                    </FormControl>
                                                                </FormLabel>
                                                            </FormItem>
                                                        )
                                                    }) :
                                                    (
                                                        <div className="p-[20px] border rounded-[10px] flex flex-col items-center text-center space-y-[10px]">
                                                            <p className="text-[16px] font-medium">Bạn chưa có địa chỉ.</p>
                                                            <p className="text-darkMedium">Vui lòng truy cập hồ sơ người dùng - sổ địa chỉ để thêm địa chỉ.</p>

                                                            <Button
                                                                type="button"
                                                                className="bg-yellowBold hover:bg-yellowBold hover:opacity-90 transition-opacity"
                                                                onClick={() => { router.push("/ho-so/so-dia-chi"); }}
                                                            >
                                                                Thêm địa chỉ
                                                            </Button>
                                                        </div>
                                                    )
                                                }
                                            </RadioGroup>
                                        </FormControl>
                                    </FormItem>
                                )
                            }}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {
                watchAddress?.id &&
                (
                    <div className="space-y-[10px] mt-[20px]">
                        <div className="space-y-[5px]">
                            <h3 className="text-[18px] font-semibold">Địa chỉ</h3>
                            <p className="text-[14px] font-medium text-darkBland">Hàng sẽ được gửi đến địa chỉ bạn đã chọn bên dưới.</p>
                        </div>

                        <div className="border rounded-[10px] p-[20px]">
                            <div className="space-y-[5px]">
                                <div className="flex flex-wrap items-center gap-[10px]">
                                    <p className="text-[16px] font-semibold">{watchAddress?.full_name}</p>
                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                    <p className="text-[15px] font-medium text-darkMedium">{watchAddress?.phone_number}</p>
                                </div>

                                <p className="text-[14px] md:text-[15px] font-medium text-darkMedium leading-[22px]">{watchAddress?.address}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
}