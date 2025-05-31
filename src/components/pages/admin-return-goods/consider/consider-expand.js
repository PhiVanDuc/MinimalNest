"use client"

import {
    FormField,
    FormItem,
    FormControl,
    FormLabel
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

import { AiOutlineCloudUpload } from "react-icons/ai";

export default function ConsiderExpand({ form }) {
    return (
        <div className="space-y-[20px]">
            <div className="grid grid-cols-5 gap-[10px]">
                <Skeleton className="w-full aspect-square rounded-[10px] bg-neutral-100" />
                <Skeleton className="w-full aspect-square rounded-[10px] bg-neutral-100" />
                <Skeleton className="w-full aspect-square rounded-[10px] bg-neutral-100" />

                <div className="flex flex-col items-center justify-center p-[10px] w-full aspect-square rounded-[10px] border border-dashed border-darkBland bg-neutral-100 hover:bg-neutral-50 transition-colors duration-300 cursor-pointer space-y-[5px]">
                    <AiOutlineCloudUpload size={30} className="text-yellowBold" />
                    <p className="text-[14px] text-darkMedium text-center font-medium">Nhấn vào để chọn ảnh.</p>
                </div>
            </div>

            <FormField
                control={form.control}
                name=""
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Số lượng</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Vui lòng nhập số lượng muốn trả . . ."
                                        className="px-[15px] py-[20px]"
                                        {...field}
                                        disabled={true}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name=""
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Lý do</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Vui lòng nhập lý do bạn muốn hoàn trả sản phẩm . . ."
                                        className="px-[15px] py-[12px] h-[100px] resize-none"
                                        {...field}
                                        disabled={true}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name=""
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Quyết định</FormLabel>

                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue="accept"
                                        className="flex items-center gap-[20px]"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="accept" />
                                            </FormControl>

                                            <FormLabel className="font-normal">
                                                Đồng ý
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="cancel" />
                                            </FormControl>

                                            <FormLabel className="font-normal">
                                                Từ chối
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name=""
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Lý do từ chối</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Vui lòng nhập lý do từ chối hoàn trả sản phẩm . . ."
                                        className="px-[15px] py-[12px] h-[100px] resize-none"
                                        {...field}
                                        disabled={true}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />
        </div>
    )
}
