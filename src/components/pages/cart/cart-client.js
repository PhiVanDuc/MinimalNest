"use client"

import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import CartSummary from "./cart-summary";
import cartColumns from "./table/cart-columns";
import Error from "@/components/customs/error";
import CustomTable from "@/components/customs/admin/custom-table";

import { TooltipProvider } from "@/components/ui/tooltip";
import { getCart } from "@/lib/api/server-action/cart";
import CartLoading from "./cart-loading";

export default function CartClient({ decode }) {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const form = useForm({
        defaultValues: {
            products: []
        }
    });

    const productsArray = useFieldArray({
        control: form.control,
        name: "products",
        keyName: "_id"
    });

    useEffect(() => {
        const fetchCart = async () => {
            const { status, result: cartResult } = await getCart(decode?.decode?.id || "");
            if (!cartResult?.success) {
                setError(`${status},${cartResult?.message}`);
                setLoading(false);
                return;
            }
            
            setCart(cartResult?.data?.cart);

            form.reset({
                products: cartResult?.data?.cart?.cart_items?.map(item => ({
                    ...item,
                    selected: false
                })) || []
            });
            
            setLoading(false);
        };

        fetchCart();
    }, []);

    if (loading) return <CartLoading />
    if (error) return <Error message={error} />

    return (
        <div className="space-y-[40px]">
            <header className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                <h1 className="text-[20px] md:text-[24px] font-semibold text-darkBold">Giỏ hàng</h1>
                <p className="text-[14px] md:text-[16px] font-medium text-darkBold">Có <span className="text-yellowBold">{cart?.cart_items?.length || 0} sản phẩm</span> trong giỏ hàng của bạn.</p>
            </header>

            <div className="relative flex flex-col xl:flex-row items-start gap-[20px]">
                <TooltipProvider>
                    <CustomTable
                        data={cart?.cart_items || []}
                        columns={cartColumns}
                        moreData={{
                            form,
                            productsArray,
                            setCart
                        }}
                    />
                </TooltipProvider>

                <CartSummary
                    accountId={decode?.decode?.id}
                    form={form}
                />
            </div>
        </div>
    )
}