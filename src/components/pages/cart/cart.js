import CartClient from "./cart-client";

import { v4 } from "uuid";

const data = Array.from({ length: 3 }).map((_, index) => {
    return {
        id: v4(),
        category: "Danh mục",
        productName: "Tên sản phẩm",
        color: {
            id: v4(),
            label: "Màu đen",
            param: "black",
            codeColor: "#000000"
        },
        size: {
            id: v4(),
            label: "S",
            param: "s"
        },
        quantity: 1,
        singlePrice: "400000000",
        totalPrice: "400000000"
    }
});

export default function Cart() {
    return (
        <CartClient data={data} />
    )
}
