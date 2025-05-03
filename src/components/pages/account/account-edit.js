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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import { v4 } from "uuid";
import { cn } from "@/lib/utils";

const roles = [
    {
        id: v4(),
        role: "Quản lý người dùng"
    },
    {
        id: v4(),
        role: "Quản lý ưu đãi"
    },
    {
        id: v4(),
        role: "Quản lý sản phẩm"
    },
    {
        id: v4(),
        role: "Quản lý đơn hàng"
    }
];

export default function AccountEdit() {
    const form = useForm({
        defaultValues: {
            roles: [],
            status: "actived"
        }
    });

    return (
        <DialogContent className="gap-[20px]">
            <DialogHeader>
                <DialogTitle>Chỉnh sửa tài khoản</DialogTitle>
                <DialogDescription>Bạn có chỉ có thể chỉnh sửa vai trò và trạng thái của tài khoản.</DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form
                    className="space-y-[20px]"
                >
                    <FormField
                        control={form.control}
                        name="roles"
                        render={() => (
                            <FormItem>
                                <div className="space-y-[10px]">
                                    <FormLabel className="text-[15px] font-medium">
                                        Chọn vai trò
                                    </FormLabel>

                                    <div className="flex flex-wrap items-center h-fit gap-[5px]">
                                        {
                                            roles.map((role) => (
                                                <FormField
                                                    key={role.id}
                                                    control={form.control}
                                                    name="roles"
                                                    render={({ field }) => {
                                                        const checked = field.value.includes(role.role);

                                                        return (
                                                            <FormItem>
                                                                <FormLabel>
                                                                    <div
                                                                        className={cn(
                                                                            "text-[14px] px-[15px] py-[8px] border rounded-full cursor-pointer",
                                                                            !checked ? "bg-white" : "border-yellowBold bg-yellowBold text-white font-normal"
                                                                        )}
                                                                    >
                                                                        {role.role}
                                                                    </div>
                                                                </FormLabel>

                                                                <FormControl className="hidden">
                                                                        <Checkbox
                                                                            checked={field.value?.includes(role.role)}
                                                                            onCheckedChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field.value, role.role])
                                                                                    : field.onChange(
                                                                                        field.value?.filter(
                                                                                            (value) => value !== role.role
                                                                                        )
                                                                                    );
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                            </FormItem>
                                                        );
                                                    }}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <div className="space-y-[10px]">
                                        <FormLabel className="text-[15px] font-medium">Đổi trạng thái</FormLabel>

                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex items-center gap-[15px]"
                                            >
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="actived" />
                                                        </FormControl>

                                                        <span>Đã kích hoạt</span>
                                                    </FormLabel>
                                                </FormItem>

                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-[5px]">
                                                        <FormControl>
                                                            <RadioGroupItem value="block" />
                                                        </FormControl>

                                                        <span>Chặn</span>
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <div className="flex justify-end">
                        <Button>Lưu thay đổi</Button>
                    </div>
                </form>
            </Form>
        </DialogContent>
    )
}