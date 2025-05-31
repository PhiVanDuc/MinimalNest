"use client"

import { useState } from "react";

import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getPaginationRowModel,
    ColumnFiltersState,
    getFilteredRowModel,

} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

export default function CustomTableUtil({
    data,
    columns,
    moreData = {},
    enableExpandRow = false,
    pagination = false,
    pageSize = 15,
    filter = false,
    filterCol = ""
}) {
    const [expanded, setExpanded] = useState({});
    const [columnFilters, setColumnFilters] = useState([]);

    const table = useReactTable({
        data: data || [1, 2, 3, 4, 5],
        columns,
        getCoreRowModel: getCoreRowModel(),
        ...(
            enableExpandRow && {
                onExpandedChange: setExpanded,
                getExpandedRowModel: getExpandedRowModel(),
                getRowCanExpand: () => enableExpandRow,
            }
        ),
        ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
        ...(filter && {
            onColumnFiltersChange: setColumnFilters,
            getFilteredRowModel: getFilteredRowModel(),
        }),
        state: {
            expanded,
            columnFilters
        },
        initialState: {
            pagination: {
                pageSize
            }
        },
        autoResetPageIndex: false,
        meta: { moreData },
    });

    return (
        <div>
            {
                filter && (
                    <div className="flex items-center">
                        <Input
                            placeholder="Tìm kiếm tên sản phẩm ..."
                            value={(table.getColumn(filterCol)?.getFilterValue()) ?? ""}
                            onChange={(event) =>
                                table.getColumn(filterCol)?.setFilterValue(event.target.value)
                            }
                            className="w-full"
                        />
                    </div>
                )
            }

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

            {
                pagination && (
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Trước
                        </Button>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Tiếp theo
                        </Button>
                    </div>
                )
            }
        </div>
    )
}