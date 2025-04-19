"use client"

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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
import cartColumns from "./cart-columns";
import { addCartProduct } from "@/redux/slices/cart-products/cart-selected-products-slice";

export default function CartTable({ data }) {
    const dispatch = useDispatch();
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns: cartColumns(),
        state: { rowSelection },
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
    });

    const selectedProducts = table.getSelectedRowModel().rows.map(r => r.original);

    useEffect(() => {
        dispatch(addCartProduct(selectedProducts))
    }, [selectedProducts, dispatch])

    return (
        <div className="relative w-full">
            <div className="w-full overflow-hidden rounded-[10px] border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="hover:bg-white">
                                {headerGroup.headers.map((header, index) => (
                                    <TableHead
                                        key={header.id}
                                        className={cn(
                                            "p-[15px]",
                                            index === 0 ? "w-0" : ""
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
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="p-[15px] cursor-pointer"
                                            onClick={() => { row.toggleSelected() }}
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={cartColumns.length} className="h-24 text-center">
                                    Không có sản phẩm nào.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}