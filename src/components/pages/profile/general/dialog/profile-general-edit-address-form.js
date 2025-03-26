"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { displayEditForm, displayListForm } from "@/redux/slices/address-dialog/address-dialog-slice";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

import { FiTrash } from "react-icons/fi";

export default function ProfileGeneralEditAddressForm() {
    const form = useForm({
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            basicAddress: "",
            detailAddress: "",
            typeAddress: "",
            defaultAddress: "",
            x: "",
            y: ""
        }
    });

    const dispatch = useDispatch();
    const [countDelete, setCountDelete] = useState(0);

    const handleSubmit = (values) => {
        dispatch(displayEditForm(false));
        dispatch(displayListForm(true));
        toast.success("Thay đổi địa chỉ thành công.");
    }

    const handleDeleteAddress = () => {
        if (countDelete === 0) {
            setCountDelete(countDelete + 1);
            toast.warning("Vui lòng xác nhận ấn xóa 1 lần nữa.");
            return;
        }

        setCountDelete(0);
        // Bắt đầu call api xóa địa chỉ
        dispatch(displayEditForm(false));
        dispatch(displayListForm(true));
        toast.success("Xóa địa chỉ thành công.");
    }

    return (
        <>
            <DialogHeader className="px-[24px]">
                <DialogTitle>Sửa địa chỉ</DialogTitle>
                <DialogDescription>Sửa lại địa chỉ giúp đảm bảo đơn hàng được giao đúng nơi</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[500px] px-[24px] rounded-lg">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="text-darkBold"
                    >
                        <div className="space-y-[10px]">
                            <div className="flex gap-x-[10px]">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập họ và tên . . ."
                                                        className="h-[46px] rounded-[10px] border-darkBland"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập số điện thoại . . ."
                                                        className="h-[46px] rounded-[10px] border-darkBland"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )
                                    }}
                                />  
                            </div>

                            <FormField
                                control={form.control}
                                name="basicAddress"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập Tỉnh/Thành phố, Quận/Huyện, Phường/Xã . . ."
                                                    className="h-[46px] rounded-[10px] border-darkBland"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="detailAddress"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Mô tả chi tiết địa chỉ (nếu cần) . . ."
                                                    className="h-[100px] resize-none py-[15px] rounded-[10px] border-darkBland"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        </div>

                        <div
                            className="space-y-[20px]"
                            style={{
                                marginTop: "20px"
                            }}
                        >
                            {/* Map sẽ ở đây */}
                            <div className="w-full aspect-video rounded-[10px] bg-slate-300" />

                            <FormField
                                control={form.control}
                                name="typeAddress"
                                render={({ field }) => {
                                    return (
                                        <FormItem
                                            className="w-full space-y-[10px]"   
                                        >
                                            <FormLabel>Loại địa chỉ</FormLabel>

                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex items-center gap-x-[20px]"
                                                >
                                                    <FormItem className="flex items-center gap-[10px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="home" />
                                                        </FormControl>

                                                        <FormLabel
                                                            className="text-[14px] font-normal"
                                                        >
                                                            Nhà riêng
                                                        </FormLabel>
                                                    </FormItem>

                                                    <FormItem className="flex items-center gap-[10px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="office" />
                                                        </FormControl>

                                                        <FormLabel
                                                            className="text-[14px] font-normal"
                                                        >
                                                            Văn phòng
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="defaultAddress"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="space-y-[10px]">
                                            <FormLabel>Mặc định</FormLabel>

                                            <div className="flex items-center gap-[10px]">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>

                                                <FormLabel className="font-normal">
                                                    Địa chỉ mặc định
                                                </FormLabel>
                                            </div>
                                        </FormItem>
                                    )
                                }}
                            />

                            <div className="flex items-center gap-[8px]">
                                <Button
                                    className="w-full py-[22px] bg-darkBold rounded-[10px]"
                                >
                                    Lưu địa chỉ
                                </Button>

                                <div
                                    className="flex items-center justify-center self-stretch px-[20px] rounded-[10px] cursor-pointer text-red-500 hover:bg-red-500/10 transition-colors duration-300"
                                    onClick={handleDeleteAddress}
                                >
                                    <FiTrash size={18} />
                                </div>
                            </div>
                        </div>
                    </form>
                </Form>
            </ScrollArea>
        </>
    )
}