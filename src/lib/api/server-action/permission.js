"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getPermissions = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/permissions`);
        return { status: response?.status, permissions: result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            permissions: {
                success: false,
                message: "Lỗi gọi hàm lấy các quyền!"
            }
        };
    }
}

export { getPermissions };