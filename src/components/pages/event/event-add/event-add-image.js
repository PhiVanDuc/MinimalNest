"use client"

import { useRef } from "react";
import ImageComponent from "next/image";

import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { IoImage } from "react-icons/io5";
import PreviewImage from "@/components/customs/preview-image";

export default function EventAddImage({ form }) {
    const fileInputRef = useRef(null);
    const image = form.watch("image");

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Vui lòng chọn file ảnh (JPEG, PNG, WEBP)');
            return;
        }

        form.setValue("image", file);
    }

    const handleDeleteImage = () => {
        form.setValue("image", null);
    }

    return (
        <FormField
            control={form.control}
            name="image"
            render={() => (
                <FormItem className="space-y-[5px]">
                    <FormControl>
                        <div className="flex flex-col items-center justify-center w-full aspect-16/5 rounded-[10px] border border-dashed border-neutral-400 bg-neutral-100">
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                            />

                            {image ? (
                                <div className="w-full h-full p-[10px]">
                                    <div className="relative w-full h-full">
                                        <PreviewImage
                                            file={image}
                                            alt={`Ảnh sự kiện`}
                                            className="h-full"
                                        />

                                        <Button
                                            size="sm"
                                            variant="destructive"
                                            className="absolute top-[20px] right-[20px]"
                                            onClick={handleDeleteImage}
                                        >
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-[15px]">
                                    <IoImage size={80} className="text-yellowBold" />

                                    <div className="space-y-[5px]">
                                        <p className="text-[16px] text-center font-semibold text-neutral-600">
                                            Chọn ảnh để tải lên
                                        </p>
                                        <p className="text-[14px] text-center text-neutral-400">
                                            Định dạng có thể là JPG, PNG, WEBP, ảnh sẽ được chuyển đổi sang WEBP.
                                        </p>
                                    </div>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="shadow-none"
                                        onClick={() => { fileInputRef.current?.click() }}
                                    >
                                        Chọn ảnh
                                    </Button>
                                </div>
                            )}
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}