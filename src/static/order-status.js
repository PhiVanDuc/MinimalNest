const { v4 } = require("uuid");

const orderStatuses = [
    {
        id: v4(),
        label: "Tất cả",
        value: "all"
    },
    {
        id: v4(),
        label: "Chờ xử lý",
        value: "pending-processing"
    },
    {
        id: v4(),
        label: "Đang giao hàng",
        value: "shipping"
    },
    {
        id: v4(),
        label: "Trả / Hoàn tiền",
        value: "refund"
    },
    {
        id: v4(),
        label: "Đã hủy",
        value: "cancel"
    },
    {
        id: v4(),
        label: "Hoàn thành",
        value: "success"
    }
];

const paramOrderStatus = "order-status";

export { orderStatuses, paramOrderStatus };