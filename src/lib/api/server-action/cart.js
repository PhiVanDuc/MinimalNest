"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";
import { revalidateTag } from "next/cache";

const getCart = async (accountId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(
            `/carts/${accountId}?cart=true`,
            {
                turnOnCache: true,
                next: {
                    revalidate: 86400,
                    tags: ["fetch_get_cart"]
                }
            }
        );
        return { status: response?.status, result }
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy giỏ hàng!"
            }
        };
    }
}

const addCart = async (data) => {
    try {
        const { result } = await fetchHelperAuth.post(
            "/carts?cart=true",
            { body: JSON.stringify(data) }
        );

        revalidateTag("fetch_get_cart");
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm giỏ hàng!"
        }
    }
}

const deleteCartItem = async (cartItemId) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/carts/${cartItemId}?cart=true`);
        
        revalidateTag("fetch_get_cart");
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm xóa sản phẩm trong giỏ hàng!"
        }
    }
}

export { getCart, addCart, deleteCartItem };