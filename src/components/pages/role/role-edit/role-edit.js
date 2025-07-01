"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomTable from "@/components/customs/admin/custom-table";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";
import columns from "./columns";
import roleSchema from "@/lib/schemas/role-schema";
import { editRole } from "@/lib/api/server-action/role";
import { getRole } from "@/lib/api/server-action/role";
import { getPermissions } from "@/lib/api/server-action/permission";

export default function RoleEdit({ slug }) {
    const router = useRouter();

    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(roleSchema),
        defaultValues: {
            roleName: "",
            roleDesc: "",
            rolePermissions: []
        }
    });

    useState(() => {
        (async () => {
            const [roleRes, permissionsRes] = await Promise.all([
                getRole(slug),
                getPermissions()
            ]);

            const { status: roleStatus, role } = roleRes;
            const { status: permissionsStatus, permissions } = permissionsRes;

            if (!role?.success || !permissions?.success) {
                if (!role?.success) {
                    setError(`${roleStatus},${role?.message}`);
                    setLoading(false);
                    return;
                }

                if (!permissions?.success) {
                    setError(`${permissionsStatus},${permissions?.message}`);
                    setLoading(false);
                    return;
                }
            }

            setPermissions(permissions?.data?.permissions);

            form.setValue("roleName", role?.data?.role?.role);
            form.setValue("roleDesc", role?.data?.role?.desc);
            form.setValue("rolePermissions", role?.data?.role?.permissions);

            setLoading(false);
        })();
    }, []);

    const handleSubmit = async (data) => {
        if (submitting) return;

        setSubmitting(true);
        const role = await editRole(data, slug);
        const message = role?.message;

        if (role?.success) {
            toast.success(message);
            router.replace(`/quan-tri/vai-tro/chinh-sua-vai-tro/${role?.data?.role?.slug}`);
        }
        else toast.error(message || "Lỗi chỉnh sửa vai trò!");
        setSubmitting(false);
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

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
                                    <FormMessage />
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
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="rolePermissions"
                        render={() => { 
                            const pers = permissions?.map(per => {
                                return {
                                    ...per,
                                    form
                                }
                            });

                            return (
                                <FormItem>
                                    <CustomTable
                                        data={pers}
                                        columns={columns}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <div className="flex justify-end pt-[15px]">
                        <Button
                            disabled={submitting}
                        >
                            {
                                submitting ? "Đang lưu" : "Lưu thay đổi"
                            }
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}