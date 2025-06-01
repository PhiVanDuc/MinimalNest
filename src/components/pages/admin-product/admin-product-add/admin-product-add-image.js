"use client"

import { useEffect, useState } from "react";
import { useFieldArray, useWatch } from "react-hook-form";

import PreviewImage from "@/components/customs/preview-image";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { BsThreeDotsVertical } from "react-icons/bs";
import { IoImage } from "react-icons/io5";

import { cn } from "@/lib/utils";

export default function AdminProductAddImage({ form }) {
    const watchColors = useWatch({
        control: form.control,
        name: "colors"
    });

    const watchColorImages = useWatch({
        control: form.control,
        name: "colorImages"
    });

    const { fields, append, update, move, remove } = useFieldArray({
        control: form.control,
        name: "images"
    });

    const [groupImage, setGroupImage] = useState([]);

    useEffect(() => {
        setGroupImage([]);
    }, [watchColors]);

    useEffect(() => {
        if (!watchColorImages?.id || fields?.length === 0) return setGroupImage([]);
        setGroupImage(fields?.filter(filed => filed?.colorId === watchColorImages?.id));
    }, [fields, watchColorImages]);

    const handleAddImages = (e) => {
        const selectedFiles = e.target.files;
        if (!selectedFiles || selectedFiles.length === 0) return;

        const files = Array.from(selectedFiles).map((file, index) => {
            return {
                main: index === 0,
                colorId: watchColorImages?.id,
                file
            }
        });

        append([...files]);
        e.target.value = '';
    }

    const handleMainImage = (index) => {
        const selected = groupImage[index];
        const idxInFields = fields.findIndex(field => field.id === selected.id);

        if (idxInFields !== -1) {
            fields.forEach((field, idx) => {
                if (field.colorId === selected.colorId && field.main) {
                    update(idx, { ...fields[idx], main: false });
                }
            });

            update(idxInFields, { ...fields[idxInFields], main: true });
            move(idxInFields, 0);
        }
    }

    const handleRemoveImage = (index) => {
        const imageToRemove = groupImage[index];
        
        const removeIndexInFields = fields.findIndex(field => field.id === imageToRemove.id);
        if (removeIndexInFields === -1) return;

        if (imageToRemove.main) {
            const otherImagesSameColor = fields.filter(field => 
                field.colorId === watchColorImages?.id && 
                field.id !== imageToRemove.id
            );

            if (otherImagesSameColor.length > 0) {
                const newMainImage = otherImagesSameColor[0];
                const newMainIndexInFields = fields.findIndex(field => field.id === newMainImage.id);
                update(newMainIndexInFields, { ...newMainImage, main: true });
            }
        }

        remove(removeIndexInFields);
    }
    
    return (
        <ScrollArea className="p-[20px] rounded-[10px] bg-white w-[40%]">
            {
                watchColors?.length === 0 ?
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
                                    watchColors.map(color => {
                                        const checked = watchColorImages?.id === color?.id;

                                        return (
                                            <div
                                                key={color?.id}
                                                className={cn(
                                                    "shrink-0 flex items-center justify-center w-[33px] aspect-square rounded-full border-[1.5px] cursor-pointer",
                                                    checked ? "border-neutral-500" : ""
                                                )}
                                                onClick={() => {
                                                    form.setValue("colorImages", color);
                                                }}
                                            >
                                                <span
                                                    className="w-[25px] aspect-square rounded-full"
                                                    style={{
                                                        backgroundColor: color?.code
                                                    }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <p className="text-[12px] font-normal text-muted-foreground">Hãy chọn những màu ở đây để tải ảnh lên.</p>
                        </div>
                        
                        {
                            watchColorImages?.id && (
                                <div className="grid grid-cols-2 gap-[10px]">
                                    {
                                        groupImage?.map((image, index) => {
                                            return (
                                                <div 
                                                    key={image?.id}
                                                    className="group relative w-full"
                                                >
                                                    <PreviewImage
                                                        file={image?.file}
                                                        alt={`Ảnh sản phẩm`}
                                                        className="aspect-square"
                                                    />

                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <div className="opacity-60 group-hover:opacity-100 flex items-center justify-center absolute top-[10px] right-[10px] w-[28px] aspect-square rounded-full bg-neutral-100 cursor-pointer transition-opacity">
                                                                <BsThreeDotsVertical size={16} />
                                                            </div>
                                                        </DropdownMenuTrigger>

                                                        <DropdownMenuContent>
                                                            <DropdownMenuItem
                                                                className="text-[14px] text-darkMedium font-medium cursor-pointer"
                                                                onClick={() => handleMainImage(index)}
                                                            >
                                                                Ảnh chính
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                className="text-[14px] text-darkMedium font-medium cursor-pointer"
                                                                onClick={() => handleRemoveImage(index)}
                                                            >
                                                                Xóa
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            )
                                        })
                                    }
                                
                                    <label className="flex flex-col justify-center items-center p-[20px] text-darkBland w-full aspect-square rounded-[10px] border border-dashed border-neutral-400 bg-neutral-50 gap-[15px] cursor-pointer">
                                        <IoImage
                                            size={40}
                                        />

                                        <div className="space-y-[5px]">
                                            <p className="text-[15px] text-center text-darkBold font-semibold">Chọn ảnh</p>
                                            <p className="text-[13px] text-center font-medium leading-[18px]">Không chọn những file không phải là ảnh.</p>
                                        </div>

                                        <input
                                            key={`file-input-${watchColorImages?.id || 'default'}`}
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={handleAddImages}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </ScrollArea>
    )
}