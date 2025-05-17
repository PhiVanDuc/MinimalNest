"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getRoles = async (page) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/roles?page=${page}`);
        return { response, roles: result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1 // Lỗi không xác định
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy các vai trò!"
            }
        };
    }
}

const getRole = async (slug) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/roles/${slug}`);
        return { response, role: result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1 // Lỗi không xác định
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy vai trò!"
            }
        };
    }
}

const addRole = async (data) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/roles`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm vai trò!"
        }
    }
}

const editRole = async (data, slug) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/roles/${slug}`,
            { body: JSON.stringify(data) }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa vai trò!"
        }
    }
}

const deleteRole = async (slug) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/roles/${slug}`);
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa vai trò!"
        }
    }
}

export { getRoles, getRole, addRole, editRole, deleteRole };