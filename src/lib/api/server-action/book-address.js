"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getBookAddresses = async (accountId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/book_addresses/${accountId}`);
        return { status: response?.status || -1, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy danh sách sổ địa chỉ!"
            }
        };
    }
}

const addBookAddress = async (data, accountId) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/book_addresses/${accountId}`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm địa chỉ!"
        }
    }
}

const editBookAddress = async (data, accountId) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/book_addresses/${accountId}`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa địa chỉ!"
        }
    }
}

const deleteBookAddress = async (accountId) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/book_addresses/${accountId}`);
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm xóa địa chỉ!"
        }
    }
}

export { getBookAddresses, addBookAddress, editBookAddress, deleteBookAddress }