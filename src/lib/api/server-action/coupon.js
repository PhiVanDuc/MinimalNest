"use server"

const { default: fetchHelperAuth } = require("../fetch-helper/fetch-helper-auth");

const getCoupons = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/coupons?page=${data?.page || 1}&code=${data?.code}${ data?.all ? `&all=${data?.all}` : "" }`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy các phiếu giảm giá!"
            }
        }
    }
}

const getCoupon = async (couponId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/coupons/${couponId}`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy phiếu giảm giá!"
            }
        };
    }
}

const addCoupon = async (data) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/coupons`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm phiếu giảm giá!"
        }
    }
}

const editCoupon = async (data, couponId) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/coupons/${couponId}`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa phiếu giảm giá!"
        }
    }
};

const deleteCoupon = async (couponId) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/coupons/${couponId}`);
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm xóa phiếu giảm giá!"
        }
    }
}

export { getCoupons, getCoupon, addCoupon, editCoupon, deleteCoupon };