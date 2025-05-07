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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function AdminOrderCancel({ open, setOpen }) {
    const form = useForm({
        defaultValues: {
            orders: Array.from({ length: 2 }).map((_, index) => ({ idOrder: `#0000${index}`, reason: "" }))
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

                <ScrollArea className="max-h-[500px] px-[24px]">
                    <div className="space-y-[25px]">
                        <Form {...form}>
                            <form
                                className="space-y-[20px]"
                            >
                                {
                                    fields.map((field, index) => {


                                        return (
                                            <div
                                                key={field.id}
                                                className="bg-neutral-50 rounded-[10px] border"
                                            >
                                                <p className="flex justify-between p-[15px]">
                                                    <span className="text-[15px] font-semibold">Đơn hàng</span>
                                                    <span className="text-[15px] text-darkMedium font-medium">{field.idOrder}</span>
                                                </p>

                                                <Separator />

                                                <FormField
                                                    control={form.control}
                                                    name={`orders.${index}.reason`}
                                                    render={({ field: f }) => {
                                                        return (
                                                            <FormItem className="p-[15px] rounded-tl-[10px] rounded-tr-[10px]">
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
                                        )
                                    })
                                }

                                <Button className="w-full">Hủy đơn</Button>
                            </form>
                        </Form>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
