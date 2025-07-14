"use server"

import { revalidateTag } from "next/cache";
import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getProducts = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/products?product=${data?.product}&page=${data?.page}`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách sản phẩm!"
            }
        };
    }
}

const getProduct = async (slug) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/products/${slug}`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
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

        revalidateTag("fetch_get_cart");
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

        revalidateTag("fetch_get_cart");
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

        revalidateTag("fetch_get_cart");
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