"use client"

import { useState, useRef, useCallback } from "react";
import ImageComponent from "next/image";

import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { IoImage } from "react-icons/io5";

import convertImageToWebp from "@/lib/utils/convert-image-to-webp";

export default function EventEditImage({ form, blurImage }) {
    const image = form.watch("image");
    const fileInputRef = useRef(null);

    const [loadingImage, setLoadingImage] = useState(false);

    const handleImageChange = useCallback(async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setLoadingImage(true);
        form.clearErrors("image");

        try {
            // Kiểm tra kích thước và loại file trước khi xử lý
            if (file.size > 5 * 1024 * 1024) {
                throw new Error("Kích thước ảnh tối đa là 5MB");
            }

            if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
                throw new Error("Chỉ chấp nhận ảnh JPEG, PNG hoặc WEBP");
            }

            // Xử lý ảnh và chuyển đổi sang WebP
            const processedImage = await convertImageToWebp(file);
            form.setValue("image", processedImage, { shouldValidate: true });
        }
        catch (error) {
            form.setError("image", {
                type: "manual",
                message: error.message,
            });
        }
        finally {
            setLoadingImage(false);
        }
    }, [form]);

    const handleDelete = () => {
        form.setValue("image", "");
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

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
                                        {
                                            image?.startsWith("https") ?
                                            (
                                                <ImageComponent
                                                    src={image}
                                                    alt="Uploaded event"
                                                    fill
                                                    className="object-cover object-center rounded-[10px]"
                                                    placeholder="blur"
                                                    blurDataURL={blurImage?.base64}
                                                />
                                            ) :
                                            (
                                                <ImageComponent
                                                    src={image}
                                                    alt="Uploaded event"
                                                    fill
                                                    className="object-cover object-center rounded-[10px]"
                                                    placeholder="blur"
                                                    blurDataURL={image}
                                                />
                                            )
                                        }

                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="destructive"
                                            className="absolute top-[20px] right-[20px]"
                                            onClick={handleDelete}
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

                                    <div className="text-center w-full">
                                        {!loadingImage ? (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="shadow-none"
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                Chọn ảnh
                                            </Button>
                                        ) : (
                                            <p className="text-[14px] font-medium text-darkMeium">
                                                Đang tải ảnh lên . . .
                                            </p>
                                        )}
                                    </div>
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