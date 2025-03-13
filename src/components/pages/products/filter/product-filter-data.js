import { v4 } from "uuid";

export const types = [
    {
        id: v4(),
        subLabel: "Nổi bật",
        label: "featured"
    },
    {
        id: v4(),
        subLabel: "Mới nhất",
        label: "latest"
    },
    {
        id: v4(),
        subLabel: "Bán chạy nhất",
        label: "best-seller"
    },
    {
        id: v4(),
        subLabel: "Giá - Từ cao đến thấp",
        label: "price-desc"
    },
    {
        id: v4(),
        subLabel: "Giá - Từ thấp đến cao",
        label: "price-asc"
    },
];

export const categories = [
    {
        id: v4(),
        subLabel: "Bàn",
        label: "desk"
    },
    {
        id: v4(),
        subLabel: "Ghế",
        label: "chair"
    },
    {
        id: v4(),
        subLabel: "Sofa",
        label: "sofa"
    }
];

export const colors = [
    {
        id: v4(),
        subLabel: "Màu đen",
        label: "black",
        codeColor: "#000000"
    },
    {
        id: v4(),
        subLabel: "Màu trắng",
        label: "white",
        codeColor: "#ffffff"
    },
    {
        id: v4(),
        subLabel: "Màu nâu",
        label: "brown",
        codeColor: "#CCAD8F"
    }
]

export const params = [
    "filters",
    "living-space",
    "product-name",
    "price-min",
    "price-max"
];