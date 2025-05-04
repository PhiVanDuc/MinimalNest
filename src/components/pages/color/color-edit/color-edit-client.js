"use client"

import { useForm } from "react-hook-form";

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

export default function ColorEditClient() {
    const form = useForm({
        defaultValues: {
            name: "",
            code: "",
            status: "active"
        }
    })

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Chỉnh sửa màu sắc</h2>
            </header>

            <Form {...form}>
                <form
                    className="p-[20px] rounded-[10px] space-y-[20px] bg-white"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Tên màu sắc</FormLabel>

                                        <FormControl>
                                            <Input
                                                className="px-[15px] py-[20px]"
                                                placeholder="Nhập tên màu sắc"
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
                        name="code"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel>Mã màu</FormLabel>

                                        <FormControl>
                                            <Input
                                                className="px-[15px] py-[20px]"
                                                placeholder="Nhập mã màu"
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
                        name="status"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[5px]">
                                        <FormLabel className="text-[15px] font-medium">Trạng thái</FormLabel>

                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex items-center gap-[20px]"
                                            >
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="active" />
                                                        </FormControl>

                                                        <span>Kích hoạt</span>
                                                    </FormLabel>
                                                </FormItem>

                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="inactive" />
                                                        </FormControl>

                                                        <span>Không kích hoạt</span>
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <div className="flex justify-end">
                        <Button>Lưu thay đổi</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}
