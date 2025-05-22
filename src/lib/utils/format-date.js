const formatDate = (isoDate) => {
    if (!isoDate) return "Lỗi chuyển đổi ngày tháng năm!";

    const date = new Date(isoDate);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `Ngày ${day} tháng ${month} năm ${year}`;
}

export const compareTime = (startIsoDate, endIsoDate) => {
    if (!startIsoDate || !endIsoDate) return {
        label: "Lỗi so sánh thời gian!",
        color: ""
    };

    const startDate = new Date(startIsoDate);
    const endDate = new Date(endIsoDate);
    const now = new Date();

     if (now < startDate) {
        return {
            label: "Chưa hoạt động",
            color: "text-yellow-600 bg-yellow-600/10 border border-yellow-600/60"
        }
    } else if (now >= startDate && now < endDate) {
        return {
            label: "Đang hoạt động",
            color: "text-green-600 bg-green-600/10 border border-green-600/60"
        }
    } else {
        return {
            label: "Hết hạn",
            color: "text-red-600 bg-red-600/10 border border-red-600/60"
        }
    }
}

export default formatDate;