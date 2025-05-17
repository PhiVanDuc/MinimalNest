import { z } from "zod";

const roleSchema = z.object({
    roleName: z
    .string({ required_error: "Vui lòng nhập tên vai trò." })
    .nonempty("Vui lòng nhập tên vai trò."),

    roleDesc: z
    .string({ required_error: "Vui lòng nhập mô tả vai trò." })
    .nonempty("Vui lòng nhập mô tả vai trò."),

    rolePermissions: z
    .array(z.string())
    .nonempty("Vui lòng chọn ít nhất một quyền."),
});

export default roleSchema;