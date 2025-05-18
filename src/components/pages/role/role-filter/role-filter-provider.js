"use client"

import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "next/navigation";

const RoleFilterContext = createContext();

export default function RoleFilterProvider({ children }) {
    const searchParams = useSearchParams();

    const initialRole = searchParams.get("role") || "";
    const initialPage = parseInt(searchParams.get("page") || "1");

    const [role, setRole] = useState(initialRole);
    const [page, setPage] = useState(initialPage);

    return (
        <RoleFilterContext.Provider value={{ role, setRole, page, setPage }}>
            {children}
        </RoleFilterContext.Provider>
    )
}

export function useRoleFilter() {
    return useContext(RoleFilterContext);
}