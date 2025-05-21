import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const eventSchema = z.object({
    image: z
        .custom((val) => val instanceof File || typeof val === "string")
        .refine(
            (val) => {
                if (typeof val === "string") return true; // Cho phép base64 string
                return val && val.size <= MAX_FILE_SIZE;
            },
            { message: "Ảnh phải nhỏ hơn 5MB" }
        )
        .refine(
            (val) => {
                if (typeof val === "string") return true;
                return val && ACCEPTED_IMAGE_TYPES.includes(val.type);
            },
            { message: "Chỉ chấp nhận .jpg, .jpeg, .png và .webp" }
        ),

    event: z
        .string({ required_error: "Vui lòng nhập tiêu đề cho sự kiện." })
        .nonempty("Vui lòng nhập tiêu đề cho sự kiện."),
    
    desc: z
        .string({ required_error: "Vui lòng nhập mô tả cho sự kiện." })
        .nonempty("Vui lòng nhập mô tả cho sự kiện."),

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