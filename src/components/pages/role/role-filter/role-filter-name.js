"use client"

import { useRoleFilter } from "./role-filter-provider";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

export default function RoleFilterName() {
    const router = useRouter();
    const { role, setRole } = useRoleFilter();

    return (
        <div className="h-full flex flex-wrap items-center gap-[5px] w-full">
            <div className="relative h-full">
                <Input
                    placeholder="Tìm tên sản phẩm"
                    className="w-[250px] h-full px-[12px] pr-[45px] rounded-full text-[13px] bg-white"
                    value={role}
                    onChange={(e) => {
                        setRole(e.target.value);
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
                                if (!role) {
                                    router.push(`/quan-tri/vai-tro`);
                                    return;
                                }

                                router.push(`/quan-tri/vai-tro?role=${role}`);
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
