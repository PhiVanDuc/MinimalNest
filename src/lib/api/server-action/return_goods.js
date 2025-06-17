"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getReturnGoods = async (accountId, status = "all") => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/return_goods/${accountId}?status=${status}`);
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
                message: "Lỗi gọi hàm lấy danh yêu cầu hoản trả hàng!"
            }
        };
    }
}

const getAdminReturnGoods = async ({ page = 1, status = "all", from = "", to = "" }) => {
    try {
        const queryParams = new URLSearchParams();

        queryParams.append("page", page);
        if (status) queryParams.append("status", status);
        if (from) queryParams.append("from", from);
        if (to) queryParams.append("to", to);

        const queryString = queryParams.toString();
        const { response, result } = await fetchHelperAuth.get(`/return_goods/admin?${queryString}`);

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
                message: "Lỗi gọi hàm lấy danh sách yêu cầu trả hàng!"
            }
        };
    }
}

const getDetailAdminReturnGoods = async (returnGoodsId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/return_goods/admin/${returnGoodsId}`);
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
                message: "Lỗi gọi hàm lấy chi tiết đơn hoàn trả hàng!"
            }
        };
    }
}

const addReturnGoods = async (formData) => {
    try {
        const { result } = await fetchHelperAuth.post(
            "/return_goods",
            { body: formData }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm yêu cầu trả hàng!"
        }
    }
}

const updateAdminReturnGoods = async (data, returnGoodsId) => {
    try {
        const { result } = await fetchHelperAuth.patch(
            `/return_goods/admin/${returnGoodsId}`,
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm cập nhật đơn hoàn trả hàng!"
        }
    }
}

const refundAdminReturnGoods = async (returnGoodsId) => {
    try {
        const { result } = await fetchHelperAuth.patch(`/return_goods/admin/refund/${returnGoodsId}`);
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm cập nhật đơn hoàn trả hàng!"
        }
    }
}

export { getReturnGoods, getAdminReturnGoods, getDetailAdminReturnGoods, addReturnGoods, updateAdminReturnGoods, refundAdminReturnGoods }