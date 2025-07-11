import fetchHelper from "../fetch-helper/fetch-helper";

const getProductTypes = async () => {
    try {
        const { response, result } = await fetchHelper.get(
            "/product_types",
            {
                cacheOff: true,
                next: {
                    revalidate: 86400,
                    tags: ["fetch_public_get_product_types"]
                }
            }
        );
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy các loại sản phẩm!"
            }
        };
    }
}

export { getProductTypes }