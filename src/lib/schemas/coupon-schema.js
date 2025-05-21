import { z } from "zod";

const couponSchema = z.object({
    event: z
        .record(z.unknown()) // Cho phép bất kỳ object nào (không rỗng)
        .refine(
            (obj) => Object.keys(obj).length > 0,
            { message: "Vui lòng chọn sự kiện." }
        ),
    
    code: z
        .string({ required_error: "Vui lòng nhập mã phiếu giảm giá." })
        .nonempty({ message: "Vui lòng nhập mã phiếu giảm giá." }),
    
    desc: z
        .string({ required_error: "Vui lòng nhập mô tả." })
        .nonempty({ message: "Vui lòng nhập mô tả." }),

    discountType: z
        .enum(["amount", "percent"]),

    discountPrice: z
        .string({ required_error: "Vui lòng nhập giảm giá." })
        .nonempty({ message: "Vui lòng nhập giảm giá." })
        .refine(val => {
            const cleaned = val.replace(/\./g, '').replace(/,/g, '.');
            return Number(cleaned) >= 10000;
        }, {
            message: "Giảm giá phải từ 10.000 trở lên.",
        }),

    
    minOrderTotal: z
        .string()
        .optional(),

    minItems: z
        .string()
        .optional(),

    customerType: z
        .enum(["all", "first_time", "new", "vip"]),

    quantity: z
        .string({ required_error: "Vui lòng nhập số lượng." })
        .nonempty({ message: "Vui lòng nhập số lượng." })
        .refine(val => Number(val) > 0, {
            message: "Số lượng phải lớn hơn 0.",
        }),
    
    conditions: z
        .array(z.enum(["login", "min-total", "min-product"]))
        .optional()
});

export default couponSchema;
