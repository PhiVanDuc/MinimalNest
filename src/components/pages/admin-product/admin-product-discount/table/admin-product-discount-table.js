"use client"

import CustomTableUtil from "@/components/customs/admin/custom-table-util";
import columns from "./columns";
import { Button } from "@/components/ui/button";

export default function AdminProductDiscountTable({
    form,
    formArray,
    index,
    currentDiscount
}) {
    return (
        <div className="p-[20px] rounded-[10px] bg-white space-y-[20px]">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-[18px] font-semibold">Sản phẩm.</h2>
                    <Button>
                        Sàng lọc
                    </Button>
                </div>

                <p className="text-[14px] font-medium text-darkBland">Sàng lọc để hiển thị danh sách và tương tác với những sản phẩm phù hợp.</p>
            </div>

            <CustomTableUtil
                columns={columns}
                pagination={true}
                filter={true}
                filterCol="product"
                moreData={{
                    form,
                    formArray,
                    index,
                    currentDiscount
                }}
            />
        </div>
    )
}
