"use client"

import Money from "@/components/customs/money";
import CellStock from "./cell-stock";

const columns = [
    {
        id: "product",
        accesserKey: "product",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium">Sản phẩm</h3>,
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-[10px]">
                    <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />

                    <div className="space-y-[5px]">
                        <h4 className="text-[16px] font-medium">Tên sản phẩm.</h4>
                        
                        <div className="flex items-center gap-[10px]">
                            <p className="text-[12px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <p className="text-[12px] text-darkBold font-semibold">Màu trắng</p>
                        </div>

                        <div className="flex items-center gap-[10px]">
                            <p className="text-[12px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <p className="text-[12px] text-darkBold font-semibold">XL</p>
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        id: "price",
        accesserKey: "price",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium text-center">Giá</h3>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <Money
                        price={1999000}
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        id: "stock",
        accesserKey: "stock",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium text-center">Kho</h3>,
        cell: ({ row }) => <CellStock row={row} />
    },
];

export default columns;