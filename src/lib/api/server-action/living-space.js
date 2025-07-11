"use server"

import fetchHelper from "../fetch-helper/fetch-helper";

const getLivingSpaces = async () => {
    try {
        const { response, result } = await fetchHelper.get(
            `/living_spaces`,
            {
                cacheOff: true,
                next: { 
                    revalidate: 86400,
                    tags: ['fetch_public_get_living_spaces']
                }
            }
        );
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy các không gian sống!"
            }
        };
    }
}

export { getLivingSpaces };