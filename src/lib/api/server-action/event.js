"use server"

const { default: fetchHelperAuth } = require("../fetch-helper/fetch-helper-auth");

const getEvents = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/events?page=${data?.page || 1}&event=${data?.event}${ data?.all ? `&all=${data?.all}` : "" }${ data?.isDiscount ? `&is_discount=${data?.isDiscount}` : "" }`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy các sự kiện!"
            }
        }
    }
}

const getEvent = async (slug) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/events/${slug}`);
        return { status: response?.status, result };
    }
    catch(error) {
        console.log(error);

        return {
            status: -1,
            result: {
                success: false,
                message: "Lỗi gọi hàm lấy sự kiện!"
            }
        };
    }
}

const addEvent = async (formData) => {
    try {
        const { result } = await fetchHelperAuth.post(
            `/events`,
            { body: formData }
        );
        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm thêm sự kiện!"
        }
    }
}

const editEvent = async (formData, slug) => {
    try {
        const { result } = await fetchHelperAuth.put(
            `/events/${slug}`,
            { body: formData }
        );

        return result;
    }
    catch(error) {
        console.log(error);

        return {
            success: false,
            message: "Lỗi gọi hàm chỉnh sửa sự kiện!"
        }
    }
}

const deleteEvent = async (slug) => {
    try {
        const { result } = await fetchHelperAuth.delete(`/events/${slug}`);
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

export { getEvents, getEvent, addEvent, editEvent, deleteEvent };