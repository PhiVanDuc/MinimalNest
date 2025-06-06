"use client"

export default function InventoryBasicAnalysis({ analysis }) {
    return (
        <div className="p-[20px] rounded-[10px] bg-white w-full space-y-[30px]">
            <div className="space-y-[10px]">
                <h2 className="flex items-center gap-[10px] text-[16px] font-medium">
                    <span className="text-[24px] font-semibold">{analysis?.totalItems}</span>
                    <span>Sản phẩm</span>
                </h2>

                <div className="flex items-center gap-[5px]">
                    {
                        (analysis?.percentages?.manyInStock > 0 && !!analysis?.percentages?.manyInStock) &&
                        (
                            <div
                                className="rounded-full h-[8px] bg-green-500"
                                style={{
                                    width: `${analysis?.percentages?.manyInStock}%`
                                }}
                            />
                        )
                    }

                    {
                        (analysis?.percentages?.inStock > 0 && !!analysis?.percentages?.inStock) &&
                        (
                            <div
                                className="rounded-full h-[8px] bg-amber-400"
                                style={{
                                    width: `${analysis?.percentages?.inStock}%`
                                }}
                            />
                        )
                    }

                    {
                        (analysis?.percentages?.lowStock > 0 && !!analysis?.percentages?.lowStock) &&
                        (
                            <div
                                className="rounded-full h-[8px] bg-red-500"
                                style={{
                                    width: `${analysis?.percentages?.lowStock}%`
                                }}
                            />
                        )
                    }
                </div>
            </div>

            <div className="flex gap-[20px]">
                <div className="flex items-center gap-[10px]">
                    <div className="w-[15px] h-[15px] rounded-full bg-green-500" />
                    <p className="flex items-center gap-[6px]">
                        <span className="text-[13px] text-darkMedium font-medium">Còn nhiều hàng:</span>
                        <span className="text-[14px] text-darkBold font-semibold">{analysis?.counts?.manyInStock} sản phẩm</span>
                    </p>
                </div>

                <div className="flex items-center gap-[10px]">
                    <div className="w-[15px] h-[15px] rounded-full bg-amber-400" />
                    <p className="flex items-center gap-[6px]">
                        <span className="text-[13px] text-darkMedium font-medium">Còn hàng:</span>
                        <span className="text-[14px] text-darkBold font-semibold">{analysis?.counts?.inStock} sản phẩm</span>
                    </p>
                </div>

                <div className="flex items-center gap-[10px]">
                    <div className="w-[15px] h-[15px] rounded-full bg-red-500" />
                    <p className="flex items-center gap-[6px]">
                        <span className="text-[13px] text-darkMedium font-medium">Sắp hết:</span>
                        <span className="text-[14px] text-darkBold font-semibold">{analysis?.counts?.lowStock} sản phẩm</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
