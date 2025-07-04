"use client"

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";
import AdminProductAddName from "./admin-product-add-name";
import AdminProductAddDesc from "./admin-product-add-desc";
import AdminProductAddPrice from "./admin-product-add-price";
import AdminProductAddDiscount from "./admin-product-add-discount";
import AdminProductAddCategory from "./admin-product-add-category";
import AdminProductAddLivingSpace from "./admin-product-add-living-space";
import AdminProductAddSize from "./admin-product-add-size";
import AdminProductAddColor from "./admin-product-add-color";
import AdminProductAddImage from "./admin-product-add-image";

import { toast } from "sonner";
import { addProduct } from "@/lib/api/server-action/product";
import { convertToNumber } from "@/lib/utils/format-currency";
import generateSkuProduct from "@/lib/utils/generate-sku-product";

import { getSizes } from "@/lib/api/server-action/size";
import { getColors } from "@/lib/api/server-action/color";
import { getCategories } from "@/lib/api/server-action/categories";
import { getLivingSpaces } from "@/lib/api/server-action/living-space";

export default function AdminProductAdd() {
    const form = useForm({
        defaultValues: {
            product: "Sản phẩm thử nghiệm",
            desc: "Mô tả cho sản phẩm",
            costPrice: "5000000",
            interestRate: "20",
            discount: false,
            discountType: "amount",
            discountAmount: "0",
            finalPrice: "0",
            categoryId: "",
            livingSpaceIds: [],
            sizes: [],
            colors: [],
            variants: [],
            colorImages: {},
            images: []
        }
    });

    const watchName = form.watch("product");
    const watchColors = form.watch("colors");
    const watchSizes = form.watch("sizes");
    const watchCategoryId = form.watch("categoryId");

    const [categories, setCategories] = useState([]);
    const [livingSpaces, setLivingSpaces] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        (async () => {
            const [categoriesRes, livingSpacesRes, sizesRes, colorsRes] = await Promise.all([
                getCategories(),
                getLivingSpaces(),
                getSizes({ all: true }),
                getColors({ all: true })
            ]);

            const { status: categoriesStatus, result: categories } = categoriesRes;
            const { status: livingSpacesStatus, result: livingSpaces } = livingSpacesRes;
            const { status: sizesStatus, result: sizes } = sizesRes; 
            const { status: colorsStatus, result: colors } = colorsRes;

            if (!categories?.success) {
                setError(`${categoriesStatus},${categories?.message}`);
                setLoading(false);
                return;
            }

            if (!livingSpaces?.success) {
                setError(`${livingSpacesStatus},${livingSpaces?.message}`);
                setLoading(false);
                return;
            }

            if (!sizes?.success) {
                setError(`${sizesStatus},${sizes?.message}`);
                setLoading(false);
                return;
            }

            if (!colors?.success) {
                setError(`${colorsStatus},${colors?.message}`);
                setLoading(false);
                return;
            }

            setCategories(categories?.data?.categories);
            setLivingSpaces(livingSpaces?.data?.living_spaces);
            setSizes(sizes?.data?.sizes);
            setColors(colors?.data?.colors);
            setLoading(false);
        })();
    }, []);

    // Tạo variant cho sản phẩm
    useEffect(() => {
        if (watchColors.length === 0 || watchSizes.length === 0 || watchName === "") return;

        const combos = [];
        for (const size of watchSizes) {
            for (const color of watchColors) {
                const sku = generateSkuProduct(watchName, size, color);
                combos.push({
                    sku,
                    sizeId: size?.id,
                    colorId: color?.id
                });
            }
        }
        form.setValue("variants", combos);
    }, [watchName, watchColors, watchSizes, form]);

    // Các công đoạn chuẩn bị để submit form
    const onSubmit = async (data) => {
        if (submitting) return;

        setSubmitting(true);

        const formData = new FormData();
        const { product, desc, costPrice, interestRate, discount, discountType, discountAmount, finalPrice, categoryId, livingSpaceIds, sizes, colors, variants, images } = data;
        const newSizeIds = sizes?.map(size => size?.id);
        const newColorIds = colors.map(color => color?.id);

        formData.append("product", product);
        formData.append("desc", desc);
        formData.append("costPrice", convertToNumber(costPrice));
        formData.append("interestRate", convertToNumber(interestRate));
        formData.append("finalPrice", convertToNumber(finalPrice));
        formData.append("categoryId", categoryId);
        formData.append("livingSpaceIds", JSON.stringify(livingSpaceIds));
        formData.append("sizeIds", JSON.stringify(newSizeIds));
        formData.append("colorIds", JSON.stringify(newColorIds));
        formData.append("variants", JSON.stringify(variants));

        if (discount) {
            formData.append("discount", discount.toString());
            formData.append("discountType", discountType);
            formData.append("discountAmount", convertToNumber(discountAmount));
        }
        
        images.forEach((image, index) => {
            formData.append(`images[${index}][colorId]`, image.colorId);
            formData.append(`images[${index}][main]`, image.main.toString());
            formData.append(`images[${index}][file]`, image.file);
        });

        const result = await addProduct(formData);
        const message = result?.message;

        if (result?.success) toast.success(message);
        else toast.error(message);

        setSubmitting(false);
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Thêm sản phẩm</h2>
            </header>

            <Form {...form}>
                <form
                    className="flex items-stretch gap-[20px]"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="space-y-[20px] w-[60%]">
                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductAddName form={form}/>
                            <AdminProductAddDesc form={form} />
                            <AdminProductAddPrice form={form} />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductAddDiscount form={form} />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductAddCategory
                                form={form}
                                categories={categories}
                            />

                            <AdminProductAddLivingSpace
                                form={form}
                                livingSpaces={livingSpaces}
                            />

                            {
                                watchCategoryId && 
                                (
                                    <AdminProductAddSize
                                        form={form}
                                        sizes={sizes}
                                    />
                                )
                            }

                            <AdminProductAddColor
                                form={form}
                                colors={colors}
                            />

                            <Button
                                className="w-full"
                                disabled={submitting}
                            >
                                { submitting ? "Đang thêm . . ." : "Thêm sản phẩm" }
                            </Button>
                        </div>
                    </div>
                    
                    <AdminProductAddImage form={form} />
                </form>
            </Form>
        </section>
    )
}