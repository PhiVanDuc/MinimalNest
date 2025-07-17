"use client"

import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormDescription
} from "@/components/ui/form";

import PreviewImage from "@/components/customs/preview-image";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { LuTrash } from "react-icons/lu";
import { AiOutlineCloudUpload } from "react-icons/ai";
import formatCurrency from "@/lib/utils/format-currency";

export default function ReturnGoodsForm({
    form,
    product
}) {
    const products = form.watch("products") || [];
    const productIndex = products.findIndex(p => p.id === product?.id);

    if (productIndex === -1) return null;

    return (
        <div className="space-y-[20px]">
            <FormField
                control={form.control}
                name={`products.${productIndex}.proof_imgs`}
                render={({ field }) => {
                    const handleSelectImage = (e) => {
                        const files = Array.from(e.target.files || []);
                        if (!files.length) return;

                        field.onChange(files);
                        e.target.value = '';
                    };

                    const handleRemoveImage = (index) => {
                        const newImages = field.value.filter((_, i) => i !== index);
                        field.onChange(newImages);
                    };

                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel className="mb-[10px]">Tải ảnh lên</FormLabel>
                                <FormControl>
                                    <div className="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-[10px]">
                                        {
                                            Array.isArray(field.value) &&
                                            field.value.map((image, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="relative group"
                                                    >
                                                        <PreviewImage
                                                            file={image}
                                                            alt="Ảnh xem trước"
                                                            className="w-full aspect-square rounded-[10px] object-cover"
                                                        />

                                                        <button
                                                            type="button"
                                                            onClick={() => { handleRemoveImage(index) }}
                                                            className="absolute top-[5px] right-[5px] bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                                                        >
                                                            <LuTrash size={15} />
                                                        </button>
                                                    </div>
                                                )
                                            })
                                        }

                                        <label className="flex flex-col items-center justify-center p-[10px] w-full aspect-square rounded-[10px] border border-dashed border-darkBland bg-neutral-100 hover:bg-neutral-50 transition-colors duration-300 cursor-pointer space-y-[5px]">
                                            <AiOutlineCloudUpload size={30} className="text-yellowBold" />
                                            <p className="text-[14px] text-darkMedium text-center font-medium">Nhấn vào để chọn ảnh.</p>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                onChange={handleSelectImage}
                                                className="hidden"
                                            />
                                        </label>
                                    </div>
                                </FormControl>
                                <FormDescription>Vui lòng cung cấp hình ảnh tình trạng của sản phẩm.</FormDescription>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name={`products.${productIndex}.return_quantity`}
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Số lượng</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Vui lòng nhập số lượng muốn trả . . ."
                                        className="px-[15px] py-[20px]"
                                        value={formatCurrency(`${field?.value}`)}
                                        onChange={(e) => {
                                            const value = e?.target?.value;

                                            if (!isNaN(value) && (+value > product?.quantity || +value <= 0)) return;
                                            field?.onChange();
                                        }}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name={`products.${productIndex}.message`}
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
