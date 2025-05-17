"use client"

import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog";
import AccountEdit from "./account-edit";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function AccountTableAction({ row }) {
    const router = useRouter();

    return (
        <div className="flex justify-center">
            <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center justify-center w-[35px] aspect-square rounded-[5px]">
                            <BsThreeDotsVertical size={20} />
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        alignOffset={10}
                    >
                        <DialogTrigger asChild>
                            <DropdownMenuItem
                                onSelect={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                            >
                                Chỉnh sửa
                            </DropdownMenuItem>
                        </DialogTrigger>
                    </DropdownMenuContent>

                    <AccountEdit />
                </DropdownMenu>
            </Dialog>
        </div>
    )
}
