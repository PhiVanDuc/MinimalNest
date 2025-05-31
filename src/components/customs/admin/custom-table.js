"use client"

import { Fragment, useState } from "react";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getExpandedRowModel
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

export default function CustomTable({ data, columns, moreData = {}, enableExpandRow = false}) {
    const [expanded, setExpanded] = useState({});

    const table = useReactTable({
        data: data || [1, 2, 3, 4, 5],
        columns,
        getCoreRowModel: getCoreRowModel(),
        ...(enableExpandRow && {
            getExpandedRowModel: getExpandedRowModel(),
            getRowCanExpand: () => enableExpandRow,
            onExpandedChange: setExpanded,
        }),
        autoResetPageIndex: false,
        state: { expanded },
        meta: { moreData },
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
                    table.getRowModel().rows.map((row) => [
                        <TableRow
                            key={row?.id}
                            className={cn(
                                "bg-white transition cursor-pointer",
                                row.getIsExpanded() ? "bg-muted/50" : ""
                            )}
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
                        </TableRow>,

                        (enableExpandRow && row.getIsExpanded()) ?
                        (
                            <TableRow
                                key={`${row?.id}-expanded`}
                                className="hover:bg-white"
                            >
                                <TableCell colSpan={columns.length} className="p-[15px] rounded-[10px] border">
                                    {columns.find(col => col.accessorKey === 'expander')?.expandedContent?.({ 
                                        row,
                                        table,
                                        column: table.getColumn('expander'),
                                        cell: row.getVisibleCells().find(cell => cell.column.id === 'expander')
                                    })}
                                </TableCell>
                            </TableRow>
                        ) :
                        null
                    ])
                ) : (
                    <TableRow>
                        <TableCell className="h-24 text-center" colSpan={columns.length}>
                            Không có dữ liệu.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}