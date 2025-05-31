"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

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

export { addProduct };