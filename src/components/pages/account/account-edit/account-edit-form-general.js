"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AccountEditFormGeneral({ form }) {
    return (
        <div className="space-y-[20px] p-[20px] rounded-[10px] bg-white">
            <div className="flex items-center gap-[10px]">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <div className="space-y-[5px]">
                                    <FormLabel>Tên đầu</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập tên cuối . . ."
                                            className="px-[20px] py-[12px]"
                                            {...field}
                                            disabled={true}
                                        />
                                    </FormControl>
                                </div>
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <div className="space-y-[5px]">
                                    <FormLabel>Tên cuối</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập tên cuối . . ."
                                            className="px-[20px] py-[12px]"
                                            {...field}
                                            disabled={true}
                                        />
                                    </FormControl>
                                </div>
                            </FormItem>
                        )
                    }}
                />
            </div>

            <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nhập email . . ."
                                        className="px-[20px] py-[12px]"
                                        {...field}
                                        disabled={true}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name="status"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="space-y-[5px]">
                                <FormLabel>Trạng thái</FormLabel>

                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-wrap items-center gap-[20px]"
                                    >
                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormControl>
                                                <RadioGroupItem value="active" />
                                            </FormControl>

                                            <FormLabel className="font-normal">
                                                Kích hoạt
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center gap-[10px]">
                                            <FormControl>
                                                <RadioGroupItem value="blocked" />
                                            </FormControl>

                                            <FormLabel className="font-normal">
                                                Chặn
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />
        </div>
    )
}
