"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";


const getColors = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/colors?color=${data?.color}&page=${data?.page}${data?.all ? `&all=${data?.all}` : ""}`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy các màu sắc!"
            }
        };
    }
}

const getColor = async (colorId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/colors/${colorId}`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy màu sắc!"
            }
        };
    }
}

const addColor = async (data) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/colors`,
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm màu sắc!"
        }
    }
}

const editColor = async (data, colorId) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/colors/${colorId}`,
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa màu sắc!"
        }
    }
}

const deleteColor = async (colorId) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/colors/${colorId}`);
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm xóa màu sắc!"
        }
    }
}

export { getColors, getColor, addColor, editColor, deleteColor };