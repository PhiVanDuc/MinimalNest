"use client"

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

export default function RolePagination() {
    return (
        <div
            className="flex justify-center"
        >
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
