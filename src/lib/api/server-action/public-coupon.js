import fetchHelper from "../fetch-helper/fetch-helper";

const getPublicCoupons = async (data) => {
    try {
        const query = new URLSearchParams();
        if (data?.limit) query.append("limit", data.limit);
        if (data?.page) query.append("page", data.page);

        const { response, result } = await fetchHelper.get(
            `/public_coupons?${query.toString()}`
        );
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách phiếu giảm giá!"
            }
        };
    }
}

export { getPublicCoupons };