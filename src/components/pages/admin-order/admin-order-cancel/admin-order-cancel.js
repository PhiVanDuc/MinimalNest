"use client"

import { useForm, useFieldArray } from "react-hook-form";

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

import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function AdminOrderCancel({ open, setOpen }) {
    const form = useForm({
        defaultValues: {
            orders: Array.from({ length: 4 }).map((_, index) => ({ idOrder: `#0000${index}`, reason: "" }))
        }
    });

    const { fields } = useFieldArray({
        control: form.control,
        name: "orders",
    });

    return (
        <Dialog
            open={open}
            onOpenChange={(isOpen) => { setOpen(isOpen); }}
        >
            <DialogContent className="gap-[30px] px-[0px]">
                <DialogHeader className="px-[24px]">
                    <DialogTitle>Hủy đơn hàng</DialogTitle>
                    <DialogDescription>Hãy viết lý do bạn hủy đơn của khách hàng.</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form className="space-y-[20px]">
                        <ScrollArea className="max-h-[500px] px-[20px] overflow-y-auto">
                            <div className="space-y-[25px]">
                                {
                                    fields.map((field, index) => {
                                        return (
                                            <div
                                                key={field.id}
                                                className="flex items-stretch gap-[10px]"
                                            >
                                                <div className="shrink-0 w-[5px] rounded-[2px] bg-blueChecked"></div>

                                                <div className="space-y-[15px] w-full">
                                                    <div className="flex items-center justify-between px-[15px] py-[10px] text-[14px] text-blueChecked font-medium rounded-[5px] border bg-blueChecked/10 border-blueChecked">
                                                        <p>Đơn hàng</p>
                                                        <p>#0001</p>
                                                    </div>

                                                    <FormField
                                                        control={form.control}
                                                        name={`orders.${index}.reason`}
                                                        render={({ field: f }) => {
                                                            return (
                                                                <FormItem className="rounded-tl-[10px] rounded-tr-[10px]">
                                                                    <div className="space-y-[5px]">
                                                                        <FormLabel>Lý do</FormLabel>
                                                                        <FormControl>
                                                                            <Textarea
                                                                                placeholder="Vui lòng viết lý do hủy đơn . . ."
                                                                                className="p-[12px] resize-none bg-white h-[100px]"
                                                                                {...f}
                                                                            />
                                                                        </FormControl>
                                                                    </div>
                                                                </FormItem>
                                                            )
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </ScrollArea>

                        <div className="px-[20px]">
                            <Button className="w-full">Hủy đơn</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
