"use client"

import { useEffect, useState } from "react";

import columns from "./columns";

import Error from "@/components/customs/error";
import EventButtonAdd from "./event-button-add";
import EventFilter from "./event-filter/event-filter";
import MainLoading from "@/components/customs/main-loading";
import CustomTable from "@/components/customs/admin/custom-table";
import CustomPagination from "@/components/customs/admin/custom-pagination";

import { getEvents } from "@/lib/api/server-action/event";

export default function EventClient({
    permissions,
    searchParams
}) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result: events } = await getEvents({
                page: searchParams?.page || 1,
                event: searchParams?.event || ""
            });

            if (!events?.success) {
                setError(`${status},${events?.message}`);
                setLoading(false);
                return;
            }

            setEvents(events);
            setLoading(false);
        })()
    }, [searchParams]);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

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
                    data={events?.data?.rows || []}
                    columns={columns}
                    moreData={{ permissions: permissions || [] }}
                />

                {
                    events?.data?.rows?.length > 0 &&
                    <CustomPagination
                        page={events?.data?.currentPage}
                        pageSize={events?.data?.pageSize}
                        totalCount={events?.data?.totalItem}
                    />
                }
            </div>
        </section>
    )
}
