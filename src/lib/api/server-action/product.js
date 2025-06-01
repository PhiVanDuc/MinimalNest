"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getProduct = async (slug) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/products/${slug}`);
        return { response, result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy sản phẩm!"
            }
        };
    }
}

const addProduct = async (formData) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/products`,
            { body: formData }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm sản phẩm!"
        }
    }
}

const editProduct = async (slug, formData) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/products/${slug || ""}`,
            { body: formData }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa sản phẩm!"
        }
    }
}

export { getProduct, addProduct, editProduct };