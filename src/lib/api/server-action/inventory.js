"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const analysisInventory = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/inventories/analysis`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy phân tích kho hàng thất bại!"
            }
        };
    }
} 

const getInventories = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/inventories?product=${data?.product}&page=${data?.page}`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách số lượng sản phẩm!"
            }
        };
    }
}

const editInventory = async (id, data) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/inventories/${id}`,
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm cập nhật số lượng sản phẩm!"
        }
    }
}

const addInventoriesExcel = async (formData) => {
    try {
        const { result } = await fetchHelperAuth.post(`/inventories/excel`, {
            body: formData
        });
        return result
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm số lượng sản phẩm qua excel!"
        }
    }
}

export { analysisInventory, getInventories, editInventory, addInventoriesExcel };