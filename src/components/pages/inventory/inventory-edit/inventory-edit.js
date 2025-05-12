"use client"

import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InventoryEdit({ open, setOpen }) {
    const form = useForm({
        defaultValues: {
            sku: "TEST-XXL-000000",
            quantity: "80"
        }
    });

    return (
        <Dialog
            open={open}
            onOpenChange={(isOpen) => { setOpen(isOpen); }}
        >
            <DialogContent className="gap-[30px] px-0">
                <DialogHeader className="px-[24px]">
                    <DialogTitle>Chỉnh sửa</DialogTitle>
                    <DialogDescription>Chỉnh sửa số lượng hoặc mã sku của sản phẩm.</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        className="px-[24px] space-y-[20px]"
                    >
                        <FormField
                            control={form.control}
                            name="sku"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Mã SKU</FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập mã sku cho sản phẩm . . ."
                                                    className="px-[20px] py-[12px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                    </FormItem>
                                )
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Số lượng</FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập mã số lượng cho sản phẩm . . ."
                                                    className="px-[20px] py-[12px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                    </FormItem>
                                )
                            }}
                        />

                        <Button className="w-full">Lưu thay đổi</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
