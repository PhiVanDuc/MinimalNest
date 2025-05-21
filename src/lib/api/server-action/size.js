"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getSizes = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/sizes?size=${data?.size}&page=${data?.page}${data?.all ? `&all=${data?.all}` : ""}`);
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
                message: "Lỗi gọi hàm lấy các kích cỡ!"
            }
        };
    }
}

const getSize = async (sizeId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/sizes/${sizeId}`);
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
                message: "Lỗi gọi hàm lấy kích cỡ!"
            }
        };
    }
}

const addSize = async (data) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/sizes`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm kích cỡ!"
        }
    }
}

const editSize = async (data, sizeId) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/sizes/${sizeId}`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa kích cỡ!"
        }
    }
}

const deleteSize = async (sizeId) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/sizes/${sizeId}`);
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm xóa kích cỡ!"
        }
    }
}

export { getSizes, getSize, addSize, editSize, deleteSize };