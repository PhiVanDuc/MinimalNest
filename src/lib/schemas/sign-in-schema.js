import { z } from "zod";

const signInSchema = z.object({
    email: z
    .string({ required_error: "Vui lòng nhập email." })
    .nonempty("Vui lòng nhập email.")
    .email({ message: "Vui lòng nhập đúng định dạng email." }),

    password: z
    .string({ required_error: "Vui lòng nhập mật khẩu." })
    .nonempty("Vui lòng nhập mật khẩu.")
    .min(6, { message: "Vui lòng nhập mật khẩu ít nhất 6 ký tự." }),
});

export default signInSchema;