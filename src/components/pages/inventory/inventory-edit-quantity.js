"use client"

import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function InventoryEditQuantity({ data }) {
    const form = useForm({
        defaultValues: {
            quantity: 80
        }
    });

    const obSubmit = async (data) => {};

    return (
        <Form {...form}>
            <form
                className="w-full space-y-[20px]"
                onSubmit={form.handleSubmit(obSubmit)}
            >
                <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <div className="space-y-[5px]">
                                    <FormLabel>Số lượng</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập số lượng sản phẩm . . ."
                                            className="px-[15px] py-[20px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )
                    }}
                />

                <Button className="w-full">Lưu thay đổi</Button>
            </form>
        </Form>
    )
}
