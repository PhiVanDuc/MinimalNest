"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { FiTrash } from "react-icons/fi";

import { toast } from "sonner";
import { deleteCartItem } from "@/lib/api/server-action/cart";
import { deleteCartItemId } from "@/redux/slices/cart-products/cart-item-ids-slice";

export default function CartDeleteItem({
    cartItemId,
    moreData
}) {
    const dispatch = useDispatch();
    const [submitting, setSubmitting] = useState(false);

    const handleDeleteItem = async () => {
        if (submitting) return;
        setSubmitting(true);

        const deleteCart = await deleteCartItem(cartItemId);
        const message = deleteCart?.message;

        if (deleteCart?.success) {
            toast.success(message);

            const index = moreData?.productsArray?.fields?.findIndex(item => item.id === cartItemId);
            if (index !== -1) {
                moreData?.productsArray.remove(index);
            }

            dispatch(deleteCartItemId(cartItemId));

            moreData?.setCart(prev => ({
                ...prev,
                cart_items: prev?.cart_items?.filter(item => item.id !== cartItemId)
            }));
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