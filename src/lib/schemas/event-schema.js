import { z } from "zod";

const eventSchema = z.object({
    image: z.union([
        // Trường hợp là string (URL ảnh)
        z.string()
            .min(1, "URL ảnh không được để trống")
            .refine(val => val.startsWith('http://') || val.startsWith('https://'), {
                message: "URL ảnh phải bắt đầu bằng http:// hoặc https://"
            }),
        
        // Trường hợp là File object
        z.instanceof(File, { message: "Vui lòng chọn ảnh cho sự kiện" })
            .refine(file => file.size > 0, { message: "File ảnh không hợp lệ" })
            .refine(file => file.type.startsWith('image/'), { 
                message: "File phải là định dạng ảnh" 
            })
    ], {
        required_error: "Vui lòng cung cấp ảnh cho sự kiện",
        invalid_type_error: "Ảnh phải là URL hợp lệ hoặc file ảnh"
    }),

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