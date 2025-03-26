"use client"

import { useForm } from "react-hook-form";
import CustomButton from "@/components/customs/custom-button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";

import { FiTrash } from "react-icons/fi";
import { Input } from "@/components/ui/input";

export default function ProfileGeneralDeleteAccount() {
    const form = useForm({
        defaultValues: {
            confirmDelete: ""
        }
    });

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="sm:flex items-center justify-between gap-[20px] space-y-[20px] sm:space-y-0">
            <div className="space-y-[5px]">
                <h2 className="text-[18px] md:text-[20px] text-darkBold font-semibold">Xóa tài khoản</h2>
                <p className="text-[14px] md:text-[15px] font-medium text-darkMedium">Xóa tài khoản vĩnh viễn và không thể khôi phục. Bạn có chắc không?</p>
            </div>

            <Dialog>
                <DialogTrigger className="w-fit shrink-0">
                    <div
                        className="flex items-center gap-x-[15px] py-[15px] px-[18px] text-[14px] font-semibold text-white bg-red-500 hover:bg-red-500 hover:opacity-80 transition duration-300 rounded-[10px]"
                    >
                        <p className="shrink-0">Xóa tài khoản</p>
                        <FiTrash size={20} className="shrink-0" />
                    </div>
                </DialogTrigger>
                
                <DialogContent className="gap-[30px]">
                    <DialogHeader>
                        <DialogTitle>Xóa tài khoản</DialogTitle>
                        <DialogDescription>Sau khi xóa tài khoản, bạn không thể khôi phục lại tài khoản nữa.</DialogDescription>
                    </DialogHeader>

                    <Form { ...form }>
                        <form
                            className="space-y-[10px]"
                            onSubmit={form.handleSubmit(handleSubmit)}
                            autoComplete="off"
                        >
                            <FormField
                                control={form.control}
                                name="confirmDelete"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="space-y-[10px]">
                                            <FormLabel className="inline-block w-full text-center text-[15px] text-darkBold font-darkBold">
                                                Để xác nhận, nhập <span className="font-semibold text-yellowBold">Mã của tài khoản</span> vào ô nhập bên dưới.
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập đoạn mã xác nhận . . ."
                                                    className="rounded-[10px] border border-darkBland px-[15px] py-[22px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />

                            <div className="text-right">
                                <CustomButton
                                    icon={<FiTrash size={18} />}
                                    className="py-[20px] px-[18px] bg-red-500 hover:bg-red-500 hover:opacity-80"
                                >
                                    Xác nhận
                                </CustomButton>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}