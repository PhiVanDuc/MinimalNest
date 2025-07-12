"use client"

import { useState, useEffect } from "react";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import { getProductTypes } from "@/lib/api/server-action/product-type";

export default function GeneralDiscount() {
    const [productTypes, setProductTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: productTypes } = await getProductTypes();

            console.log(status);
            console.log(productTypes);

            if (!productTypes?.success) {
                setError(`${status},${productTypes?.message} - Loại sản phẩm`);
                setLoading(false);
                return;
            }

            setProductTypes(productTypes?.data?.product_types);
            setLoading(false);
        })();
    }, []);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <div className="space-y-[10px]">
            <p className="text-[16px] font-medium">Fetch loại sản phẩm.</p>
            <ul className="space-y-[5px]">
                {
                    productTypes.map(prodType => {
                        return (
                            <li key={prodType.id}>{prodType.slug}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
