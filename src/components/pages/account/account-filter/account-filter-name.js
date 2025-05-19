"use client"

import { useAccountFilter } from "./account-filter-provider";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

export default function AccountFilterName() {
    const router = useRouter();
    const pathname = usePathname();
    const { accountName, setAccountName } = useAccountFilter();

    return (
        <div className="h-full flex flex-wrap items-center gap-[5px] w-full">
            <div className="relative h-full">
                <Input
                    placeholder="Tìm tên người dùng . . ."
                    className="w-[250px] h-full px-[12px] pr-[45px] rounded-full text-[13px] bg-white"
                    value={accountName}
                    onChange={(e) => {
                        setAccountName(e.target.value);
                    }}
                />

                <div className="text-darkMedium absolute top-[50%] translate-y-[-50%] right-0 px-[15px] bg-white rounded-full">
                    <Search
                        size={15}
                    />
                </div>
            </div>

            {/* Nút tìm kiếm */}
            <TooltipProvider
                delayDuration={100}
            >
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className="shrink-0 h-full aspect-square rounded-full flex items-center justify-center border text-darkMedium bg-white cursor-pointer"
                            onClick={() => {
                                if (!accountName) {
                                    router.push(pathname);
                                    return;
                                }

                                router.push(`${pathname}?name=${accountName}`);
                            }}
                        >
                            <Search size={15} />
                        </div>
                    </TooltipTrigger>

                    <TooltipContent>
                        <p>Tìm kiếm.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}
