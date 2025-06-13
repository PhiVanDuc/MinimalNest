"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getReservedOrder = async (reservedOrderId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/reserved_orders/${reservedOrderId}`);
        return { response, result };
    }
    catch(error) {
        return {
            response: {
                status: -1
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy đơn hàng tạm thời!"
            }
        };
    }
}

const createReservedOrder = async (data = {}) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/reserved_orders`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm tạo đơn hàng tạm thời!"
        }
    }
}

export { getReservedOrder, createReservedOrder }