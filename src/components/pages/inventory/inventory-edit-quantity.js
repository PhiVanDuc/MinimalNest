"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { editInventory } from "@/lib/api/server-action/inventory";
import { convertToNumber } from "@/lib/utils/format-currency";
import { toast } from "sonner";

export default function InventoryEditQuantity({ data }) {
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        defaultValues: {
            total_quantity: data?.total_quantity || 0,
            reserved_quantity: data?.reserved_quantity || 0
        }
    });

    const obSubmit = async (values) => {
        if (submitting) return;
        setSubmitting(true);

        const edit = await editInventory(data?.id, values);
        const message = edit?.message;

        if (edit?.success) toast.success(message);
        else toast.error(message);

        setSubmitting(false);
    };

    return (
        <Form {...form}>
            <form
                className="w-full space-y-[20px]"
                onSubmit={form.handleSubmit(obSubmit)}
            >
                <div className="flex items-start gap-[10px]">
                    <FormField
                        control={form.control}
                        name="total_quantity"
                        render={({ field }) => {
                            return (
                                <FormItem className="w-full">
                                    <div className="space-y-[5px]">
                                        <FormLabel>Tổng số lượng</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nhập số lượng sản phẩm . . ."
                                                className="px-[15px] py-[20px]"
                                                value={convertToNumber(field?.value)}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        <FormDescription>Thay đổi số lượng sản phẩm tại đây.</FormDescription>
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="reserved_quantity"
                        render={({ field }) => {
                            return (
                                <FormItem className="w-full">
                                    <div className="space-y-[5px]">
                                        <FormLabel>Số lượng đặt trước</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nhập số lượng sản phẩm . . ."
                                                className="px-[15px] py-[20px]"
                                                {...field}
                                                disabled={true}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                        <FormDescription>Trường dữ liệu này không thể tương tác.</FormDescription>
                                    </div>
                                </FormItem>
                            )
                        }}
                    />
                </div>

                <div className="text-right">
                    <Button
                        className="bg-yellowBold hover:bg-yellowBold hover:opacity-90 transition-all"
                        disabled={submitting}
                    >
                        {
                            submitting ? "Đang thay đổi . . ." : "Lưu thay đổi"
                        }
                    </Button>
                </div>
            </form>
        </Form>
    )
}
