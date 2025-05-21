import { z } from "zod";

const colorSchema = z.object({
    color: z
        .string({ required_error: "Vui lòng nhập tên màu sắc." })
        .nonempty({ message: "Vui lòng nhập tên màu sắc." }),
    
    code: z
        .string({ required_error: "Vui lòng nhập mã màu sắc." })
        .nonempty({ message: "Vui lòng nhập mã màu sắc." }),
});

export default colorSchema;