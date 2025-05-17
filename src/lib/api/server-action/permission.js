"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getPermissions = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/permissions`);
        return { response, permissions: result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1 // Lỗi không xác định
            },
            permissions: {
                success: false,
                message: "Lỗi gọi hàm lấy các quyền!"
            }
        };
    }
}

export { getPermissions };