import { v4 } from "uuid";

export const types = [
    {
        id: v4(),
        label: "Mới nhất",
        param: "latest"
    },
    {
        id: v4(),
        label: "Bán chạy nhất",
        param: "best-seller"
    },
    {
        id: v4(),
        label: "Giá - Từ cao đến thấp",
        param: "price-desc"
    },
    {
        id: v4(),
        label: "Giá - Từ thấp đến cao",
        param: "price-asc"
    },
];

export const categories = [
    {
        id: v4(),
        label: "Bàn",
        param: "desk"
    },
    {
        id: v4(),
        label: "Ghế",
        param: "chair"
    },
    {
        id: v4(),
        label: "Sofa",
        param: "sofa"
    }
];

export const colors = [
    {
        id: v4(),
        label: "Màu đen",
        param: "black",
        codeColor: "#000000"
    },
    {
        id: v4(),
        label: "Màu trắng",
        param: "white",
        codeColor: "#ffffff"
    },
    {
        id: v4(),
        label: "Màu nâu",
        param: "brown",
        codeColor: "#CCAD8F"
    }
]

export const params = [
    "living-space",
    "product-name",
    "discount",
    "types",
    "categories",
    "price-max",
    "price-min",
    "colors",
    "v-id"
];