"use client"

import { useState, useEffect } from "react";
import {
    useForm,
    useFieldArray
} from "react-hook-form";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";
import AdminProductDiscountTab from "./admin-product-discount-tab";
import AdminProductDiscountForm from "./form/admin-product-discount-form";
import AdminProductDiscountTable from "./table/admin-product-discount-table";

import { Form } from "@/components/ui/form";
import { TooltipProvider } from "@/components/ui/tooltip";

import { toast } from "sonner";
import { convertToNumber, convertToNumberDb } from "@/lib/utils/format-currency";
import { addGeneralDiscount, editGeneralDiscount } from "@/lib/api/server-action/general-discount";

import { getCategories } from "@/lib/api/server-action/categories";
import { getLivingSpaces } from "@/lib/api/server-action/living-space";
import { getProductTypes } from "@/lib/api/server-action/product-type";
import { getGeneralDiscounts } from "@/lib/api/server-action/general-discount";

export default function AdminProductDiscount() {
    const form = useForm({
        defaultValues: {
            discounts: []
        }
    });

    const formArray = useFieldArray({
        control: form.control,
        name: "discounts"
    });

    const [products, setProducts] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [discountSelected, setDiscountSelected] = useState(null);
    
    const [productTypes, setProductTypes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [livingSpaces, setLivingSpaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const [generalDiscountsRes, productTypesRes, categoriesRes, livingSpacesRes] = await Promise.all([
                getGeneralDiscounts(),
                getProductTypes(),
                getCategories(),
                getLivingSpaces()
            ]);

            const { status: generalDiscountsStatus, result: generalDiscounts } = generalDiscountsRes;
            const { status: productTypesStatus, result: productTypes } = productTypesRes;
            const { status: categoriesStatus, result: categories } = categoriesRes;
            const { status: livingSpacesStatus, result: livingSpaces } = livingSpacesRes;

            if (!generalDiscounts?.success) {
                setError(`${generalDiscountsStatus},${generalDiscounts?.message} - Giảm giá chung`);
                setLoading(false);
                return;
            }

            if (!productTypes?.success) {
                setError(`${productTypesStatus},${productTypes?.message} - Loại sản phẩm`);
                setLoading(false);
                return;
            }

            if (!categories?.success) {
                setError(`${categoriesStatus},${categories?.message} - Danh mục`);
                setLoading(false);
                return;
            }

            if (!livingSpaces?.success) {
                setError(`${livingSpacesStatus},${livingSpaces?.message} - Không gian sống`);
                setLoading(false);
                return;
            }

            form.reset({
                discounts: generalDiscounts?.data?.general_discounts?.map(item => ({ ...item, discountAmount: `${convertToNumberDb(item?.discountAmount)}` })) || []
            });

            setProductTypes(productTypes?.data?.product_types);
            setCategories(categories?.data?.categories);
            setLivingSpaces(livingSpaces?.data?.living_spaces);

            setLoading(false);
        })();
    }, []);
    
    const currentDiscount = form.watch(`discounts.${discountSelected}`);

    useEffect(() => {
        if (formArray.fields.length && discountSelected === null) {
            setDiscountSelected(0);
        }
    }, [formArray.fields.length]);

    useEffect(() => {
        setProducts([]);
    }, [currentDiscount]);

    const onSubmit = async (data) => {
        if (submitting) return;
        setSubmitting(true);

        const generalDiscount = currentDiscount?.rootId ?
        await editGeneralDiscount({ ...data?.discounts[discountSelected], discountAmount: convertToNumber(data?.discounts[discountSelected]?.discountAmount) }, currentDiscount?.rootId) :
        await addGeneralDiscount(data?.discounts[discountSelected]);

        const message = generalDiscount?.message;
        if (generalDiscount?.success) {
            toast.success(message);

            if (!currentDiscount?.rootId) {
                formArray.update(discountSelected, {
                    ...formArray?.fields[discountSelected],
                    rootId: generalDiscount?.data?.general_discount?.id
                });
            }
        }
        else toast.error(message);

        setSubmitting(false);
    }

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <div className="space-y-[30px]">
            <header className="space-y-[5px]">
                <h1 className="text-[24px] font-semibold">Giảm giá chung</h1>
                <p className="text-[14px] text-darkMedium font-medium">Bạn có thể tạo ra nhiều giảm giá áp dụng cho nhiều sản phẩm khác nhau dựa vào bộ lọc.</p>
            </header>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-[20px]"
                >
                    <AdminProductDiscountTab
                        formArray={formArray}
                        discountSelected={discountSelected}
                        setDiscountSelected={setDiscountSelected}
                    />

                    {
                        typeof discountSelected === "number" &&
                        ( 
                            <AdminProductDiscountForm
                                key={discountSelected}
                                form={form}
                                formArray={formArray}
                                index={discountSelected}
                                data={{
                                    productTypes,
                                    categories,
                                    livingSpaces
                                }}
                                setDiscountSelected={setDiscountSelected}
                                submitting={submitting}
                            />
                        )
                    }
                </form>
            </Form>

            {
                currentDiscount &&
                <TooltipProvider>
                    <AdminProductDiscountTable
                        form={form}
                        formArray={formArray}
                        index={discountSelected}
                        currentDiscount={currentDiscount}
                        products={products}
                        setProducts={setProducts}
                    />
                </TooltipProvider>
            }
        </div>
    )
}