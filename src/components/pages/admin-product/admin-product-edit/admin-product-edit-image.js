"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { IoImage } from "react-icons/io5";

import { cn } from "@/lib/utils";

export default function AdminProductEditImage({ form }) {
    const watchColors = form.watch("colors");
    const watchColorImages = form.watch("colorImages");

    return (
        <ScrollArea className="p-[20px] rounded-[10px] bg-white w-[40%]">
            {
                watchColors.length === 0 ?
                (
                    <p className="text-[15px] text-darkMedium text-center font-medium">Chọn màu mà bạn muốn tải ảnh lên.</p>
                ) :
                (
                    <div className="space-y-[20px]">
                        <div className="space-y-[5px]">
                            <p className="text-[15px] font-medium">Ảnh sản phẩm</p>

                            <div
                                className="flex flex-wrap items-center gap-[5px]"
                            >
                                {
                                    watchColors.map((color, index) => {
                                        const checked = watchColorImages?.value === color.value;

                                        return (
                                            <p
                                                key={color.value + index + "a"}
                                                className={cn(
                                                    "shrink-0 flex items-center justify-center w-[33px] aspect-square rounded-full border-[1.5px] cursor-pointer",
                                                    checked ? "border-neutral-500" : ""
                                                )}
                                                onClick={() => { form.setValue("colorImages", color) }}
                                            >
                                                <span
                                                    className="w-[25px] aspect-square rounded-full"
                                                    style={{
                                                        backgroundColor: color.value
                                                    }}
                                                />
                                            </p>
                                        )
                                    })
                                }
                            </div>

                            <p className="text-[12px] font-normal text-muted-foreground">Hãy chọn những màu ở đây để tải ảnh lên.</p>
                        </div>

                        {
                            watchColorImages?.value && (
                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col justify-center items-center p-[20px] text-darkBland w-full aspect-square rounded-[10px] border border-dashed border-neutral-400 bg-neutral-50 gap-[15px] cursor-pointer">
                                        <IoImage
                                            size={40}
                                        />

                                        <div>
                                            <p className="text-[15px] text-center text-darkBold font-semibold">Tải ảnh lên</p>
                                            <p className="text-[13px] text-center font-medium">Ảnh cần có định dạng JPG, PNG, WEBP.</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </ScrollArea>
    )
}
