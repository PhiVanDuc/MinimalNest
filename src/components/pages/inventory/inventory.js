import columns from "./columns";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import InventoryButton from "./inventory-button";
import InventoryFilter from "./inventory-filter/inventory-filter";
import InventoryBasicAnalysis from "./inventory-basic-analysis";
import InventoryAddExcel from "./inventory-add-excel";
import Error from "@/components/customs/error";

import { TooltipProvider } from "@/components/ui/tooltip";

import getAccessToken from "@/lib/utils/getAccessToken";
import { analysisInventory, getInventories } from "@/lib/api/server-action/inventory";
import InventoryExcelProvider from "./inventory-excel-provider";

export default async function Inventory({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    const [analysisInventoryRes, inventoriesRes] = await Promise.all([
        await analysisInventory(),
        await getInventories({ page: searchParams?.page || 1, product: searchParams?.product || "" })
    ]);

    const { response: analysisResponse, result: analysis } = analysisInventoryRes;
    const { response: inventoriesResponse, result: inventories } = inventoriesRes;

    if (!analysis?.success) return <Error message={`${analysisResponse?.status},${analysis?.message}`} />
    if (!inventories?.success) return <Error message={`${inventoriesResponse?.status},${inventories?.message}`} />
    
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
                <CustomPagination page={+searchParams?.page || 1} pageSize={inventories?.data?.pageSize || 0} totalCount={inventories?.data?.totalItems || 0} />
            </div>
        </section>
    )
}
