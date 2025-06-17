const { v4 } = require("uuid");

const returnGoodsStatuses = [
    {
        id: v4(),
        label: "Tất cả",
        value: "all"
    },
    {
        id: v4(),
        label: "Chờ duyệt",
        value: "pending"
    },
    {
        id: v4(),
        label: "Đang thu hồi",
        value: "shipping"
    },
    {
        id: v4(),
        label: "Đã hủy",
        value: "canceled"
    },
    {
        id: v4(),
        label: "Hoàn thành",
        value: "fulfilled"
    }
];

export default returnGoodsStatuses;