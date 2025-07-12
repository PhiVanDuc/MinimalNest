"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getTotalProducts = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/dashboard/total_products`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy tổng số sản phẩm!"
            }
        }
    }
}

const getTotalOrders = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/dashboard/total_orders`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy tổng số đơn hàng!"
            }
        }
    }
}

const getTotalRevenue = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/dashboard/total_revenue`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy tổng doanh thu!"
            }
        }
    }
}

const getTotalRevenueDetail = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/dashboard/total_revenue_detail`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy tổng doanh thu chi tiết!"
            }
        }
    }
}

const getOrderStatusQuantities = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/dashboard/order_status_quantities`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy tổng doanh thu chi tiết!"
            }
        }
    }
}

const getVipCustomers = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/dashboard/vip_customers`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách các khách hàng quen!"
            }
        }
    }
}

const getBestSellerProducts = async () => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/dashboard/best_seller_products`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách các khách hàng quen!"
            }
        }
    }
}

export { getTotalProducts, getTotalOrders, getTotalRevenue, getTotalRevenueDetail, getOrderStatusQuantities, getVipCustomers, getBestSellerProducts }