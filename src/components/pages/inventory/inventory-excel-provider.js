"use client"

import { createContext, useContext, useState } from "react"

const InventoryExcelContext = createContext();

export default function InventoryExcelProvider({ children }) {
    const [isDisplay, setIsDisplay] = useState(false);

    return (
        <InventoryExcelContext.Provider value={{ isDisplay, setIsDisplay }}>
            {children}
        </InventoryExcelContext.Provider>
    )
}

export function useIntentoryExcel() {
    return useContext(InventoryExcelContext);
}