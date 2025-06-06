import { v4 } from "uuid";

const categories = [
    {
        id: v4(),
        value: "bed",
        label: "Giường",
    },
    {
        id: v4(),
        value: "chair",
        label: "Ghế",
    },
    {
        id: v4(),
        value: "table",
        label: "Bàn",
    },
    {
        id: v4(),
        value: "rug",
        label: "Thảm",
    },
];

const livingSpaces = [
    {
        id: v4(),
        value: "outside",
        label: "Ngoài trời",
    },
    {
        id: v4(),
        value: "living-room",
        label: "Phòng khách",
    },
    {
        id: v4(),
        value: "kitchen",
        label: "Nhà bếp",
    },
    {
        id: v4(),
        value: "bed-room",
        label: "Phòng ngủ",
    },
    {
        id: v4(),
        value: "bath-room",
        label: "Phòng tắm",
    },
    {
        id: v4(),
        value: "decor",
        label: "Trang trí",
    },
];

const productTypes = [
    {  
        id: v4(),
        value: "latest",
        label: "Mới nhất",
    },
    {
        id: v4(),
        value: "best-selling",
        label: "Bán chạy nhất",
    },
    {
        id: v4(),
        value: "normal",
        label: "Bình thường",
    }
]

const sizes = [
    {
        id: v4(),
        value: "s",
        label: "S",
    },
    {
        id: v4(),
        value: "m",
        label: "M",
    },
    {
        id: v4(),
        value: "l",
        label: "L",
    },
    {
        id: v4(),
        value: "xl",
        label: "XL",
    },
    {
        id: v4(),
        value: "xxl",
        label: "XXL",
    },
];

const colors = [
    { value: "#FFFFFF", label: "Trắng" },
    { value: "#000000", label: "Đen" },
    { value: "#F5F5DC", label: "Be (Beige)" },
    { value: "#DEDAC7", label: "Xương (Bone)" },
    { value: "#D3C6A5", label: "Vani đậm (Dark Vanilla)" },
    { value: "#7BD8DA", label: "Xanh giữa (Middle Blue)" },
    { value: "#1CB4CB", label: "Xanh bóng (Ball Blue)" },
    { value: "#10508D", label: "Xanh Yale (Yale Blue)" },
    { value: "#36454F", label: "Than chì (Charcoal)" },
    { value: "#DAA520", label: "Cây quỳ (Goldenrod)" },
    { value: "#FFFFF0", label: "Ngà voi (Ivory)" },
    { value: "#7FFFD4", label: "Ngọc bích biển (Aquamarine)" },
    { value: "#FF7F50", label: "San hô (Coral)" }
];

export { categories, livingSpaces, productTypes, sizes, colors };