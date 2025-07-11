"use client"

import Image from "next/image";
import Link from "next/link";
import Money from "@/components/customs/money";
import CartDeleteItem from "./cart-delete-item";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";

import { FiMinus, FiPlus } from "react-icons/fi";

import { cn } from "@/lib/utils";
import calcPrice from "@/lib/utils/calc-price";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const cartColumns = [
    {
        accessorKey: "select",
        header: ({ table }) => {
            const { form, productsArray } = table?.options?.meta?.moreData;
            
            const products = form.watch("products") || [];
            const isChecked = products.length > 0 && products.every(item => item?.selected === true);

            return (
                <Checkbox
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                        const updatedProducts = productsArray.fields.map(item => ({
                            ...item,
                            selected: !!checked
                        }));
                        productsArray.replace(updatedProducts);
                    }}
                />
            );
        },
        cell: ({ row, table }) => {
            const data = row?.original;
            const { form, productsArray } = table?.options?.meta?.moreData;

            const index = productsArray.fields.findIndex(item => item.id === data.id);
            const isChecked = index !== -1 ? productsArray.fields[index]?.selected : false;

            return (
                <Checkbox
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                        const updatedProducts = productsArray.fields.map((item, i) =>
                            i === index ? { ...item, selected: !!checked } : item
                        );
                        form.setValue("products", updatedProducts);
                    }}
                />
            );
        }
    },
    {
        accessorKey: "product",
        header: () => <div className={`${headerClassName}`} style={{ textAlign: "left" }}>Sản phẩm</div>,
        cell: ({ row }) => {
            const { product: { slug, product: nameProduct, cost_price, interest_rate, general_discount, discount_amount, discount_type, image }, variant } = row?.original || {};

            const isDiscount = ((discount_amount && discount_type) || general_discount);

            const beforeDiscountPrice = calcPrice(cost_price, interest_rate, null, null);
            const price = isDiscount ?
            general_discount ?
            calcPrice(cost_price, interest_rate, general_discount?.discount_type, general_discount?.discount_amount) :
            calcPrice(cost_price, interest_rate, discount_type, discount_amount) :
            calcPrice(cost_price, interest_rate, null, null);

            return (
                <Link
                    className="flex items-center gap-x-[20px]"
                    href={`/san-pham/${slug}`}
                >
                    <div className="relative shrink-0 w-[130px] aspect-square rounded-[10px] bg-slate-200 overflow-hidden">
                        {
                            image?.url ?
                            <Image
                                src={image?.url}
                                alt={nameProduct}
                                fill
                                className="object-cover object-center"
                                sizes="100%"
                                priority={false}
                            /> : 
                            <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />
                        }
                    </div>

                    <div className="space-y-[20px] w-full">
                        <header className="space-y-[5px]">
                            <h2 className="text-[16px] md:text-[17px] font-semibold text-darkBold max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] truncate">{nameProduct}</h2>
                            
                            <div className="flex flex-col gap-y-[5px]">
                                <Money
                                    price={beforeDiscountPrice}
                                    moneyClassName={cn(
                                        "text-[13px] md:text-[14px]",
                                        isDiscount ? "italic line-through" : ""
                                    )}
                                    currencyClassName="text-[11px] md:text-[12px]"
                                />

                                {
                                    isDiscount &&
                                    (
                                        <Money
                                            price={price}
                                            moneyClassName="text-[13px] md:text-[14px]"
                                            currencyClassName="text-[11px] md:text-[12px]"
                                        />
                                    )
                                }
                            </div>
                        </header>

                        <div className="space-y-[5px] w-full">
                            <div className="flex items-center gap-[10px]">
                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                <Tooltip
                                    key={variant?.color?.id}
                                    delayDuration={100}
                                >
                                    <TooltipTrigger asChild>
                                        <span
                                            className="shrink-0 w-[15px] aspect-square rounded-full outline outline-[1.5px] outline-offset-2 outline-neutral-300"
                                            style={{
                                                background: `${variant?.color?.code}`
                                            }}
                                        />
                                    </TooltipTrigger>

                                    <TooltipContent>
                                        {variant?.color?.color}
                                    </TooltipContent>
                                </Tooltip>
                            </div>

                            <div className="flex items-center gap-[10px]">
                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                <Tooltip
                                    key={variant?.size?.id}
                                    delayDuration={100}
                                >
                                    <TooltipTrigger asChild>
                                        <p className="text-[12px] text-darkMedium font-semibold px-[10px] py-[2px] rounded-[2px] bg-neutral-200">
                                            {variant?.size?.size}
                                        </p>
                                    </TooltipTrigger>

                                    <TooltipContent>
                                        {variant?.size?.desc}
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    },
    {
        accessorKey: "quantity",
        header: () => <div className={cn(headerClassName, "text-center")}>Số lượng</div>,
        cell: ({ row, table }) => {
            const data = row?.original;
            const { form, productsArray } = table?.options?.meta?.moreData;

            const index = productsArray.fields.findIndex(item => item.id === data.id);
            const quantity = index !== -1 ? productsArray.fields[index]?.quantity || 1 : 1;

            const updateQuantity = (delta) => {
                const newQty = Math.max(1, quantity + delta);
                const updatedProducts = productsArray.fields.map((item, i) =>
                    i === index ? { ...item, quantity: newQty } : item
                );
                productsArray.replace(updatedProducts);
                form.setValue("products", updatedProducts);
            };

            return (
                <div className="w-full flex justify-center">
                    <div className="flex items-center gap-[15px] md:gap-[20px] p-[5px] rounded-full border border-darkBland w-fit">
                        <div
                            onClick={() => updateQuantity(-1)}
                            className="flex items-center justify-center w-[22px] md:w-[25px] aspect-square rounded-full bg-[#EDF0F3] cursor-pointer"
                        >
                            <FiMinus className="text-[10px] md:text-[12px]" />
                        </div>

                        <p className="text-[14px] text-darkBold font-medium">{quantity}</p>

                        <div
                            onClick={() => updateQuantity(1)}
                            className="flex items-center justify-center w-[22px] md:w-[25px] aspect-square rounded-full bg-[#EDF0F3] cursor-pointer"
                        >
                            <FiPlus className="text-[10px] md:text-[12px]" />
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        accessorKey: "singlePrice/totalPrice",
        header: () => <div className={cn(headerClassName, "text-center")}>Tổng tiền</div>,
        cell: ({ row, table }) => {
            const { id } = row?.original;
            const { productsArray } = table?.options?.meta?.moreData;
            
            const index = productsArray?.fields?.findIndex(prod => prod?.id === id);
            if (index === -1) return <></>;

            const { product: { cost_price, interest_rate, general_discount, discount_amount, discount_type }, quantity } = productsArray?.fields[index];

            const isDiscount = ((discount_amount && discount_type) || general_discount);
            const price = isDiscount ?
            general_discount ?
            calcPrice(cost_price, interest_rate, general_discount?.discount_type, general_discount?.discount_amount) :
            calcPrice(cost_price, interest_rate, discount_type, discount_amount) :
            calcPrice(cost_price, interest_rate, null, null);

            const finalPrice = price * quantity;

            return (
                <div className="flex justify-center">
                    <Money
                        price={finalPrice}
                        moneyClassName="text-[14px] md:text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "delete-cart-item",
        header: () => <div className={cn(headerClassName, "text-right")}>Xóa</div>,
        cell: ({ row, table }) => {
            const { id, product_id } = row?.original;
            const moreData = table?.options?.meta?.moreData;

            return (
                <CartDeleteItem
                    cartItemId={id}
                    productId={product_id}
                    moreData={moreData}
                />
            )
        }
    },
];

export default cartColumns;