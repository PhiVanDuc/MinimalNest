"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getReservedOrder = async (accountId, reservedOrderId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/reserved_orders?accountId=${accountId}&reservedOrderId=${reservedOrderId}`);
        return { status: response?.status, result };
    }
    catch(error) {
        return {
            status: -1,
            result: {
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