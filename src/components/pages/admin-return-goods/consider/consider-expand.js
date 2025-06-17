"use client"

import Image from "next/image";

import {
    FormControl,
    FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { AiOutlineCloudUpload } from "react-icons/ai";

export default function ConsiderExpand({ product }) {
    return (
        <div className="space-y-[20px]">
            {
                product?.proof_images?.length > 0 &&
                (
                    <div className="space-y-[5px]">
                        <FormLabel>Hình ảnh tình trạng sản phẩm</FormLabel>

                        <div className="grid grid-cols-5 gap-[10px]">
                            {
                                product?.proof_images?.map(img => {
                                    return (
                                        <div
                                            key={img?.id}
                                            className="relative w-full aspect-square rounded-[10px] bg-slate-300 overflow-hidden"
                                        >
                                            <Image
                                                src={img?.url}
                                                alt={product?.product_name}
                                                fill
                                                sizes="100%"
                                                className="object-center object-cover"
                                                priority={false}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }

            <div className="space-y-[5px]">
                <FormLabel>Số lượng</FormLabel>
                <FormControl>
                    <Input
                        placeholder="Vui lòng nhập số lượng muốn trả . . ."
                        className="px-[15px] py-[20px]"
                        value={product?.return_quantity}
                        readOnly
                    />
                </FormControl>
            </div>

            <div className="space-y-[5px]">
                <FormLabel>Lý do</FormLabel>
                <FormControl>
                    <Textarea
                        placeholder="Vui lòng nhập lý do bạn muốn hoàn trả sản phẩm . . ."
                        className="px-[15px] py-[12px] h-[100px] resize-none"
                        value={product?.message}
                        readOnly
                    />
                </FormControl>
            </div>
        </div>
    )
}
