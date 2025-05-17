"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import { toast } from "sonner";
import { cn } from "@/lib/utils";

const columns = [
    {
        id: "permissions",
        header: () => <h2 className="text-[14px] whitespace-nowrap font-semibold">Quyền truy cập</h2>,
        cell: ({ row }) => {
            const data = row.original;

            return (
                <h3 className="text-[15px] text-darkMedium">{data?.label}</h3>
            );
        }
    },
    {
        id: "permission-all",
        header: "",
        cell: ({ row }) => {
            const data = row.original;
            const { array: permissions, form } = data;

            return (
                <div className="flex justify-center">
                    <FormField
                        control={form.control}
                        name="rolePermissions"
                        render={({ field }) => {
                            const checked = permissions.every((slug) =>
                                field?.value.includes(slug)
                            );

                            return (
                                <FormItem className="flex items-center gap-[10px]">
                                    <FormLabel className="text-[15px] font-normal">Tất cả</FormLabel>

                                    <FormControl>
                                        <Checkbox
                                            checked={checked}
                                            onCheckedChange={(checked) => {
                                                return checked ?
                                                    field.onChange([...field.value, ...permissions]) :
                                                    field.onChange(
                                                        field.value?.filter(value => {
                                                            return !permissions.includes(value)
                                                        })
                                                    )
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
            const { array: permissions, form } = data;
            
            const checkboxValue = permissions.find(per => per.startsWith("list"));

            return (
                <div className="flex justify-center">
                    {
                        checkboxValue ?
                        (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Xem danh sách</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(checkboxValue)}
                                                    onCheckedChange={(checked) => {
                                                        return checked ?
                                                            field.onChange([...field.value, checkboxValue]) :
                                                            field.onChange(
                                                                field.value?.filter(value => {
                                                                    return !permissions.includes(value)
                                                                })
                                                            )
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        ) :
                        ( <p className="text-[15px] font-normal">Ô rỗng.</p> )
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
            const { array: permissions, form } = data;
            
            const listValue = permissions.find(per => per.startsWith("list"));
            const checkboxValue = permissions.find(per => per.startsWith("add"));

            return (
                <div className="flex justify-center">
                    {
                        checkboxValue ?
                        (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    const isListValue = field.value?.includes(listValue);

                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Thêm</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(checkboxValue)}
                                                    onCheckedChange={(checked) => {
                                                        if (!isListValue) {
                                                            toast.warning('Vui lòng chọn quyền "Xem danh sách" tương ứng trước.');
                                                            return false;
                                                        }

                                                        return checked ?
                                                            field.onChange([...field.value, checkboxValue]) :
                                                            field.onChange(
                                                                field.value?.filter(
                                                                    (value) => value !== checkboxValue
                                                                )
                                                            )
                                                    }}
                                                    className={cn(
                                                        "",
                                                        !isListValue ? "border-neutral-200 cursor-not-allowed" : ""
                                                    )}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        ) :
                        ( <p className="text-[15px] font-normal">Ô rỗng.</p> )
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
            const { array: permissions, form } = data;
            
            const listValue = permissions.find(per => per.startsWith("list"));
            const checkboxValue = permissions.find(per => per.startsWith("edit"));

            return (
                <div className="flex justify-center">
                    {
                        checkboxValue ?
                        (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    const isListValue = field.value?.includes(listValue);

                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Chỉnh sửa</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(checkboxValue)}
                                                    onCheckedChange={(checked) => {
                                                        if (!isListValue) {
                                                            toast.warning('Vui lòng chọn quyền "Xem danh sách" tương ứng trước.');
                                                            return false;
                                                        }

                                                        return checked ?
                                                            field.onChange([...field.value, checkboxValue]) :
                                                            field.onChange(
                                                                field.value?.filter(
                                                                    (value) => value !== checkboxValue
                                                                )
                                                            )
                                                    }}
                                                    className={cn(
                                                        "",
                                                        !isListValue ? "border-neutral-200 cursor-not-allowed" : ""
                                                    )}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        ) :
                        ( <p className="text-[15px] font-normal">Ô rỗng.</p> )
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
            const { array: permissions, form } = data;
            
            const listValue = permissions.find(per => per.startsWith("list"));
            const checkboxValue = permissions.find(per => per.startsWith("delete"));

            return (
                <div className="flex justify-center">
                    {
                        checkboxValue ?
                        (
                            <FormField
                                control={form.control}
                                name="rolePermissions"
                                render={({ field }) => {
                                    const isListValue = field.value?.includes(listValue);

                                    return (
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormLabel className="text-[15px] font-normal">Xóa</FormLabel>
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(checkboxValue)}
                                                    onCheckedChange={(checked) => {
                                                        if (!isListValue) {
                                                            toast.warning('Vui lòng chọn quyền "Xem danh sách" tương ứng trước.');
                                                            return false;
                                                        }

                                                        return checked ?
                                                            field.onChange([...field.value, checkboxValue]) :
                                                            field.onChange(
                                                                field.value?.filter(
                                                                    (value) => value !== checkboxValue
                                                                )
                                                            )
                                                    }}
                                                    className={cn(
                                                        "",
                                                        !isListValue ? "border-neutral-200 cursor-not-allowed" : ""
                                                    )}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                        ) :
                        ( <p className="text-[15px] font-normal">Ô rỗng.</p> )
                    }
                </div>
            );
        }
    },
];

export default columns;