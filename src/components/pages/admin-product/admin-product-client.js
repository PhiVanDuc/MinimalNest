"use client"

import { useEffect, useState } from "react";

import Error from "@/components/customs/error";
import AdminProductLoading from "./admin-product-loading";

import columns from "./columns";
import AdminProductButton from "./admin-product-button";
import AdminProductAddExcel from "./admin-product-add-excel";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import AdminProductFilter from "./admin-product-filter/admin-product-filter";

import { TooltipProvider } from "@/components/ui/tooltip";

import { getProducts } from "@/lib/api/server-action/product";

export default function AdminProductClient({
    permissions,
    searchParams
}) {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: products } = await getProducts({ page: searchParams?.page || 1, product: searchParams?.product || "" });

            if (!products?.success) {
                setError(`${status},${products?.message}`);
                setLoading(false);
                return;
            }

            setProducts(products);
            setLoading(false);
        })();
    }, [searchParams]);

    if (loading) return <AdminProductLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý sản phẩm</h1>
                    <AdminProductButton permissions={permissions || []} />
                </div>
                
                <AdminProductFilter />
            </header>

            { permissions?.includes("add-product") && <AdminProductAddExcel /> }

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <TooltipProvider>
                    <CustomTable
                        data={products?.data?.rows || []}
                        columns={columns}
                        moreData={{ permissions: permissions || [] }}
                    />
                </TooltipProvider>

                {
                    products?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={+searchParams?.page || 1}
                        pageSize={products?.data?.pageSize || 0}
                        totalCount={products?.data?.totalItems || 0}
                    />
                }
            </div>
        </section>
    )
}