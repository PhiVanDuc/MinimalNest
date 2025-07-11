"use server"

import fetchHelper from "../fetch-helper/fetch-helper";

const getPublicColor = async () => {
    try {
        const { response, result } = await fetchHelper.get(`/public_colors`);
        return { response, result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1
            },
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách đơn hàng!"
            }
        };
    }
}

export { getPublicColor }