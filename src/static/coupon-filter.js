import { v4 } from "uuid";

// Cho chọn 1
const types = [
    {
        id: v4(),
        label: "Mới nhất",
        param: "latest"
    },
    {
        id: v4(),
        label: "Cũ nhất",
        param: "oldest"
    },
    {
        id: v4(),
        label: "Giảm - Từ cao đến thấp",
        param: "discount-desc"
    },
    {
        id: v4(),
        label: "Giảm - Từ thấp đến cao",
        param: "discount-asc"
    }
];

// Cho chọn nhiều
const events = [
    {
        id: v4(),
        label: "Sự kiện 1",
        param: "event-1"
    },
    {
        id: v4(),
        label: "Sự kiện 2",
        param: "event-2"
    },
    {
        id: v4(),
        label: "Sự kiện 3",
        param: "event-3"
    },
    {
        id: v4(),
        label: "Sự kiện 4",
        param: "event-4"
    }
];

// Cho chọn 1
const discountTypes = [
    {
        id: v4(),
        label: "Giảm theo %",
        param: "discount-percent"
    },
    {
        id: v4(),
        label: "Giảm theo giá cố định",
        param: "discount-fixed"
    }
];

// Cho chọn nhiều
const userTypes = [
    {
        id: v4(),
        label: "Tất cả khách hàng",
        param: "all-cusomers"
    },
    {
        id: v4(),
        label: "Các khách hàng mới",
        param: "new-cusomters"
    },
    {
        id: v4(),
        label: "Các khách hàng cũ",
        param: "old-cusomters"
    }
];

export { types, events, discountTypes, userTypes };