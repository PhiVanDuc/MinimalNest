"use client"

import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
} from "@/components/ui/form";

import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import AdminProductEditName from "./admin-product-edit-name";
import AdminProductEditDesc from "./admin-product-edit-desc";
import AdminProductEditPrice from "./admin-product-edit-price";
import AdminProductEditDiscount from "./admin-product-edit-discount";
import AdminProductEditCategory from "./admin-product-edit-category";
import AdminProductEditLivingSpace from "./admin-product-edit-living-space";
import AdminProductEditSize from "./admin-product-edit-size";
import AdminProductEditColor from "./admin-product-edit-color";
import AdminProductEditImage from "./admin-product-edit-image";
import AdminProductEditStatus from "./admin-product-edit-status";


export default function AdminProductEditClient() {
    const form = useForm({
        defaultValues: {
            name: "",
            desc: "",
            rootPrice: "",
            profit: "",
            discount: false,
            typeDiscount: "fixed",
            discountPrice: "",
            finalPrice: "",
            category: {},
            livingSpaces: [],
            sizes: [],
            colors: [],
            colorImages: {},
            images: [],
            variants: [],
            status: "active"
        }
    });


    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Chỉnh sửa sản phẩm</h2>
            </header>

            <Form {...form}>
                <form
                    className="flex items-stretch gap-[20px]"
                >
                    <div className="space-y-[20px] w-[60%]">
                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductEditName
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Input={Input}
                            />

                            <AdminProductEditDesc
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Textarea={Textarea}
                            />

                            <AdminProductEditPrice
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Input={Input}
                            />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductEditDiscount
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Input={Input}
                            />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductEditCategory
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                RadioGroup={RadioGroup}
                                RadioGroupItem={RadioGroupItem}
                            />

                            <AdminProductEditLivingSpace
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Checkbox={Checkbox}
                            />

                            <AdminProductEditSize
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Checkbox={Checkbox}
                            />

                            <AdminProductEditColor
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                FormDescription={FormDescription}
                                Checkbox={Checkbox}
                            />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductEditStatus
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                RadioGroup={RadioGroup}
                                RadioGroupItem={RadioGroupItem}
                            />

                            <div className="flex justify-end pt-[20px]">
                                <Button>Lưu thay đổi</Button>
                            </div>
                        </div>
                    </div>
                    
                    <AdminProductEditImage form={form} />
                </form>
            </Form>
        </section>
    )
}