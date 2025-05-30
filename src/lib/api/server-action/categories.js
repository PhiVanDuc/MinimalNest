"use server"

import fetchHelper from "../fetch-helper/fetch-helper";

const getCategories = async () => {
    try {
        const { response, result } = await fetchHelper.get(`/categories`);
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