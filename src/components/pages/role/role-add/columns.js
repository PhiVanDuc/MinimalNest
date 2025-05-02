"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const columns = [
    {
        id: "permissions",
        header: () => <h2 className="text-[14px] whitespace-nowrap font-semibold">Quyền truy cập</h2>,
        cell: ({ row }) => {
            const data = row.original;

            return (
                <h3 className="text-[15px] text-darkMedium">{data.label}</h3>
            );
        }
    },
    {
        id: "permission-all",
        header: "",
        cell: ({ row }) => {
            const { values, form } = row.original;
            // Lọc bỏ các giá trị null
            const perms = values.filter(Boolean);

            return (
                <div className="flex justify-center">
                    <FormField
                        control={form.control}
                        name="rolePermissions"
                        render={({ field }) => {
                            // Kiểm tra xem đã chọn hết hay chưa
                            const allChecked = perms.every(p => field.value?.includes(p));

                            return (
                                <FormItem className="flex items-center gap-[10px]">
                                    <FormLabel className="text-[15px] font-normal">Tất cả</FormLabel>

                                    <FormControl>
                                        <Checkbox
                                            checked={allChecked}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    // Thêm hết các quyền vào mảng
                                                    const newValues = Array.from(new Set([
                                                        ...(field.value || []),
                                                        ...perms
                                                    ]));
                                                    field.onChange(newValues);
                                                } else {
                                                    // Bỏ hết các quyền này ra
                                                    field.onChange(
                                                        (field.value || []).filter(v => !perms.includes(v))
                                                    );
                                                }
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />
                </div>
            );
        }
    },
    {
        id: "permission-list",
        header: "",
        cell: ({ row }) => {
            const data = row.original;
            const form = data.form;
            const values = data.values; 

            return (
                <div className="flex justify-center">
                    {
                        values[1] && (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Xem danh sách</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(values[1])}
                                                    onCheckedChange={(checked) => {
                                                        return checked ?
                                                        field.onChange([...field.value, values[1]]) :
                                                        field.onChange(
                                                            field.value?.filter(
                                                                (value) => value !== values[1]
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        )
                    }
                </div>
            );
        }
    },
    {
        id: "permission-detail",
        header: "",
        cell: ({ row }) => {
            const data = row.original;
            const form = data.form;
            const values = data.values; 

            return (
                <div className="flex justify-center">
                    {
                        values[2] && (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Xem chi tiết</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(values[2])}
                                                    onCheckedChange={(checked) => {
                                                        if (!field.value?.includes(values[1])) {
                                                            toast.warning('Bạn cần chọn "Xem chi tiết trước"');
                                                            return;
                                                        }

                                                        return checked ?
                                                        field.onChange([...field.value, values[2]]) :
                                                        field.onChange(
                                                            field.value?.filter(
                                                                (value) => value !== values[2]
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        )
                    }
                </div>
            );
        }
    },
    {
        id: "permission-add",
        header: "",
        cell: ({ row }) => {
            const data = row.original;
            const form = data.form;
            const values = data.values; 

            return (
                <div className="flex justify-center">
                    {
                        values[3] && (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Thêm</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(values[3])}
                                                    onCheckedChange={(checked) => {
                                                        if (!field.value?.includes(values[1])) {
                                                            toast.warning('Bạn cần chọn "Xem chi tiết trước"');
                                                            return;
                                                        }

                                                        return checked ?
                                                        field.onChange([...field.value, values[3]]) :
                                                        field.onChange(
                                                            field.value?.filter(
                                                                (value) => value !== values[3]
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        )
                    }
                </div>
            );
        }
    },
    {
        id: "permission-edit",
        header: "",
        cell: ({ row }) => {
            const data = row.original;
            const form = data.form;
            const values = data.values; 

            return (
                <div className="flex justify-center">
                    {
                        values[4] && (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Chỉnh sửa</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(values[4])}
                                                    onCheckedChange={(checked) => {
                                                        if (!field.value?.includes(values[1])) {
                                                            toast.warning('Bạn cần chọn "Xem chi tiết trước"');
                                                            return;
                                                        }

                                                        return checked ?
                                                        field.onChange([...field.value, values[4]]) :
                                                        field.onChange(
                                                            field.value?.filter(
                                                                (value) => value !== values[4]
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        )
                    }
                </div>
            );
        }
    },
    {
        id: "permission-delete",
        header: "",
        cell: ({ row }) => {
            const data = row.original;
            const form = data.form;
            const values = data.values; 

            return (
                <div className="flex justify-center">
                    {
                        values[5] && (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Xóa</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(values[5])}
                                                    onCheckedChange={(checked) => {
                                                        if (!field.value?.includes(values[1])) {
                                                            toast.warning('Bạn cần chọn "Xem chi tiết trước"');
                                                            return;
                                                        }

                                                        return checked ?
                                                        field.onChange([...field.value, values[5]]) :
                                                        field.onChange(
                                                            field.value?.filter(
                                                                (value) => value !== values[5]
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        )
                    }
                </div>
            );
        }
    },
];

export default columns;