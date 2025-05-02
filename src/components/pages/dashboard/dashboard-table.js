"use client"

import {
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

import { cn } from "@/lib/utils";

export default function DashboardTable({ columns, data }) {
    const table = useReactTable({
        data: data || [1, 1, 1, 1, 1],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Table className="border-separate border-spacing-y-[10px]">
            <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow
                            key={headerGroup.id}
                            className="border-none bg-neutral-50 hover:bg-neutral-50"
                        >
                            {headerGroup.headers.map((header, index) => (
                                <TableHead
                                    key={header.id}
                                    className={cn(
                                        "p-[15px]",
                                        index === 0 ? "rounded-tl-[10px] rounded-bl-[10px]" : "",
                                        index === headerGroup.headers.length - 1 ? "rounded-tr-[10px] rounded-br-[10px]" : ""
                                    )}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader> 

            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            className="border-none bg-white transition cursor-pointer"
                        >
                            {row.getVisibleCells().map((cell, index) => (
                                <TableCell
                                    key={cell.id}
                                    className={cn(
                                        "p-[15px] cursor-pointer",
                                        index === 0 ? "rounded-tl-[10px] rounded-bl-[10px]" : "",
                                        index === row.getVisibleCells().length - 1 ? "rounded-tr-[10px] rounded-br-[10px]" : ""
                                    )}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell className="h-24 text-center">
                            Không có sản phẩm nào.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
