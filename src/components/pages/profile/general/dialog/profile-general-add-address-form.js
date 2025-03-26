"use client"

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { displayAddForm, displayListForm } from "@/redux/slices/address-dialog/address-dialog-slice";

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

export default function ProfileGeneralAddAddressForm() {
    const form = useForm({
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            basicAddress: "",
            detailAddress: "",
            x: "",
            y: "",
            typeAddress: "",
            defaultAddress: ""
        }
    });

    const dispatch = useDispatch();
    
    const handleSubmit = (values) => {
        dispatch(displayAddForm(false));
        dispatch(displayListForm(true));
        toast.success("Thêm đổi địa chỉ thành công.");
    }

    return (
        <>
            <DialogHeader className="px-[24px]">
                <DialogTitle>Thêm địa chỉ</DialogTitle>
                <DialogDescription>Bạn sẽ không cần nhập lại địa chỉ khi mua hàng</DialogDescription>
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

                            <Button
                                className="w-full py-[22px] bg-darkBold"
                            >
                                Thêm địa chỉ
                            </Button>
                        </div>
                    </form>
                </Form>
            </ScrollArea>
        </>
    )
}