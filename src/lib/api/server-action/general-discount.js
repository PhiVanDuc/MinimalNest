"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getGeneralDiscounts = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/general_discounts`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy các giảm giá chung!"
            }
        };
    }
}

const addGeneralDiscount = async (data) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/general_discounts`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm giảm giá chung!"
        }
    }
}

const editGeneralDiscount = async (data, id) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/general_discounts/${id}`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa giảm giá chung!"
        }
    }
}

const deleteGeneralDiscount = async (id) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/general_discounts/${id}`);
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm xóa giảm giá chung!"
        }
    }
}

const getFilterProducts = async (data) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/general_discounts/filter_products`,
            {
                body: JSON.stringify(data)
            }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm lấy danh sách sản phẩm!"
        }
    }
}

export { getGeneralDiscounts, addGeneralDiscount, editGeneralDiscount, deleteGeneralDiscount, getFilterProducts };