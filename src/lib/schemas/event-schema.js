import { z } from "zod";

const eventSchema = z.object({
    image: z
        .any()
        .refine((val) => val !== null && val !== undefined, {
            message: "Vui lòng chọn ảnh cho sự kiện.",
        }),

    event: z
        .string({ required_error: "Vui lòng nhập tiêu đề cho sự kiện." })
        .nonempty("Vui lòng nhập tiêu đề cho sự kiện."),
    
    desc: z
        .string({ required_error: "Vui lòng nhập mô tả cho sự kiện." })
        .nonempty("Vui lòng nhập mô tả cho sự kiện."),

    link: z
        .string()
        .optional(),

    eventType: z
        .string({ required_error: "Vui lòng chọn loại sự kiện." })
        .nonempty("Vui lòng chọn loại sự kiện."),

    startDate: z.preprocess(
        (val) => {
            if (typeof val === "string" || val instanceof Date) {
                const d = new Date(val);
                return isNaN(d.getTime()) ? undefined : d;
            }
            return undefined;
        },
        z
            .date({ required_error: "Vui lòng chọn ngày bắt đầu sự kiện.", invalid_type_error: "Ngày không hợp lệ." })
    ),

    endDate: z.preprocess(
        (val) => {
            if (typeof val === "string" || val instanceof Date) {
                const d = new Date(val);
                return isNaN(d.getTime()) ? undefined : d;
            }
            return undefined;
        },
        z
            .date({ required_error: "Vui lòng chọn ngày kết thúc sự kiện.", invalid_type_error: "Ngày không hợp lệ." })
    ),
})
.refine((data) => data.endDate >= data.startDate, {
    message: "Ngày kết thúc phải sau ngày bắt đầu",
    path: ["endDate"],
});;

export default eventSchema;