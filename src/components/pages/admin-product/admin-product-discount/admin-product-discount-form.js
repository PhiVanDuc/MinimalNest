"use client"

import AdminProductDiscountApplyAll from "./admin-product-discount-apply-all";
import AdminProductDiscountType from "./admin-product-discount-type";
import AdminProductDiscountCategory from "./admin-product-discount-category";
import AdminProductDiscountLivingSpace from "./admin-product-discount-living-space";
import AdminProductDiscountName from "./admin-product-discount-name";
import AdminProductDiscountProductType from "./admin-product-discount-product-type";

export default function AdminProductDiscountForm({ form, formArray, index, data, setDiscountSelected }) {
    return (
        <div className="rounded-[10px] bg-white space-y-[20px] p-[20px]">
            <AdminProductDiscountApplyAll
                form={form}
                formArray={formArray}
                index={index}
                setDiscountSelected={setDiscountSelected}
            />

            <AdminProductDiscountProductType
                form={form}
                index={index}
                productTypes={data?.productTypes}
            />

            <AdminProductDiscountCategory
                form={form}
                index={index}
                categories={data?.categories}
            />

            <AdminProductDiscountLivingSpace
                form={form}
                index={index}
                livingSpaces={data?.livingSpaces}
            />

            <AdminProductDiscountName
                form={form}
                index={index}
            />

            <AdminProductDiscountType
                form={form}
                index={index}
            />
        </div>
    )
}