"use client"

export default function AdminProductAddDesc({
    form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    Textarea
}) {
    return (
        <FormField
            control={form.control}
            name="desc"
            render={({ field }) => {
                return (
                    <FormItem>
                        <div className="space-y-[5px]">
                            <FormLabel>Mô tả</FormLabel>

                            <FormControl>
                                <Textarea
                                    placeholder="Nhập mô tả sản phẩm . . ."
                                    {...field}
                                    className="px-[15px] py-[12px] h-[100px] resize-none"
                                />
                            </FormControl>
                        </div>
                    </FormItem>
                )
            }}
        />
    )
}
