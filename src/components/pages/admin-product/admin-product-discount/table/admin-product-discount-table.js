"use client"

import { useState } from "react";

import CustomTableUtil from "@/components/customs/admin/custom-table-util";
import { Button } from "@/components/ui/button";

import columns from "./columns";
import { toast } from "sonner";
import { getFilterProducts } from "@/lib/api/server-action/general-discount";

export default function AdminProductDiscountTable({
    form,
    formArray,
    index,
    currentDiscount,
    products,
    setProducts
}) {
    const [submitting, setSubmitting] = useState(false);

    const handleFilterProduct = async () => {
        setSubmitting(true);

        const filterProducts = await getFilterProducts({
            applyAll: currentDiscount?.applyAll,
            productTypeIds: currentDiscount?.productTypeIds,
            categoryIds: currentDiscount?.categoryIds,
            livingSpaceIds: currentDiscount?.livingSpaceIds
        });
        
        if (filterProducts?.success) {
            const products = filterProducts?.data?.products || [];
            setProducts(products);

            const allProductIds = products
                ?.filter(p => !p?.general_discount || p?.general_discount?.id === currentDiscount?.rootId)
                ?.map(p => p?.id);
            form.setValue(`discounts.${index}.productIds`, allProductIds || []);
        }
        else toast.error(filterProducts?.message);

        setSubmitting(false);
    }

    return (
        <div className="p-[20px] rounded-[10px] bg-white space-y-[20px]">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-[18px] font-semibold">Sản phẩm.</h2>
                    <Button
                        type="button"
                        onClick={handleFilterProduct}
                        disabled={submitting}
                    >
                        {
                            submitting ? "Đang sàng lọc . . ." : "Sàng lọc"
                        }
                    </Button>
                </div>

                <p className="text-[14px] font-medium text-darkBland">Sàng lọc để hiển thị danh sách và tương tác với những sản phẩm phù hợp.</p>
            </div>

            {
                products?.length > 0 &&
                <CustomTableUtil
                    data={products || []}
                    columns={columns}
                    pagination={true}
                    filter={true}
                    filterCol="product"
                    moreData={{
                        form,
                        formArray,
                        index,
                        currentDiscount,
                        products
                    }}
                />
            }
        </div>
    )
}