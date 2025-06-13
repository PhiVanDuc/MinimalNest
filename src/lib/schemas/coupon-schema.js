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
        .nonempty({ message: "Vui lòng nhập giảm giá." }),

    minOrderTotal: z
        .string()
        .optional(),

    minItems: z
        .string()
        .optional(),

    customerType: z
        .enum(["all", "first_time_customer", "new_customer", "vip_customer"]),

    quantity: z
        .string({ required_error: "Vui lòng nhập số lượng." })
        .nonempty({ message: "Vui lòng nhập số lượng." })
        .refine(val => Number(val) > 0, {
            message: "Số lượng phải lớn hơn 0.",
        }),
    
    conditions: z
        .array(z.enum(["login", "min-total", "min-product"]))
        .optional()
})
.superRefine((data, ctx) => {
    const cleanedPrice = data.discountPrice.replace(/\./g, "").replace(/,/g, ".");
    const num = Number(cleanedPrice);

    if (data.discountType === "amount" && num < 10000) {
        ctx.addIssue({
            path: ["discountPrice"],
            message: "Giảm giá tiền phải từ 10.000 trở lên.",
            code: z.ZodIssueCode.custom
        });
    }

    if (data.discountType === "percent") {
        if (num < 1 || num > 100) {
            ctx.addIssue({
                path: ["discountPrice"],
                message: "Giảm giá phần trăm phải từ 1% đến 100%.",
                code: z.ZodIssueCode.custom
            });
        }
    }
});

export default couponSchema;
