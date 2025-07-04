"use client"

import ConsiderForm from "./consider-form";
import ConsiderOrder from "./consider-order";

export default function ConsiderClient({ returnGoods }) {
    return (
        <section className="space-y-[30px]">
            <h1 className="text-[24px] font-semibold">Xem xét trả hàng</h1>

            <div className="flex items-start gap-[20px]">
                <ConsiderOrder returnGoods={returnGoods} />
                <ConsiderForm returnGoods={returnGoods} />
            </div>
        </section>
    )
}
