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

import AdminProductAddName from "./admin-product-add-name";
import AdminProductAddDesc from "./admin-product-add-desc";
import AdminProductAddPrice from "./admin-product-add-price";
import AdminProductAddDiscount from "./admin-product-add-discount";
import AdminProductAddCategory from "./admin-product-add-category";
import AdminProductAddLivingSpace from "./admin-product-add-living-space";
import AdminProductAddSize from "./admin-product-add-size";
import AdminProductAddColor from "./admin-product-add-color";
import AdminProductAddImage from "./admin-product-add-image";
import AdminProductAddVariant from "./admin-product-add-variant";
import AdminProductAddStatus from "./admin-product-add-status";

export default function AdminProductAdd() {
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
                <h2 className="text-[24px] font-semibold">Thêm sản phẩm</h2>
            </header>

            <Form {...form}>
                <form
                    className="flex items-stretch gap-[20px]"
                >
                    <div className="space-y-[20px] w-[60%]">
                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductAddName
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Input={Input}
                            />

                            <AdminProductAddDesc
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Textarea={Textarea}
                            />

                            <AdminProductAddPrice
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Input={Input}
                            />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductAddDiscount
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Input={Input}
                            />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductAddCategory
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                RadioGroup={RadioGroup}
                                RadioGroupItem={RadioGroupItem}
                            />

                            <AdminProductAddLivingSpace
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Checkbox={Checkbox}
                            />

                            <AdminProductAddSize
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                Checkbox={Checkbox}
                            />

                            <AdminProductAddColor
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
                            <AdminProductAddStatus
                                form={form}
                                FormField={FormField}
                                FormItem={FormItem}
                                FormLabel={FormLabel}
                                FormControl={FormControl}
                                RadioGroup={RadioGroup}
                                RadioGroupItem={RadioGroupItem}
                            />

                            <div className="flex justify-end pt-[20px]">
                                <Button>Thêm sản phẩm</Button>
                            </div>
                        </div>
                    </div>
                    
                    <AdminProductAddImage form={form} />
                </form>
            </Form>
        </section>
    )
}

{/* <AdminProductAddVariant form={form} /> */}