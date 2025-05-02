"use client"

import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RoleTable from "../role-table/role-table";
import { Textarea } from "@/components/ui/textarea";

import columns from "./columns";

export default function RoleEditClient() {
    const form = useForm({
        defaultValues: {
            roleName: "",
            roleDesc: "",
            rolePermissions: [],
            roleStatus: "active"
        }
    });

    const handleSubmit = (values) => {}

    return (
        <section className="space-y-[30px]">
            <header>
                <h1 className="text-[24px] font-semibold">Chỉnh sửa vai trò</h1>
            </header>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="p-[20px] rounded-[10px] border bg-white space-y-[15px]"
                >
                    <FormField
                        control={form.control}
                        name="roleName"
                        render={({ field }) => {
                            return (
                                <FormItem className="space-y-[5px]">
                                    <FormLabel>Tên vai trò</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập tên vai trò . . ."
                                            {...field}
                                            className="rounded-[6px] px-[12px] py-[20px]"
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="roleDesc"
                        render={({ field }) => {
                            return (
                                <FormItem className="space-y-[5px]">
                                    <FormLabel>Tên vai trò</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Nhập mô tả cho vai trò . . ."
                                            {...field}
                                            className="rounded-[6px] p-[12px] h-[100px] resize-none"
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="rolePermissions"
                        render={({ field }) => {
                            const data = [ 
                                {
                                    label: "Bảng thống kê",
                                    prefix: "dashboard",
                                    values: [
                                        "dashboard-all",
                                        null,
                                        null,
                                        null,
                                        null,
                                        null
                                    ],
                                    form: form
                                },
                                {
                                    label: "Vai trò",
                                    prefix: "role",
                                    values: [
                                        "role-all",
                                        "role-list",
                                        "role-detail",
                                        "role-add",
                                        "role-edit",
                                        "role-delete"
                                    ],
                                    form: form
                                },
                                {
                                    label: "Tài khoản",
                                    prefix: "account",
                                    values: [
                                        "account-all",
                                        "account-list",
                                        "account-detail",
                                        "account-add",
                                        "account-edit",
                                        "account-delete"
                                    ],
                                    form: form
                                },
                            ];

                            return (
                                <FormItem>
                                    <RoleTable
                                        data={data}
                                        columns={columns}
                                    />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="roleStatus"
                        render={({ field }) => {
                            return (
                                <FormItem className="space-y-[10px]">
                                    <FormLabel>Trạng thái vai trò</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex items-center gap-[25px]"
                                        >
                                            <FormItem className="flex items-center gap-[10px]">
                                                <FormControl>
                                                    <RadioGroupItem
                                                        value="active"
                                                    />
                                                </FormControl>

                                                <FormLabel>Kích hoạt</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center gap-[10px]">
                                                <FormControl>
                                                    <RadioGroupItem
                                                        value="inactive"
                                                    />
                                                </FormControl>

                                                <FormLabel>Dừng kích hoạt</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />

                    <div className="flex justify-end pt-[15px]">
                        <Button>Thêm vai trò</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}
