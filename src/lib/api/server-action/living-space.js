"use server"

import fetchHelper from "../fetch-helper/fetch-helper";

const getLivingSpaces = async () => {
    try {
        const { response, result } = await fetchHelper.get(`/living_spaces`);
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
                message: "Lỗi gọi hàm lấy các không gian sống!"
            }
        };
    }
}

export { getLivingSpaces };