"use client"

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
    const watchColorImages = useWatch({
        control: form.control,
        name: "colorImages"
    });

    const { fields } = useFieldArray({
        control: form.control,
        name: "images"
    });

    const indexInteractFiles = fields?.length > 0 ?
    fields.findIndex(field => field?.color?.id === watchColorImages?.id) :
    -1;
    
    const handleAddImages = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const newFiles = Array.from(files).map((file, index) => ({
            main: index === 0 ? true : false,
            file
        }));

        if (indexInteractFiles !== -1) {
            const currentFiles = form.getValues(`images.${indexInteractFiles}.files`) || [];
            form.setValue(`images.${indexInteractFiles}.files`, [...currentFiles, ...newFiles]);
            e.target.value = '';
        }
    };

    const handleSetMainImage = (index) => {
        if (indexInteractFiles === -1) return;
        
        const currentFiles = form.getValues(`images.${indexInteractFiles}.files`);
        const updatedFiles = currentFiles.map((file, i) => ({
            ...file,
            main: i === index
        }));

        const sortedFiles = updatedFiles.sort((a, b) => {
            if (a.main) return -1;
            if (b.main) return 1;
            return 0;
        });
        
        form.setValue(`images.${indexInteractFiles}.files`, sortedFiles);
    };

    const handleRemoveImage = (index) => {
        if (indexInteractFiles === -1) return;
        
        const currentFiles = form.getValues(`images.${indexInteractFiles}.files`);
        const isMainImage = currentFiles[index]?.main;
        
        const newFiles = currentFiles.filter((_, i) => i !== index);
        if (isMainImage && newFiles.length > 0) {
            newFiles[0].main = true;
        }
        
        form.setValue(`images.${indexInteractFiles}.files`, newFiles);
    };
    
    return (
        <ScrollArea className="p-[20px] rounded-[10px] bg-white w-[40%]">
            {
                fields?.length === 0 ?
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
                                    fields.map(field => {
                                        const color = field?.color;
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
                            indexInteractFiles !== -1 && (
                                <div className="grid grid-cols-2 gap-[10px]">
                                    {
                                        form.watch(`images.${indexInteractFiles}.files`)?.map((image, index) => {
                                            return (
                                                <div 
                                                    key={index}
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
                                                                onClick={() => handleSetMainImage(index)}
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