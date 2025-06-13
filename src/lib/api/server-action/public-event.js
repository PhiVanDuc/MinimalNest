"use server"

import fetchHelper from "../fetch-helper/fetch-helper";

const getPublicEvents = async () => {
    try {
        const { response, result } = await fetchHelper.get("/public_events");
        return { response, result }
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách sự kiện!"
            }
        };
    }
}

export { getPublicEvents }