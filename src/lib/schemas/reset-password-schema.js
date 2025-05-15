import { z } from "zod";

const resetPasswordSchema = z
    .object({
        email: z
            .string({ required_error: "Vui lòng nhập email." })
            .nonempty("Vui lòng nhập email.")
            .email({ message: "Vui lòng nhập đúng định dạng email." }),
        
        otp: z
            .string({ required_error: "Vui lòng nhập mã otp." })
            .nonempty("Vui lòng nhập mã otp.")
            .min(6, { message: "Vui lòng nhập đủ 6 chữ số" }),

        password: z
            .string({ required_error: "Vui lòng nhập mật khẩu." })
            .nonempty("Vui lòng nhập mật khẩu.")
            .min(6, { message: "Vui lòng nhập mật khẩu ít nhất 6 ký tự." }),

        confirmPassword: z
            .string({ required_error: "Vui lòng nhập lại mật khẩu." })
            .nonempty("Vui lòng nhập lại mật khẩu.")
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Mật khẩu không khớp",
        path: ["confirmPassword"]
    })

export default resetPasswordSchema;