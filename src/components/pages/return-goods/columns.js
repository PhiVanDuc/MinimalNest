"use client"

import Image from "next/image";
import Money from "@/components/customs/money";
import ReturnGoodsForm from "./return-goods-form";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";

import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";
import { convertToNumberDb } from "@/lib/utils/format-currency";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "expander",
        header: () => {
            return (
                <></>
            )
        },
        cell: ({ row, table }) => {
            const { form } = table?.options?.meta?.moreData;
            const product = row.original;

            const selectedProducts = form.watch("products") || [];
            const isChecked = selectedProducts.some((p) => p.id === product.id);

            const toggleProduct = (checked) => {
                const current = form.getValues("products") || [];

                if (checked) {
                    const newList = [
                        ...current,
                        {
                            ...product,
                            proof_imgs: [],
                            message: "Lý do khách muốn trả hàng . . .",
                            return_quantity: 1
                        }
                    ];
                    form.setValue("products", newList);
                } else {
                    const newList = current.filter(p => p.id !== product.id);
                    form.setValue("products", newList);
                }

                row.toggleExpanded(checked);
            }

            return (
                <div className="w-fit">
                    <Checkbox
                        checked={isChecked}
                        onCheckedChange={toggleProduct}
                    />
                </div>
            )
        },
        expandedContent: ({ row, table }) => {
            const moreData = table?.options?.meta?.moreData;
            const form = moreData?.form;

            const product = row?.original;

            return (
                <ReturnGoodsForm
                    form={form}
                    product={product}
                />
            )
        }
    },
    {
        accessorKey: "product",
        header: () => {
            return (
                <h3 className={cn(headerClassName)}>Sản phẩm</h3>
            )
        },
        cell: ({ row }) => {
            const product = row.original;

            return (
                <div className="space-y-[10px] min-w-[300px]">
                    <div className="flex items-center gap-[20px]">
                        <div className="shrink-0 w-[80px] aspect-square rounded-[8px] overflow-hidden bg-slate-300 relative">
                            {
                                product?.image ?
                                <Image
                                    src={product.image}
                                    alt={product.product_name}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                    priority={false}
                                /> : 
                                <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />
                            }
                        </div>

                        <TooltipProvider>
                            <div className="space-y-[5px]">
                                <h4 className="text-[15px] font-semibold">{product?.product_name}</h4>
                                
                                <div className="flex items-center gap-[10px]">
                                    <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                    <Tooltip
                                        delayDuration={100}
                                    >
                                        <TooltipTrigger asChild>
                                            <span
                                                className="shrink-0 w-[15px] aspect-square rounded-full outline outline-[1.5px] outline-offset-2 outline-neutral-300"
                                                style={{
                                                    background: `${product?.code_color}`
                                                }}
                                            />
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            {product?.color}
                                        </TooltipContent>
                                    </Tooltip>
                                </div>

                                <div className="flex items-center gap-[10px]">
                                    <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                    <Tooltip
                                        delayDuration={100}
                                    >
                                        <TooltipTrigger asChild>
                                            <p className="text-[12px] text-darkMedium font-semibold px-[10px] py-[2px] rounded-[2px] bg-neutral-200">
                                                {product?.size}
                                            </p>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            {product?.size_desc}
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </TooltipProvider>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá</h2>,
        cell: ({ row }) => {
            const product = row.original;

            return (
                <div className="flex justify-center">
                    <Money
                        price={
                            product?.price_discount ?
                            convertToNumberDb(product?.price_discount) :
                            convertToNumberDb(product?.price)
                        }
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "quantity",
        header: () => {
            return (
                <h3 className={cn(headerClassName, "text-center")}>Số lượng</h3>
            )
        },
        cell: ({ row }) => {
            const product = row.original;

            return (
                <p className="text-[14px] font-medium text-center">x{product?.quantity}</p>
            )
        }
    }
];

export default columns;