"use server"

import fetchHelperAuth from "../fetch-helper/fetch-helper-auth";

const getAccounts = async (page, name) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/accounts?page=${page}&name=${name}`);
        return { response, accounts: result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1
            },
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
        return { response, account: result };
    }
    catch(error) {
        console.log(error);

        return {
            response: {
                status: -1
            },
            roles: {
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

export { getAccounts, getAccount, editAccount };