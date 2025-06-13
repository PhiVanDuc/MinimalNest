"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { FiTrash } from "react-icons/fi";

import { toast } from "sonner";
import { deleteCartItem } from "@/lib/api/server-action/cart";
import { decreaseQuantity } from "@/redux/slices/cart-products/cart-quantity-slice";

export default function CartDeleteItem({
    cartItemId,
    moreData
}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [submitting, setSubmitting] = useState(false);

    const handleDeleteItem = async () => {
        if (submitting) return;
        setSubmitting(true);

        const deleteCart = await deleteCartItem(cartItemId);
        const message = deleteCart?.message;

        if (deleteCart?.success) {
            toast.success(message);

            // Xóa cart item trong dữ liệu hiệu tại
            const leftCartItems = moreData?.productsArray?.fields?.filter(item => item?.id !== cartItemId);
            moreData?.form.setValue("products", leftCartItems);

            // Giảm số lượng trọng cart
            dispatch(decreaseQuantity(cartItemId));
            router.refresh();
        }
        else toast.error(message);

        setSubmitting(false);
    }

    return (
        <div className="flex justify-end">
            <div
                className="w-[25px] aspect-square flex items-center justify-center cursor-pointer"
                onClick={handleDeleteItem}
            >
                <FiTrash
                    size={20} className="text-red-500"
                />
            </div>
        </div>
    )
}