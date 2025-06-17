"use client"

import ReturnGoodsHeader from "./return-goods-header";
import ReturnGoodsList from "./return-goods-list";

export default function ReturnGoodsClient({ returnGoods }) {
    return (
        <div className="w-full space-y-[40px]">
            <ReturnGoodsHeader />
            <ReturnGoodsList
                returnGoods={returnGoods}
            />
        </div>
    )
}
