"use client"

import { useState, useEffect } from "react";

import columns from "./columns";
import Error from "@/components/customs/error";
import CustomTable from "@/components/customs/admin/custom-table";

import { getBestSellerProducts } from "@/lib/api/server-action/dashboard";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function DashboardTopProduct() {
    const [topProducts, setTopProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: topProducts } = await getBestSellerProducts();

            if (!topProducts?.success) {
                setError(`${status},${topProducts?.message}`);
                setLoading(false);
                return;
            }

            setTopProducts(topProducts?.data?.products);
            setLoading(false);
        })();
    }, []);

    if (loading) return <></>;
    if (error) return <Error message={error} />;

    return (
        <div className="p-[25px] rounded-[10px] bg-white space-y-[20px]">
            <header className="flex justify-between">
                <h2 className="text-[18px] font-semibold">Sản phẩm bán chạy</h2>
            </header>

            <TooltipProvider>
                <CustomTable
                    data={topProducts}
                    columns={columns}
                />
            </TooltipProvider>
        </div>
    )
}