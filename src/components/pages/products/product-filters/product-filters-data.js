import { v4 } from "uuid";

export const types = [
    {  
        id: v4(),
        label: "Nổi bật",
        name: "featured"
    },
    {
        id: v4(),
        label: "Bán chạy nhất",
        name: "best-seller"
    },
    {
        id: v4(),
        label: "Mới nhất",
        name: "latest"
    }
]

export const sorts = [
    {
        id: v4(),
        label: "Giá: Tăng dần",
        name: "price-asc"
    },
    {
        id: v4(),
        label: "Giá: Giảm dần",
        name: "price-desc"
    },
    {
        id: v4(),
        label: "Thời gian thêm mới nhất",
        name: "created-at"
    },
];

export const furniture = [
    {  
        id: v4(),
        label: "Giường",
        name: "bed"
    },
    {
        id: v4(),
        label: "Ghế",
        name: "chair"
    },
    {
        id: v4(),
        label: "Thảm",
        name: "rug"
    },
];

export const colors = [
    {  
        id: v4(),
        label: "Màu đen",
        name: "yellow",
        code: "#000000"
    },
    {
        id: v4(),
        label: "Màu nâu",
        name: "brown",
        code: "#CFA77E"
    },
    {
        id: v4(),
        label: "Màu trắng",
        name: "white",
        code: "#ffffff"
    },
];