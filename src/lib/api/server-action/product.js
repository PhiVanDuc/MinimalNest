"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getProducts = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/products?product=${data?.product}&page=${data?.page}`);
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
                message: "Lỗi gọi hàm lấy danh sách sản phẩm!"
            }
        };
    }
}

const getProduct = async (slug) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/products/${slug}`);
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
                message: "Lỗi gọi hàm lấy sản phẩm!"
            }
        };
    }
}

const addProduct = async (formData) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/products`,
            { body: formData }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm sản phẩm!"
        }
    }
}

const addProductsExcel = async (formData) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/products/excel`,
            { body: formData }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm các sản phẩm với excel!"
        }
    }
}

const editProduct = async (slug, formData) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/products/${slug || ""}`,
            { body: formData }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa sản phẩm!"
        }
    }
}

const deleteProduct = async (productId) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/products/${productId}`);
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm xóa sản phẩm!"
        }
    }
}

export { getProducts, getProduct, addProduct, addProductsExcel, editProduct, deleteProduct };