"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";
import AdminCouponDeleteDialog from "./admin-coupon-delete-dialog";

export default function AdminCouponTableAction({ couponId, permissions }) {
    const router = useRouter();

    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [isEditCoupon, setIsEditCoupon] = useState(() => permissions?.includes("edit-coupon"));
    const [isDeleteCoupon, setIsDeleteCoupon] = useState(() => permissions?.includes("delete-coupon"));

    return (
        <div className="flex justify-center">
            {
                !isEditCoupon || !isDeleteCoupon ?
                ( <p>Không có quyền truy cập.</p> ) :
                (
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
                                isEditCoupon &&
                                (
                                    <DropdownMenuItem
                                        className="cursor-pointer"
                                        onClick={() => { router.push(`/quan-tri/phieu-giam-gia/chinh-sua-phieu-giam-gia/${couponId}`) }}
                                    >
                                        Chỉnh sửa
                                    </DropdownMenuItem>
                                )
                            }

                            {
                                isDeleteCoupon &&
                                (
                                    <DropdownMenuItem
                                        className="cursor-pointer"
                                        onClick={() => { setOpenDialogDelete(true) }}
                                    >
                                        Xóa
                                    </DropdownMenuItem>
                                )
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }

            <AdminCouponDeleteDialog open={openDialogDelete} setOpen={setOpenDialogDelete} couponId={couponId} />
        </div>
    )
}
