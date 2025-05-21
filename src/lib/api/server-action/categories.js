"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getCategories = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/categories`);
        return { response, result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1 // Lỗi không xác định
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy các danh mục!"
            }
        };
    }
}

export { getCategories };