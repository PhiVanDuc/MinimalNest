"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getAccounts = async (page, name) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/accounts?page=${page}&name=${name}`);
        return { status: response?.status, accounts: result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            roles: {
                success: false,
                message: "Lỗi gọi hàm lấy các tài khoản!"
            }
        };
    }
}

const getAccount = async (accountId) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/accounts/${accountId}`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            account: {
                success: false,
                message: "Lỗi gọi hàm lấy tài khoản!"
            }
        };
    }
}

const editAccount = async (accountId, data) => {
    try {
        const { response, result } = await fetchHelperAuth.put(
            `/accounts/${accountId}`,
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1
            },
            roles: {
                success: false,
                message: "Lỗi gọi hàm chỉnh sửa tài khoản!"
            }
        };
    }
}

const profileChangeInfo = async (accountId, data) => {
    try {
        const { result } = await fetchHelperAuth.patch(
            `/accounts/profile/info/${accountId}`,
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thay đổi thông tin trong hồ sơ!"
        }
    }
}

const profileChangePassword = async (accountId, data) => {
    try {
        const { result } = await fetchHelperAuth.patch(
            `/accounts/profile/password/${accountId}`,
            { body: JSON.stringify(data) }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thay đổi mật khẩu trong hồ sơ!"
        }
    }
}

export { getAccounts, getAccount, editAccount, profileChangeInfo, profileChangePassword };