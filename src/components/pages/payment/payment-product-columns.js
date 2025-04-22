"use client"

import Money from "@/components/customs/money";

const headerClassName = "text-[15px] text-darkBold font-medium text-center";

const paymentProductColumns = () => {
    return (
        [
            {
                accessorKey: "product",
                header: () => <div className={`${headerClassName}`} style={{ textAlign: "left" }}>Sản phẩm</div>,
                cell: ({ row }) => {
                    const data = row?.original;
        
                    return (
                        <div className="flex items-center gap-x-[15px]">
                            <div className="shrink-0 w-[130px] aspect-square rounded-[10px] bg-slate-200" />
        
                            <div className="space-y-[20px] w-full">
                                <header className="space-y-[5px]">
                                    <h2 className="text-[16px] md:text-[17px] font-semibold text-darkBold max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] truncate">{data?.productName}</h2>
                                    <Money
                                        price={data?.singlePrice}
                                        moneyClassName="text-[13px] md:text-[14px]"
                                        currencyClassName="text-[11px] md:text-[12px]"
                                    />
                                </header>
        
                                <div className="space-y-[5px] w-full">
                                    <div className="flex items-center gap-x-[15px]">
                                        <p className="shrink-0 text-[13px] text-darkBland font-medium whitespace-nowrap w-[55px]">Màu sắc</p>
                                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                                        <p className="text-[14px] text-darkBold font-medium whitespace-nowrap">{data?.color?.label}</p>
                                    </div>
        
                                    <div className="flex items-center gap-x-[15px]">
                                        <p className="shrink-0 text-[13px] text-darkBland font-medium whitespace-nowrap w-[55px]">Kích cỡ</p>
                                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                                        <p className="text-[14px] text-darkBold font-medium whitespace-nowrap">{data?.size?.label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            },
            {
                accessorKey: "quantity",
                header: () => <div className={headerClassName}>Số lượng</div>,
                cell: ({ row }) => {
                    const data = row?.original;
        
                    return (
                        <p className="text-[14px] md:text-[15px] font-medium text-center">x2</p>
                    )
                }
            },
            {
                accessorKey: "singlePrice/totalPrice",
                header: () => <div className={headerClassName} style={{ textAlign: "right" }}>Tổng tiền</div>,
                cell: ({ row }) => {
                    const data = row?.original;
        
                    return (
                        <Money
                            price={data?.totalPrice}
                            moneyClassName="text-[14px] md:text-[15px] text-right"
                        />
                    )
                }
            }
        ]
    );
}

export default paymentProductColumns;