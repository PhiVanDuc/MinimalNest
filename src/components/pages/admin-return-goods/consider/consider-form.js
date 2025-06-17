"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import CustomTable from "@/components/customs/admin/custom-table";

import { Form, FormField, FormLabel, FormItem, FormControl } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";
import columns from "./columns";
import { updateAdminReturnGoods } from "@/lib/api/server-action/return_goods";

export default function ConsiderForm({ returnGoods }) {
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            status: "shipping",
            cancelMessage: ""
        }
    });

    const [submitting, setSubmitting] = useState();

    const onSubmit = async (data) => {
        if (submitting) return;
        setSubmitting(true);

        const result = await updateAdminReturnGoods(data, returnGoods?.id || "");
        const message = result?.message;

        if (result?.success) {
            toast.success(message);
            router.replace("/quan-tri/tra-hang");
        }
        else toast.error(message);

        setSubmitting(false);
    }

    return (
        <Form {...form} >
            <form
                className="w-[65%] p-[20px] rounded-[10px] bg-white"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <CustomTable
                    data={returnGoods?.return_goods_items || []}
                    columns={columns}
                    enableExpandRow={true}
                />

                <div className="space-y-[15px] mb-[15px]">
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => {
                            return ( 
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Xem xét</FormLabel>

                                        <FormControl>
                                            <RadioGroup
                                                defaultValue={field.value}
                                                onValueChange={field.onChange}
                                                className="flex items-center gap-x-[20px]"
                                            >
                                                <FormItem>
                                                    <div className="flex items-center gap-x-[10px]">
                                                        <FormLabel>Cho phép hoàn trả</FormLabel>

                                                        <FormControl>
                                                            <RadioGroupItem value="shipping" />
                                                        </FormControl>
                                                    </div>
                                                </FormItem>

                                                <FormItem>
                                                    <div className="flex items-center gap-x-[10px]">
                                                        <FormLabel>Không cho phép hoàn trả</FormLabel>

                                                        <FormControl>
                                                            <RadioGroupItem value="canceled" />
                                                        </FormControl>
                                                    </div>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    {
                        form.watch("status") === "canceled" &&
                        (
                            <FormField
                                control={form.control}
                                name="cancelMessage"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <div className="space-y-[5px]">
                                                <FormLabel>Lý do</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        {...field}
                                                        className="px-[15px] py-[12px] h-[100px] resize-none"
                                                        placeholder="Vui lòng nhập lý do không cho phép hoàn trả . . ."
                                                    />
                                                </FormControl>
                                            </div>
                                        </FormItem>
                                    )
                                }}
                            />
                        )
                    }
                </div>

                <Button
                    className="w-full"
                    disabled={submitting}
                >
                    { submitting ? "Đang phản hồi" : "Phản hồi" }
                </Button>
            </form>
        </Form>
    )
}
