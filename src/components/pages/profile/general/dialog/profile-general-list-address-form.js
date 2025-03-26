"use client"

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { displayAddForm, displayEditForm, displayListForm } from "@/redux/slices/address-dialog/address-dialog-slice";

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
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CustomButton from "@/components/customs/custom-button";

import { FiEdit2 } from "react-icons/fi";
import { PlusIcon } from "lucide-react";
import { HiOutlineSave } from "react-icons/hi";

export default function ProfileGeneralListAddressForm() {
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            defaultAddress: "address 1",
        }
    });

    const handleSubmit = (values) => {}

    return (
        <>
            <DialogHeader className="px-[24px]">
                <DialogTitle>Địa chỉ của bạn</DialogTitle>
                <DialogDescription>Thêm, chọn, sửa đổi dịa chỉ của bạn tại đây</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[500px] px-[24px] rounded-lg">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-[20px]"
                    >
                        <FormField
                            control={form.control}
                            name="defaultAddress"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <RadioGroup
                                            defaultValue={field.value}
                                            onValueChange={field.onChange}
                                            className="space-y-[10px]"
                                        >
                                            <FormItem className="overflow-hidden">
                                                <FormLabel className="flex items-center gap-[20px] text-[15px] text-darkBold font-normal p-[15px] rounded-[15px] hover:bg-neutral-100 transition-colors duration-300 cursor-pointer overflow-hidden border">
                                                    <FormControl>
                                                        <RadioGroupItem value="address 1" />
                                                    </FormControl>

                                                    <div className="space-y-[10px] overflow-hidden">
                                                        <div className="flex items-center justify-between gap-x-[10px] overflow-hidden">
                                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[5px] sm:gap-[10px] overflow-hidden">
                                                                <div className="flex items-center gap-[10px]">
                                                                    <p className="text-[15px] sm:text-[16px] font-medium truncate">Phí Văn Đức</p>
                                                                    <span className="inline-block w-[3px] self-stretch rounded-full bg-yellowBold" />
                                                                </div>
                                                                <p className="text-[13px] sm:text-[14px] text-darkMedium font-medium truncate">0328895451</p>
                                                            </div>

                                                            <div
                                                                className="w-[30px] h-[30px] shrink-0 flex items-center justify-center rounded-full hover:bg-yellowBold/20 transition-colors duration-300 cursor-pointer"
                                                                onClick={() => {
                                                                    dispatch(displayEditForm(true));
                                                                    dispatch(displayListForm(false));
                                                                }}
                                                            >
                                                                <FiEdit2 className="text-[18px] text-yellowBold" />
                                                            </div>
                                                        </div>

                                                        <p className="text-[13px] sm:text-[14px] text-darkMedium leading-[22px] truncate-text">Số Nhà 1-D1, Tổ Dân Phố Số 5, Phố Bạch Thái Bưởi Phường Phúc La, Quận Hà Đông, Hà Nội.</p>
                                                    </div>
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormItem>
                                )
                            }}
                        />

                        <div
                            className="flex flex-col sm:flex-row items-center gap-[10px]"
                            style={{
                                marginTop: "30px"
                            }}
                        >
                            <CustomButton
                                type="button"
                                icon={<PlusIcon size={20} />}
                                className="bg-darkBold py-[20px] sm:py-[22px] w-full sm:w-fit"
                                onClick={() => {
                                    dispatch(displayAddForm(true));
                                    dispatch(displayListForm(false));
                                }}
                            >
                                Thêm địa chỉ
                            </CustomButton>

                            <CustomButton
                                variant="ghost"
                                className="py-[20px] sm:py-[22px] text-darkBold w-full sm:w-fit"
                                icon={<HiOutlineSave size={20} />}
                            >
                                Lưu
                            </CustomButton>
                        </div>
                    </form>
                </Form>
            </ScrollArea>
        </>
    )
}