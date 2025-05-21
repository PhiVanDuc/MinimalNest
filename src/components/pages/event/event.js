import columns from "./columns";

import CustomTable from "@/components/customs/admin/custom-table";
import EventButtonAdd from "./event-button-add";
import EventFilter from "./event-filter/event-filter";
import CustomPagination from "@/components/customs/admin/custom-pagination";
import Error from "@/components/customs/error";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getEvents } from "@/lib/api/server-action/event";

export default async function Event({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();
    const { response, result: events } = await getEvents({
        page: searchParams?.page || 1,
        event: searchParams?.event || ""
    });

    if (!events?.success) return <Error message={`${response?.status},${events?.message}`} />

    return (
        <section className="space-y-[20px]">
            <header className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[22px] font-semibold">Quản lý sự kiện</h1>
                    { permissions?.includes("add-event") && <EventButtonAdd /> }
                </div>

                <EventFilter />
            </header>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <CustomTable
                    data={events?.data?.rows}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />
                <CustomPagination page={events?.data?.currentPage} pageSize={events?.data?.pageSize} totalCount={events?.data?.totalItem} />
            </div>
        </section>
    )
}