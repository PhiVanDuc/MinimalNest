"use server"

import fetchHelper from "../fetch-helper/fetch-helper";

const getCategories = async () => {
    try {
        const { response, result } = await fetchHelper.get(`/categories`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy các danh mục!"
            }
        };
    }
}

export { getCategories };