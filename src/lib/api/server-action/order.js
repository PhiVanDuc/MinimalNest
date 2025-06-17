"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getAdminOrders = async ({ page = 1, status = "all", from = "", to = "" }) => {
    try {
        const queryParams = new URLSearchParams();

        queryParams.append("page", page);
        if (status) queryParams.append("status", status);
        if (from) queryParams.append("from", from);
        if (to) queryParams.append("to", to);

        const queryString = queryParams.toString();
        const { response, result } = await fetchHelperAuth.get(`/orders/admin?${queryString}`);

        return { response, result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách đơn hàng!"
            }
        };
    }
}

const getOrders = async (accountId, status = "all") => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/orders/${accountId}?status=${status}`);
        return { response, result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách đơn hàng!"
            }
        };
    }
}

const createOrder = async (data) => {
    try {
        const { result } = await fetchHelperAuth.post(
            "/orders",
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm tạo đơn hàng!"
        }
    }
}

const updateStatusOrders = async (data) => {
    try {
        const { result } = await fetchHelperAuth.patch(
            "/orders/admin",
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);
        
        return {
            success: false,
            message: "Lỗi gọi hàm cập nhật trạng thái các đơn hàng!"
        }
    }
}

export { getAdminOrders, getOrders, createOrder, updateStatusOrders }