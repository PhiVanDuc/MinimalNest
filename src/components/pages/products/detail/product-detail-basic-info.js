"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import CustomButton from "@/components/customs/custom-button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CircleCheckBig, Heart, Share, ShoppingCart } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { RiCopperCoinLine } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";

import { cn } from "@/lib/utils";
import { toast } from "sonner";

const colors = [
    { value: "black", bg: "bg-darkBold" },
    { value: "white", bg: "bg-slate-300" },
    { value: "blue",  bg: "bg-slate-300" },
    { value: "yellow", bg: "bg-slate-300" },
];

const sizes = [
    { value: "M", label: "Cao 80cm - Dài 100cm - Rộng 140cm" },
    { value: "L", label: "Cao 80cm - Dài 100cm - Rộng 140cm" },
    { value: "X", label: "Cao 80cm - Dài 100cm - Rộng 140cm" },
    { value: "XL", label: "Cao 80cm - Dài 100cm - Rộng 140cm" }
]

export default function ProductDetailBasicInfo() {
    const form = useForm({
        defaultValues: {
            color: "black",
            size: "L",
            quantity: 1
        }
    });

    const handleUpdateQuantity = (type) => {
        const quantity = form.getValues('quantity');

        if (type === "down") {
            if (quantity <= 1) return;
            else form.setValue("quantity", quantity - 1);
            return;
        }

        form.setValue("quantity", quantity + 1)
    }

    const handleShare = async () => {
        try {
            // Lấy URL hiện tại của trang
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
            toast.success("URL đã được copy vào clipboard!");
        } catch (error) {
            console.error("Lỗi khi copy URL: ", error);
        }
    };

    return (
        <>
            {/* Thông tin đặt hằng ở trên */}
            <div className="w-full space-y-8">
                <div className="relative pb-8 space-y-6">
                    <div className="space-y-[10px] sm:space-y-[5px]">
                        <div className="flex items-center justify-between">
                            <h1 className="text-[20px] md:text-[24px] font-semibold text-darkBold order-2 sm:order-1 truncate">Tên sản phẩm</h1>
                            <div className="hidden sm:flex items-center gap-3 text-sm font-semibold text-blueChecked order-1 sm:order-2">
                                <CircleCheckBig size={26} />
                                <p>Còn sản phẩm</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2 text-gray-300 text-sm">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="w-[15px] sm:w-[20px] aspect-square" />
                            ))}
                            <p className="pl-2 text-darkMedium">(Không có đánh giá)</p>
                        </div>
                    </div>

                    <p className="text-[18px] md:text-[20px] font-semibold text-darkBold">400.000 VNĐ</p>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-gray-200" />
                </div>

                <Form {...form}>
                    <form className="space-y-6">
                        <div className="flex items-center gap-3 text-sm font-semibold text-blueChecked">
                            <RiCopperCoinLine size={30} className="shrink-0" />
                            <p>Nhận 400 điểm khi mua sản phẩm này</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[14px] sm:text-[15px] font-medium text-darkBland">
                                Màu sắc: <span className="font-bold text-darkBold">{form.watch("color")}</span>
                            </p>

                            <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex items-center gap-6"
                                            >
                                                {colors.map((color) => (
                                                    <label
                                                        key={color.value}
                                                        className={`w-[35px] sm:w-[45px] h-[35px] sm:h-[45px] rounded-full ${color.bg} outline outline-1 sm:outline-2 outline-offset-[3px] transition-all duration-300 cursor-pointer hover:outline-darkBland ${
                                                            field.value === color.value
                                                                ? "outline-darkBland"
                                                                : "outline-slate-200"
                                                        }`}
                                                    >
                                                        <RadioGroupItem value={color.value} className="hidden" />
                                                    </label>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-4">
                            <p className="text-[14px] sm:text-[15px] font-medium text-darkBland">Kích thước:</p>

                            <FormField
                                control={form.control}
                                name="size"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-wrap items-center gap-[10px]"
                                                >
                                                    {sizes.map((size) => (
                                                        <label
                                                            key={size.value}
                                                            className={cn(
                                                                "w-[45px] sm:w-[50px] h-[45px] sm:h-[50px] flex items-center justify-center rounded-full border hover:border-darkBold hover:text-darkBold transition-colors duration-300 cursor-pointer",
                                                                field.value === size.value ? "border-darkBold text-darkBold bg-neutral-50" : " border-darkBland text-darkBland"
                                                            )}
                                                        >
                                                            <RadioGroupItem value={size.value} className="hidden" />
                                                            <p className="text-[14px] sm:text-[15px] font-medium">{size.value}</p>
                                                        </label>
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        </div>

                        <div className="space-y-4">
                            <p className="text-[15px] font-medium text-darkBland">Số lượng:</p>

                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <div className="flex items-center gap-[20px] p-[5px] rounded-full border border-darkBland w-fit">
                                                    <div
                                                        className="flex items-center justify-center w-[35px] aspect-square rounded-full bg-[#EDF0F3] cursor-pointer"
                                                        onClick={() => { handleUpdateQuantity("down") }}
                                                    >
                                                        <FiMinus size={15} />
                                                    </div>

                                                    <p className="text-darkBold font-medium">{form.watch("quantity") || form.getValues("quantity")}</p>

                                                    <div
                                                        className="flex items-center justify-center w-[35px] aspect-square rounded-full bg-[#EDF0F3] cursor-pointer"
                                                        onClick={() => { handleUpdateQuantity("up") }}
                                                    >
                                                        <FiPlus size={15} />
                                                    </div>
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        </div>
                        
                        <div className="space-y-[15px]">
                            <CustomButton
                                icon={<ShoppingCart />}
                                className="w-full rounded-[10px] text-[13px] sm:text-[14px] gap-x-[15px] sm:gap-x-[20px]"
                            >
                                Thêm vào giỏ hàng
                            </CustomButton>

                            <div
                                className="flex items-center gap-[15px] text-darkMedium font-medium cursor-pointer hover:text-darkBold transition-colors"
                                onClick={handleShare}
                            >
                                <Share size={20} />
                                <p>Chia sẻ</p>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>

            {/* Thông tin đặt hàng bên dưới */}
        </>
    );
}