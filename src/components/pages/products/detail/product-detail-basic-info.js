"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CustomButton from "@/components/customs/custom-button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CircleCheckBig, Heart, Share, ShoppingCart } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { RiCopperCoinLine } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

const colors = [
    { value: "black", bg: "bg-darkBold" },
    { value: "white", bg: "bg-slate-300" },
    { value: "blue",  bg: "bg-slate-300" },
    { value: "yellow", bg: "bg-slate-300" },
];

const sizes = [
    { value: "m", label: "Cao 80cm - Dài 100cm - Rộng 140cm" },
    { value: "l", label: "Cao 80cm - Dài 100cm - Rộng 140cm" },
    { value: "x", label: "Cao 80cm - Dài 100cm - Rộng 140cm" },
    { value: "xl", label: "Cao 80cm - Dài 100cm - Rộng 140cm" }
]

export default function ProductDetailBasicInfo() {
    const form = useForm({
        defaultValues: {
            color: "black",
            size: "l",
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
                    <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold text-darkBold">Tên sản phẩm</h1>
                            <div className="flex items-center gap-4 text-sm font-semibold text-blueChecked">
                                <CircleCheckBig size={26} />
                                <p>Còn sản phẩm</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={20} />
                            ))}
                            <p className="pl-2 text-darkMedium">(Không có đánh giá)</p>
                        </div>
                    </div>

                    <p className="text-lg font-semibold text-darkBold">400.000 VNĐ</p>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-gray-200" />
                </div>

                <Form {...form}>
                    <form className="space-y-6">
                        <div className="flex items-center gap-4 text-sm font-semibold text-blueChecked">
                            <RiCopperCoinLine size={30} className="shrink-0" />
                            <p>Nhận 400 điểm khi mua sản phẩm này</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[15px] font-medium text-darkBland">
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
                                                        className={`w-11 h-11 rounded-full ${color.bg} outline outline-2 outline-offset-[3px] transition-all duration-300 cursor-pointer hover:outline-darkBland ${
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
                            <p className="text-[15px] font-medium text-darkBland">Kích thước:</p>

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
                                                                "py-[12px] px-[20px] rounded-full border hover:border-darkBold hover:text-darkBold transition-colors duration-300 cursor-pointer",
                                                                field.value === size.value ? "border-darkBold text-darkBold bg-neutral-50" : " border-darkBland text-darkBland"
                                                            )}
                                                        >
                                                            <RadioGroupItem value={size.value} className="hidden" />
                                                            <p className="text-[14px] font-medium">{size.label}</p>
                                                        </label>
                                                    ))}

                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <div className="py-[12px] px-[20px] rounded-full border border-darkBland hover:border-darkBold hover:text-darkBold transition-colors duration-300 cursor-pointer">
                                                                <p className="text-[14px] font-medium text-darkBland">Thêm</p>
                                                            </div>
                                                        </DialogTrigger>

                                                        <DialogContent className="max-w-[90%] md:max-w-[700px] p-0">
                                                            <ScrollArea className="p-[24px] max-h-screen">
                                                                <DialogHeader className="mb-[24px]">
                                                                    <DialogTitle>Kích thước</DialogTitle>
                                                                    <DialogDescription>Chọn kích thước phù hợp với không gian của bạn.</DialogDescription>
                                                                </DialogHeader>

                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                                                                    {sizes.map((size) => (
                                                                        <label
                                                                            key={size.value}
                                                                            className={cn(
                                                                                "py-[12px] px-[20px] rounded-full border hover:border-darkBold hover:text-darkBold transition-colors duration-300 cursor-pointer",
                                                                                field.value === size.value ? "border-darkBold text-darkBold bg-neutral-50" : " border-darkBland text-darkBland"
                                                                            )}
                                                                        >
                                                                            <RadioGroupItem value={size.value} className="hidden" />
                                                                            <p className="text-[14px] font-medium">{size.label}</p>
                                                                        </label>
                                                                    ))}
                                                                </div>
                                                            </ScrollArea>
                                                        </DialogContent>
                                                    </Dialog>
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
                            <div className="flex items-center gap-[8px]">
                                <CustomButton
                                    icon={<ShoppingCart />}
                                    className="w-full rounded-[10px]"
                                >
                                    Thêm vào giỏ hàng
                                </CustomButton>

                                <CustomButton
                                    icon={<Heart />}
                                    className="rounded-[10px] bg-yellowMedium hover:bg-yellowMedium hover:opacity-80 transition-all text-darkMedium"
                                >
                                </CustomButton>
                            </div>

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