"use client"

import { useState, useEffect } from "react";

import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import Error from "@/components/customs/error";
import InventoryButton from "./inventory-button";
import InventoryAddExcel from "./inventory-add-excel";
import InventoryLoading from "./inventory-loading";
import InventoryBasicAnalysis from "./inventory-basic-analysis";
import InventoryExcelProvider from "./inventory-excel-provider";
import InventoryFilter from "./inventory-filter/inventory-filter";

import { TooltipProvider } from "@/components/ui/tooltip";

import { analysisInventory, getInventories } from "@/lib/api/server-action/inventory";

export default function InventoryClient({
    permissions,
    searchParams
}) {
    const [analysis, setAnalysis] = useState({});
    const [inventories, setInventories] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const [analysisInventoryRes, inventoriesRes] = await Promise.all([
                await analysisInventory(),
                await getInventories({ page: searchParams?.page || 1, product: searchParams?.product || "" })
            ]);

            const { status: analysisStatus, result: analysis } = analysisInventoryRes;
            const { status: inventoriesStatus, result: inventories } = inventoriesRes;

            if (!analysis?.success) {
                setError(`${analysisStatus},${analysis?.message}`);
                setLoading(false);
                return;
            }

            if (!inventories?.success) {
                setError(`${inventoriesStatus},${inventories?.message}`);
                setLoading(false);
                return;
            }

            setAnalysis(analysis);
            setInventories(inventories);
            setLoading(false);
        })();
    }, [searchParams]);

    if (loading) return <InventoryLoading />
    if (error) return <Error message={error} />

    return (
        <section className="space-y-[20px]">
            <InventoryExcelProvider>
                <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[22px] font-semibold">Quản lý tồn kho</h1>
                        <InventoryButton permissions={permissions || []} />
                    </div>
                    <InventoryFilter />
                </header>

                {
                    permissions?.includes("add-inventory") && <InventoryAddExcel />
                }
            </InventoryExcelProvider>

            <InventoryBasicAnalysis analysis={analysis?.data} />

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <TooltipProvider>
                    <CustomTable
                        data={inventories?.data?.rows}
                        columns={columns}
                        enableExpandRow={true}
                        moreData={{
                            permissions: permissions || []
                        }}
                    />
                </TooltipProvider>

                {
                    inventories?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={+searchParams?.page || 1}
                        pageSize={inventories?.data?.pageSize || 0}
                        totalCount={inventories?.data?.totalItems || 0}
                    />
                }
            </div>
        </section>
    )
}