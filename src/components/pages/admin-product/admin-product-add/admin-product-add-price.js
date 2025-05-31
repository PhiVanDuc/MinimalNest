"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import formatCurrency from "@/lib/utils/format-currency";

export default function AdminProductAddPrice({ form }) {
    return (
        <div className="flex items-center gap-[10px]">
            <FormField
                control={form.control}
                name="costPrice"
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Giá vốn sản phẩm</FormLabel>

                                <FormControl>
                                    <Input
                                        className="px-[15px] py-[20px]"
                                        placeholder="Nhập giá vốn sản phẩm . . ."
                                        value={formatCurrency(field.value)}
                                        onChange={(e) => {
                                            const rawValue = e.target.value;
                                            const filteredValue = rawValue.replace(/[^0-9,]/g, '');

                                            field.onChange(filteredValue);
                                        }}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name="interestRate"
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Lãi xuất %</FormLabel>

                                <FormControl>
                                    <Input
                                        className="px-[15px] py-[20px]"
                                        placeholder="Nhập lãi xuất theo % . . ."
                                        value={formatCurrency(field.value)}
                                        onChange={(e) => {
                                            const rawValue = e.target.value;
                                            let filteredValue = rawValue.replace(/[^0-9,]/g, '');

                                            if (+filteredValue < 0) filteredValue = 0;
                                            else if (+filteredValue > 100) filteredValue = 100

                                            field.onChange(filteredValue);
                                        }}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />
        </div>
    )
}
