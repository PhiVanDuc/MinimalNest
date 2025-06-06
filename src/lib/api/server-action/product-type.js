import fetchHelper from "../fetch-helper/fetch-helper";

const getProductTypes = async () => {
    try {
        const { response, result } = await fetchHelper.get("/product_types");
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
                message: "Lỗi gọi hàm lấy các loại sản phẩm!"
            }
        };
    }
}

export { getProductTypes }