"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const createPaymentIntent = async (amount) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/payment/payment_intent`,
            { body: JSON.stringify({ amount }) }
        );
        return result
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm tạo đơn thanh toán đang chờ xử lý từ stripe!"
        }
    }
}

export { createPaymentIntent };