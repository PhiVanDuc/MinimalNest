"use client"

export default function AdminProductEditStatus({
    form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    RadioGroup,
    RadioGroupItem
}) {
    return (
        <FormField
            control={form.control}
            name="status"
            render={({ field }) => {
                return (
                    <FormItem className="space-y-[10px]">
                        <FormLabel>Trạng thái</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex items-center gap-[25px]"
                            >
                                <FormItem className="flex items-center gap-[10px]">
                                    <FormControl>
                                        <RadioGroupItem value="active" />
                                    </FormControl>

                                    <FormLabel>Kích hoạt</FormLabel>
                                </FormItem>

                                <FormItem className="flex items-center gap-[10px]">
                                    <FormControl>
                                        <RadioGroupItem value="inactive" />
                                    </FormControl>

                                    <FormLabel>Không kích hoạt</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )
            }}
        />
    )
}
