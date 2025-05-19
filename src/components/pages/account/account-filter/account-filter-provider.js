"use client"

import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "next/navigation";

const AccountFilterContext = createContext();

export default function AccountFilterProvider({ children }) {
    const searchParams = useSearchParams();

    const initialRole = searchParams.get("name") || "";
    const initialPage = parseInt(searchParams.get("page") || "1");

    const [accountName, setAccountName] = useState(initialRole);
    const [page, setPage] = useState(initialPage);

    return (
        <AccountFilterContext.Provider value={{ accountName, setAccountName, page, setPage }}>
            {children}
        </AccountFilterContext.Provider>
    )
}

export function useAccountFilter() {
    return useContext(AccountFilterContext);
}