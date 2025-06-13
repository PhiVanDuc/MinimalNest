import fetchHelper from "../fetch-helper/fetch-helper";

const getPublicCoupons = async (data) => {
    try {
        const query = new URLSearchParams();
        if (data?.limit) query.append("limit", data.limit);
        if (data?.page) query.append("page", data.page);

        const { response, result } = await fetchHelper.get(
            `/public_coupons?${query.toString()}`
        );
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
                message: "Lỗi gọi hàm lấy danh sách phiếu giảm giá!"
            }
        };
    }
}

export { getPublicCoupons };