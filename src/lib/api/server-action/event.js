"use server"

const { default: fetchHelperAuth } = require("../fetch-helper/fetch-helper-auth");

const getEvents = async (data) => {
    try {
        const { response, result } = await fetchHelperAuth.get(`/events?page=${data?.page || 1}&event=${data?.event}${ data?.all ? `&all=${data?.all}` : "" }`);
        return { response, result };
    }
    catch(error) {
        console.log(error);
        
        return {
            response: {
                status: -1
            },
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
                message: "Lỗi gọi hàm lấy sự kiện!"
            }
        };
    }
}

const addEvent = async (data) => {
    try {
        const formData = new FormData();
        formData.append("image", data.image); 
        formData.append("event", data.event);
        formData.append("desc", data.desc);
        formData.append("startDate", data.startDate.toISOString());
        formData.append("endDate", data.endDate.toISOString());

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

const editEvent = async (data, slug) => {
    try {
        const formData = new FormData();
        formData.append("image", data.image); 
        formData.append("event", data.event);
        formData.append("desc", data.desc);
        formData.append("startDate", data.startDate.toISOString());
        formData.append("endDate", data.endDate.toISOString());

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