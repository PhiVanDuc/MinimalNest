"use client";

import { useState } from "react";

import CustomButton from "@/components/customs/custom-button";
import Money from "@/components/customs/money";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CircleCheckBig, Share, ShoppingCart } from "lucide-react";
import { FiPlus, FiMinus } from "react-icons/fi";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { convertToNumberDb } from "@/lib/utils/format-currency";
import calcPrice from "@/lib/utils/calc-price";

export default function ProductDetailBasicInfo({
    product,
    currentColor,
    setCurrentColor,
    currentSize,
    setCurrentSize
}) {
    const [quantity, setQuantity] = useState(1);
    const [currentVariant, setCurrentVariant] = useState(() => {
        return product.variants.find(
            (variant) =>
                variant.color.id === product.colors[0]?.id &&
                variant.size.id === product.sizes[0]?.id
        );
    });

    const handleChooseColor = async (value) => {
        const selectedColor = product.colors.find((color) => color.id === value);
        if (selectedColor) {
            setCurrentColor(selectedColor);
        }
    }

    const handleChooseSize = async (value) => {
        const selectedSize = product.sizes.find((size) => size.id === value);
        if (selectedSize) {
            setCurrentSize(selectedSize);
        }
    }

    const handleUpdateQuantity = (type) => {
        if (type === "down") {
            if (quantity <= 1) return;
            else setQuantity(quantity - 1)
            return;
        }

        setQuantity(quantity + 1)
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
            <div className="flex-col w-full space-y-[30px]">
                <div className="relative pb-[30px] space-y-[10px]">
                    <header className="flex items-center justify-between">
                        <h1 className="text-[20px] md:text-[24px] font-semibold text-darkBold order-2 sm:order-1 truncate">Tên sản phẩm</h1>
                        <div className="hidden sm:flex items-center gap-3 text-sm font-semibold text-blueChecked order-1 sm:order-2">
                            <CircleCheckBig size={26} />
                            <p>Còn sản phẩm</p>
                        </div>
                    </header>

                    <Money
                        price={
                            product?.general_discount ?
                            calcPrice(product?.cost_price, product?.interest_rate, product?.general_discount?.discount_type, product?.general_discount?.discount_amount) :
                            calcPrice(product?.cost_price, product?.interest_rate, product?.discount_type, product?.discount_amount)
                        }
                        moneyClassName="text-[20px] font-semibold"
                    />

                    <span className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-gray-200" />
                </div>

                <div className="space-y-[30px]">
                    <div className="space-y-[10px]">
                        <p className="text-[13px] sm:text-[14px] font-medium text-darkBland">
                            Màu sắc: <span className="font-semibold text-darkBold text-[15px]">{currentColor?.color}</span>
                        </p>

                        <RadioGroup
                            onValueChange={handleChooseColor}
                            defaultValue={currentColor?.id}
                            className="flex items-center gap-6"
                        >
                            {product?.colors.map(color => (
                                <label
                                    key={color?.id}
                                    className={cn(
                                        "w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] rounded-full transition-all duration-300 cursor-pointer",
                                    )}
                                    style={{
                                        background: `${color?.code}`,
                                        outline: `1.5px solid ${ currentColor?.id === color?.id ? "oklch(55.6% 0 0)" : "#E5E7EB" }`,
                                        outlineOffset: "3px"
                                    }}
                                >
                                    <RadioGroupItem value={color.id} className="hidden" />
                                </label>
                            ))}
                        </RadioGroup>
                    </div>

                    <div className="space-y-[10px]">
                        <p className="text-[13px] sm:text-[14px] font-medium text-darkBland">Kích thước:</p>

                        <RadioGroup
                            onValueChange={handleChooseSize}
                            defaultValue={currentSize?.id}
                            className="flex flex-wrap items-center gap-[20px]"
                        >
                            {product?.sizes.map(size => (
                                <label
                                    key={size?.id}
                                    className={cn(
                                        "flex items-center justify-center w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full transition-all duration-300 cursor-pointer bg-neutral-50 text-[15px] font-medium",
                                        currentSize?.id === size?.id ? "bg-neutral-200" : ""
                                    )}
                                    style={{
                                        outline: `1.5px solid ${ currentSize?.id === size?.id ? "oklch(55.6% 0 0)" : "#E5E7EB" }`,
                                        outlineOffset: "3px"
                                    }}
                                >
                                    {size?.size}

                                    <RadioGroupItem value={size.id} className="hidden" />
                                </label>
                            ))}
                        </RadioGroup>
                    </div>

                    <div className="space-y-[10px]">
                        <p className="text-[15px] font-medium text-darkBland">Số lượng:</p>

                        <div className="flex items-center gap-[20px] p-[5px] rounded-full border border-darkBland w-fit">
                            <div
                                className="flex items-center justify-center w-[30px] sm:w-[35px] aspect-square rounded-full bg-[#EDF0F3] cursor-pointer"
                                onClick={() => { handleUpdateQuantity("down") }}
                            >
                                <FiMinus className="text-[14px] sm:text-[15px]" />
                            </div>

                            <p className="text-darkBold font-medium">{quantity}</p>

                            <div
                                className="flex items-center justify-center w-[30px] sm:w-[35px] aspect-square rounded-full bg-[#EDF0F3] cursor-pointer"
                                onClick={() => { handleUpdateQuantity("up") }}
                            >
                                <FiPlus className="text-[14px] sm:text-[15px]" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-[15px]">
                        <CustomButton
                            icon={<ShoppingCart />}
                            className="w-full rounded-[10px] text-[13px] sm:text-[14px] gap-x-[15px] sm:gap-x-[20px]"
                        >
                            Thêm vào giỏ hàng
                        </CustomButton>

                        <div
                            className="flex items-center w-fit gap-[15px] text-darkMedium font-medium cursor-pointer hover:text-darkBold transition-colors text-[14px] sm:text-[16px]"
                            onClick={handleShare}
                        >
                            <Share
                                className="w-[18px] sm:w-[20px] aspect-square"
                            />
                            <p>Chia sẻ</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thông tin đặt hàng bên dưới */}
        </>
    );
}