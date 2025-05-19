"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import RoleDeleteDialog from "./role-delete-dialog";
import { BsThreeDotsVertical } from "react-icons/bs";

import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function RoleTableAction({ data, permissions }) {
    const router = useRouter();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [isEditRole, setIsEditRole] = useState(() => permissions?.includes("edit-role"));
    const [isDeleteRole, setIsDeleteRole] = useState(() => permissions?.includes("delete-role"));

    return (
        <div className="flex justify-center">
            {
                !isEditRole && !isDeleteRole ?
                ( <p>Không có quyền truy cập.</p> ) :
                (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex items-center justify-center w-[35px] aspect-square rounded-[5px]">
                                    <BsThreeDotsVertical size={20} />
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                alignOffset={10}
                            >
                                {
                                    isEditRole && (
                                        <DropdownMenuItem
                                            className={cn(
                                                "",
                                                data?.slug === "sieu-quan-tri" ? "opacity-50 cursor-not-allowed" : "cursor-pointer opacity-100"
                                            )}
                                            onClick={() => {
                                                if (data?.slug === "sieu-quan-tri") {
                                                    toast.warning("Không thể chỉnh sửa vai trò siêu quản trị!");
                                                    return;
                                                }
                                                router.push(`/quan-tri/vai-tro/chinh-sua-vai-tro/${data?.slug}`)
                                            }}
                                        >
                                            Chỉnh sửa
                                        </DropdownMenuItem>
                                    )
                                }

                                {
                                    isDeleteRole && (
                                        <DropdownMenuItem
                                            className={cn(
                                                "",
                                                data?.slug === "sieu-quan-tri" ? "opacity-50 cursor-not-allowed" : "cursor-pointer opacity-100"
                                            )}
                                            onClick={() => {
                                                setOpenDeleteDialog(true);
                                            }}
                                        >
                                            Xóa
                                        </DropdownMenuItem>
                                    )
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <RoleDeleteDialog open={openDeleteDialog} setOpen={setOpenDeleteDialog} slug={data?.slug} />
                    </>
                )
            }
        </div>
    )
}
