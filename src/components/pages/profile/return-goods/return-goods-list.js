"use client"

import ReturnGoodsItem from "./return-goods-item";

export default function ReturnGoodsList({ returnGoods }) {
    return (
        <div className="space-y-[20px]">
            {
                returnGoods?.length > 0 ?
                returnGoods?.map(returnGood => {
                    return (
                        <ReturnGoodsItem
                            key={returnGood?.id}
                            returnGood={returnGood}
                        />
                    )
                }) :
                <p className="text-[14px] md:text-[15px] text-darkMedium text-center italic">Bạn chưa có yêu cầu trả hàng nào!</p>
            }
        </div>
    )
}
