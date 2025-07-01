"use client"

import { useState } from "react";

import BookAddressDeleteDialog from "./book-address-delete-dialog";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { addBookAddress, editBookAddress } from "@/lib/api/server-action/book-address";

export default function BookAddressForm({
    form,
    userInfo,
    setBookAddressesList
}) {
    const watchId = form.watch("id");

    const [submitting, setSubmitting] = useState(false);
    const [open, setOpen] = useState(false);

    const onSubmit = async (data) => {
        if (submitting) return;
        setSubmitting(true);

        if (watchId) {
            const updatedAddress = await editBookAddress(data, userInfo?.id);
            const message = updatedAddress?.message;

            if (updatedAddress?.success) {
                toast.success(message);

                setBookAddressesList(prev =>
                    prev.map(addr =>
                        addr.id === data.id ? updatedAddress.data.address : addr
                    )
                );

                form.reset();
            }
            else toast.error(message);
        }
        else {
            const newAddress = await addBookAddress(data, userInfo?.id);
            const message = newAddress?.message;

            if (newAddress?.success) {
                toast.success(message);

                setBookAddressesList(prev => [newAddress.data.address, ...prev]);
                form.reset();
            }
            else toast.error(message);
        }

        setSubmitting(false);
    }

    return (
        <>
            <div className="p-[20px] rounded-[10px] border">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-[15px]"
                    >
                        <div className="flex items-start gap-[10px]">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <div className="space-y-[5px]">
                                                <FormLabel>Tên đầy đủ</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập tên đầy đủ . . ."
                                                        className="px-[15px] py-[22px] border-neutral-300 rounded-[10px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                        </FormItem>
                                    );
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <div className="space-y-[5px]">
                                                <FormLabel>Số điện thoại</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập số điện thoại . . ."
                                                        className="px-[15px] py-[22px] border-neutral-300 rounded-[10px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <div className="space-y-[5px]">
                                            <FormLabel>Địa chỉ nhận hàng</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập địa chỉ nhận hàng . . ."
                                                    className="px-[15px] py-[22px] border-neutral-300 rounded-[10px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                    </FormItem>
                                );
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="defaultAddress"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <div className="space-y-[5px]">
                                            <FormLabel>Địa chỉ mặc định</FormLabel>

                                            <FormControl>
                                                <RadioGroup
                                                    defaultValue={String(field.value)}
                                                    onValueChange={(val) => field.onChange(val === "true")}
                                                    className="flex items-center gap-[20px]"
                                                >
                                                    <FormItem className="flex items-center gap-3">
                                                        <FormControl>
                                                            <RadioGroupItem value="true" />
                                                        </FormControl>

                                                        <FormLabel className="font-normal">
                                                            Mặc định
                                                        </FormLabel>
                                                    </FormItem>

                                                    <FormItem className="flex items-center gap-3">
                                                        <FormControl>
                                                            <RadioGroupItem value="false" />
                                                        </FormControl>

                                                        <FormLabel className="font-normal">
                                                            Không mặc định
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </FormItem>
                                )
                            }}
                        />

                        <div className="flex items-center gap-[10px]">
                            <Button
                                className="w-full bg-yellowBold hover:bg-yellowBold hover:opacity-90 transition-opacity"
                                disabled={submitting}
                            >
                                {
                                    watchId ?
                                    submitting ? "Đang lưu . . ." : "Lưu thay đổi" :
                                    submitting ? "Đang thêm . . ." : "Thêm địa chỉ"
                                }
                            </Button>

                            {
                                watchId &&
                                <Button
                                    type="button"
                                    className="w-[200px] bg-transparent hover:bg-transparent border border-red-500 text-red-500 shadow-none"
                                    onClick={() => { setOpen(true); }}
                                >
                                    Xóa
                                </Button>
                            }
                        </div>
                    </form>
                </Form>
            </div>

            <BookAddressDeleteDialog
                open={open}
                setOpen={setOpen}
                form={form}
                addressId={watchId}
                setBookAddressesList={setBookAddressesList}
            />
        </>
    )
}
