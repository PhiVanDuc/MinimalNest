"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import AdminProductEditName from "./admin-product-edit-name";
import AdminProductEditDesc from "./admin-product-edit-desc";
import AdminProductEditPrice from "./admin-product-edit-price";
import AdminProductEditDiscount from "./admin-product-edit-discount";
import AdminProductEditCategory from "./admin-product-edit-category";
import AdminProductEditLivingSpace from "./admin-product-edit-living-space";
import AdminProductEditSize from "./admin-product-edit-size";
import AdminProductEditColor from "./admin-product-edit-color";
import AdminProductEditImage from "./admin-product-edit-image";

import { toast } from "sonner";
import { editProduct } from "@/lib/api/server-action/product";
import { convertToNumber, convertToNumberDb } from "@/lib/utils/format-currency";
import generateSkuProduct from "@/lib/utils/generate-sku-product";

export default function AdminProductEditClient({
    slug = "",
    categories = [],
    livingSpaces = [],
    sizes = [],
    colors = [],
    productInfo,
    livingSpaceIdsInfo,
    sizesInfo,
    colorsInfo,
    imagesInfo
}) {
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            product: productInfo?.product || "",
            desc: productInfo?.desc || "",
            costPrice: `${convertToNumberDb(productInfo?.cost_price)}` || "0",
            interestRate: `${convertToNumberDb(productInfo?.interest_rate) || "0"}`,
            discount: productInfo?.discount_type && productInfo?.discount_amount,
            discountType: productInfo?.discount_type || "amount",
            discountAmount: `${convertToNumberDb(productInfo?.discount_amount || "0")}`,
            finalPrice: `${convertToNumberDb(productInfo?.final_price || "0")}`,
            categoryId: productInfo?.category_id || "",
            livingSpaceIds: livingSpaceIdsInfo || [],
            sizes: sizesInfo || [],
            colors: colorsInfo || [],
            variants: [],
            colorImages: {},
            images: [...imagesInfo].sort((a, b) => 
                (b.main === true) - (a.main === true)
            ) || []
        }
    });

    const [submitting, setSubmitting] = useState(false);
    const [editImages, setEditImages] = useState(false);
    const [deletedImages, setDeletedImages] = useState([]);
    const [mainImages, setMainImages] = useState(() => {
        return imagesInfo?.filter(image => image?.main);
    });
    
    const watchName = form.watch("product");
    const watchColors = form.watch("colors");
    const watchSizes = form.watch("sizes");
    const watchCategoryId = form.watch("categoryId");

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
    }, [watchName, watchColors, watchSizes]);

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
        formData.append("categoryId", categoryId);
        formData.append("costPrice", convertToNumber(costPrice));
        formData.append("interestRate", convertToNumber(interestRate));
        formData.append("finalPrice", convertToNumber(finalPrice));
        formData.append("livingSpaceIds", JSON.stringify(livingSpaceIds));
        formData.append("sizeIds", JSON.stringify(newSizeIds));
        formData.append("colorIds", JSON.stringify(newColorIds));
        formData.append("variants", JSON.stringify(variants));

        // Thêm discount
        if (discount) {
            formData.append("discount", discount.toString());
            formData.append("discountType", discountType);
            formData.append("discountAmount", convertToNumber(discountAmount));
        }
        
        // Thêm khi đã chỉnh sửa ảnh
        if (editImages) {
            // Thêm ảnh
            images.forEach((image, index) => {
                if (image?.rootId) formData.append(`images[${index}][rootId]`, image.rootId);
                formData.append(`images[${index}][colorId]`, image.colorId);
                formData.append(`images[${index}][main]`, image.main.toString());
                
                if (typeof image.file === "string") formData.append(`images[${index}][url]`, image.file);
                else formData.append(`images[${index}][file]`, image.file);
            });

            // Thêm ảnh đã xóa
            if (deletedImages?.length > 0) formData.append("deletedImages", JSON.stringify(deletedImages));

            // Thêm ảnh chính
            mainImages?.forEach((image, index) => {
                if (image?.rootId) formData.append(`mainImages[${index}][rootId]`, image.rootId);
                formData.append(`mainImages[${index}][colorId]`, image.colorId);
                formData.append(`mainImages[${index}][main]`, image.main.toString());

                if (typeof image.file === "string") formData.append(`mainImages[${index}][url]`, image.file);
                else formData.append(`mainImages[${index}][file]`, image.file);
            })
        }

        const result = await editProduct(slug, formData);
        const message = result?.message;

        if (result?.success) {
            toast.success(message);
            router.replace(`/quan-tri/san-pham/chinh-sua-san-pham/${result?.data?.product?.slug}`);
        }
        else toast.error(message);

        setSubmitting(false);
    }

    return (
        <section className="space-y-[30px]">
            <header>
                <h2 className="text-[24px] font-semibold">Chỉnh sửa sản phẩm</h2>
            </header>

            <Form {...form}>
                <form
                    className="flex items-stretch gap-[20px]"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="space-y-[20px] w-[60%]">
                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductEditName form={form}/>
                            <AdminProductEditDesc form={form} />
                            <AdminProductEditPrice form={form} />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductEditDiscount form={form} />
                        </div>

                        <div className="p-[20px] space-y-[20px] rounded-[10px] bg-white">
                            <AdminProductEditCategory
                                form={form}
                                categories={categories}
                            />

                            <AdminProductEditLivingSpace
                                form={form}
                                livingSpaces={livingSpaces}
                            />

                            {
                                watchCategoryId && 
                                (
                                    <AdminProductEditSize
                                        form={form}
                                        sizes={sizes}
                                    />
                                )
                            }

                            <AdminProductEditColor
                                form={form}
                                colors={colors}
                                setEditImages={setEditImages}
                                setDeletedImages={setDeletedImages}
                                mainImages={mainImages}
                                setMainImages={setMainImages}
                            />

                            <Button
                                className="w-full"
                                disabled={submitting}
                            >
                                { submitting ? "Đang chỉnh sửa . . ." : "Chỉnh sửa sản phẩm" }
                            </Button>
                        </div>
                    </div>
                    
                    <AdminProductEditImage
                        form={form}
                        setEditImages={setEditImages}
                        setMainImages={setMainImages}
                        setDeletedImages={setDeletedImages}
                    />
                </form>
            </Form>
        </section>
    )
}