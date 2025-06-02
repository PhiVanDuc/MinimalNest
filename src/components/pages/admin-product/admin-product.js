import columns from "./columns";
import AdminProductButton from "./admin-product-button";

import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import AdminProductFilter from "./admin-product-filter/admin-product-filter";

import Error from "@/components/customs/error";
import { TooltipProvider } from "@/components/ui/tooltip";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getProducts } from "@/lib/api/server-action/product";

export default async function AdminProduct({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();
    const { response, result: products } = await getProducts({ page: searchParams?.page || 1, product: searchParams?.product || "" });

    if (!products?.success) return <Error message={`${response?.status},${products?.message}`} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý sản phẩm</h1>
                    <AdminProductButton permissions={permissions || []} />
                </div>

                <AdminProductFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <TooltipProvider>
                    <CustomTable
                        data={products?.data?.rows || []}
                        columns={columns}
                        moreData={{ permissions: permissions || [] }}
                    />
                </TooltipProvider>
                <CustomPagination page={+searchParams?.page || 1} pageSize={products?.data?.pageSize || 0} totalCount={products?.data?.totalItems || 0} />
            </div>
        </section>
    )
}