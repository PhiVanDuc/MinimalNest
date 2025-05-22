"use client"

export default function InventoryBasicAnalysis() {
    return (
        <div className="p-[20px] rounded-[10px] bg-white w-full space-y-[30px]">
            <div className="space-y-[10px]">
                <h2 className="flex items-center gap-[10px] text-[16px] font-medium">
                    <span className="text-[24px] font-semibold">30</span>
                    <span>Sản phẩm</span>
                </h2>

                <div className="flex items-center gap-[5px]">
                    <div className="w-[60%] rounded-full h-[8px] bg-green-500" />
                    <div className="w-[25%] rounded-full h-[8px] bg-amber-400" />
                    <div className="w-[15%] rounded-full h-[8px] bg-red-500" />
                </div>
            </div>

            <div className="flex gap-[20px]">
                <div className="flex items-center gap-[10px]">
                    <div className="w-[15px] h-[15px] rounded-full bg-green-500" />
                    <p className="flex items-center gap-[6px]">
                        <span className="text-[13px] text-darkMedium font-medium">Còn hàng:</span>
                        <span className="text-[14px] text-darkBold font-semibold">20</span>
                    </p>
                </div>

                <div className="flex items-center gap-[10px]">
                    <div className="w-[15px] h-[15px] rounded-full bg-amber-400" />
                    <p className="flex items-center gap-[6px]">
                        <span className="text-[13px] text-darkMedium font-medium">Sắp hết hàng:</span>
                        <span className="text-[14px] text-darkBold font-semibold">5</span>
                    </p>
                </div>

                <div className="flex items-center gap-[10px]">
                    <div className="w-[15px] h-[15px] rounded-full bg-red-500" />
                    <p className="flex items-center gap-[6px]">
                        <span className="text-[13px] text-darkMedium font-medium">Hết hàng:</span>
                        <span className="text-[14px] text-darkBold font-semibold">5</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
