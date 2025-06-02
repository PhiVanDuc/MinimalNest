"use client"

import { useEffect } from "react";
import { useWatch } from "react-hook-form";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function AdminProductEditColor({
    form,
    colors,
    setEditImages,
    setDeletedImages,
    mainImages,
    setMainImages
}) {
    const watchColors = useWatch({
        control: form.control,
        name: "colors"
    });

    // Khi thay đổi lựa chọn lại màu sắc thì sẽ mất đi màu sắc đã chọn bên phía hình ảnh
    useEffect(() => {
        form.setValue("colorImages", {});
        setEditImages(true);
    }, [watchColors, form]);

    // Khi thay đổi lựa chọn lại màu sắc thì sẽ xóa những ảnh có màu sắc liên quan
    useEffect(() => {
        const images = form.getValues("images");

        const deleteImages = images
            .filter(image => {
                const isColorRemoved = !watchColors?.some(color => color?.id === image?.colorId);
                const isFileValid = typeof image?.file === 'string';
                return isColorRemoved && isFileValid;
            })
            .map(image => image.rootId);

        if (deleteImages?.length > 0) {
            setDeletedImages((prevState) => {
                return [...prevState, ...deleteImages]
            });
        }

        if (mainImages && mainImages.length > 0) {
            const updatedMainImages = mainImages.filter(mainImage => {
                return watchColors?.some(color => color?.id === mainImage?.colorId);
            });
            
            if (updatedMainImages.length !== mainImages.length) {
                setMainImages(updatedMainImages);
            }
        }

        const remainImages = images.filter(image => {
            return watchColors?.some(color => color?.id === image?.colorId);
        });

        form.setValue("images", remainImages);
    }, [watchColors, form]);

    return (
        <FormField
            control={form.control}
            name="colors"
            render={() => (
                <FormItem>
                    <div className="space-y-[5px]">
                        <FormLabel>Màu sắc</FormLabel>

                        <div className="flex flex-wrap items-center gap-[5px]">
                            {
                                colors.map((color, index) => (
                                    <FormField
                                        key={color?.id}
                                        control={form.control}
                                        name="colors"
                                        render={({ field }) => {
                                            const checked = field.value.some(value => value?.id === color?.id);

                                            return (
                                                <FormItem>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={checked}
                                                            onCheckedChange={(isChecked) => {
                                                                const newVals = isChecked
                                                                    ? [...field.value, color]
                                                                    : field.value.filter(
                                                                        (v) => v?.id !== color?.id
                                                                    );
                                                                field.onChange(newVals);
                                                            }}
                                                            className="hidden"
                                                        />
                                                    </FormControl>
                                                    
                                                    <FormLabel
                                                        className={cn(
                                                            "shrink-0 flex items-center justify-center w-[33px] aspect-square rounded-full border-[1.5px] cursor-pointer",
                                                            checked ? "border-neutral-500" : ""
                                                        )}
                                                    >

                                                        <span
                                                            className="w-[25px] aspect-square rounded-full"
                                                            style={{
                                                                backgroundColor: color?.code
                                                            }}
                                                        />
                                                    </FormLabel>
                                                </FormItem>
                                            );
                                        }}
                                    />
                                ))
                            }
                        </div>

                        <FormDescription>Lưu ý: Nếu bạn bỏ chọn màu đã tải ảnh lên, những ảnh đó sẽ biến mất.</FormDescription>
                    </div>
                </FormItem>
            )}
        />
    )
}