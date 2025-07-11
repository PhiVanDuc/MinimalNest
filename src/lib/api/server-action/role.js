"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getRoles = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/roles?role=${data?.role}&page=${data?.page}${data?.all ? `&all=${data?.all}` : ""}`);
        return { status: response?.status, roles: result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy các vai trò!"
            }
        };
    }
}

const getRole = async (slug) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/roles/${slug}`);
        return { status: response?.status, role: result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
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
            message: "Lỗi gọi hàm xóa vai trò!"
        }
    }
}

export { getRoles, getRole, addRole, editRole, deleteRole };