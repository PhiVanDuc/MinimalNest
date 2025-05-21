import { z } from "zod";

const sizeSchema = z.object({
    category: z
        .string({ required_error: "Vui lòng chọn danh mục." })
        .nonempty({ message: "Vui lòng chọn danh mục." }),
    
    size: z
        .string({ required_error: "Vui lòng nhập mã kích cỡ." })
        .nonempty({ message: "Vui lòng nhập mã kích cỡ." }),

    desc: z
        .string({ required_error: "Vui lòng nhập mô tả kích cỡ." })
        .nonempty({ message: "Vui lòng nhập mô tả kích cỡ." }),
});

export default sizeSchema;