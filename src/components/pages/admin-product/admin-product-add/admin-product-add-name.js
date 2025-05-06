"use client"

export default function AdminProductAddName({
    form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    Input
}) {
    return (
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Tên sản phẩm</FormLabel>

                            <FormControl>
                                <Input
                                    className="px-[15px] py-[20px]"
                                    placeholder="Nhập tên sản phẩm . . ."
                                    {...field}
                                />
                            </FormControl>
                        </div>
                    </FormItem>
                )
            }}
        />
    )
}
