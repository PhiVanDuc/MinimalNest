"use client"

export default function AdminProductAddPrice({
    form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    Input
}) {
    return (
        <div className="flex items-center gap-[10px]">
            <FormField
                control={form.control}
                name="rootPrice"
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Giá vốn sản phẩm</FormLabel>

                                <FormControl>
                                    <Input
                                        className="px-[15px] py-[20px]"
                                        placeholder="Nhập giá vốn sản phẩm . . ."
                                        {...field}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name="profit"
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <div className="space-y-[5px]">
                                <FormLabel>Lãi xuất %</FormLabel>

                                <FormControl>
                                    <Input
                                        className="px-[15px] py-[20px]"
                                        placeholder="Nhập lãi xuất theo % . . ."
                                        {...field}
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
