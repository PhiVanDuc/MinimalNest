"use client"

import { useState, useEffect } from "react";

import Error from "@/components/customs/error";
import MainLoading from "@/components/customs/main-loading";

import { getCategories } from "@/lib/api/server-action/categories";

export default function GeneralDiscount() {
    const [productTypes, setProductTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: productTypes } = await getCategories();

            console.log(status);
            console.log(productTypes);

            if (!productTypes?.success) {
                setError(`${status},${productTypes?.message} - Loại sản phẩm`);
                setLoading(false);
                return;
            }

            setProductTypes(productTypes?.data?.categories);
            setLoading(false);
        })();
    }, []);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <div className="space-y-[10px]">
            <p className="text-[16px] font-medium">Fetch danh mục.</p>
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
