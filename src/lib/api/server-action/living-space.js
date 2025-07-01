"use server"

import fetchHelper from "../fetch-helper/fetch-helper";

const getLivingSpaces = async () => {
    try {
        const { response, result } = await fetchHelper.get(`/living_spaces`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy các không gian sống!"
            }
        };
    }
}

export { getLivingSpaces };