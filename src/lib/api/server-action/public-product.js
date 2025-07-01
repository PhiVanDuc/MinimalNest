import fetchHelper from "../fetch-helper/fetch-helper";

const getPublicProducts = async (data) => {
    try {
        const query = new URLSearchParams();
        if (data?.limit) query.append("limit", data.limit);
        if (data?.productType) query.append("productType", data.productType);

        const { response, result } = await fetchHelper.get(
            `/public_products?${query.toString()}`
        );
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách sản phẩm!"
            }
        };
    }
}

const getAllPublicProducts = async (data) => {
    try {
        const query = new URLSearchParams();

        for (const key in data) {
            if (data[key] !== undefined && data[key] !== null) {
                query.append(key, data[key]);
            }
        }

        const { response, result } = await fetchHelper.get(
            `/public_products/all?${query.toString()}`
        );
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách sản phẩm!"
            }
        };
    }
}

const getPublicProduct = async (slug) => {
    try {
        const { response, result } = await fetchHelper.get(
            `/public_products/${slug}`
        );
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy sản phẩm!"
            }
        };
    }
}

export { getPublicProducts, getAllPublicProducts, getPublicProduct }