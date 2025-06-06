"use client"

import { useState } from "react";
import { useWatch } from "react-hook-form";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import GeneralDiscountDeleteDialog from "../general-discount-delete-dialog";

export default function AdminProductDiscountApplyAll({ form, formArray, index, setDiscountSelected, submitting }) {
    const [openDialog, setOpenDialog] = useState(false);
    const watchCurrentDiscount = useWatch({
        control: form.control,
        name: `discounts.${index}`
    });

    return (
        <div className="w-full flex justify-between items-center">
            <FormField
                control={form.control}
                name={`discounts.${index}.applyAll`}
                render={({ field }) => {
                    return (
                        <FormItem className="flex items-center gap-[10px]">
                            <FormLabel>Áp dụng cho tất cả sản phẩm</FormLabel>
                            <FormControl>
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    
                                />
                            </FormControl>
                        </FormItem>
                    )
                }}
            />

            <div className="flex gap-[10px] items-center">
                <Button
                    type="button"
                    variant="outline"
                    className="shadow-none"
                    onClick={() => {
                        if (watchCurrentDiscount?.rootId) {
                            setOpenDialog(true);
                            return;
                        }

                        formArray.remove(index);
                        setDiscountSelected(null);
                    }}
                    
                >
                    Xóa
                </Button>
                <GeneralDiscountDeleteDialog
                    open={openDialog}
                    setOpen={setOpenDialog}
                    id={watchCurrentDiscount?.rootId || ""}
                    formArray={formArray}
                    index={index}
                    setDiscountSelected={setDiscountSelected}
                />

                <Button
                    disabled={submitting}
                >
                    {
                        watchCurrentDiscount?.rootId ?
                        submitting ? "Đang lưu . . ." : "Lưu giảm giá" :
                        submitting ? "Đang thêm . . ." : "Thêm giảm giá"
                    }
                </Button>
            </div>
        </div>
    )
}
