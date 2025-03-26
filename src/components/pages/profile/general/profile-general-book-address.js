"use client"

import { useDispatch, useSelector } from "react-redux";
import { displayAddForm, displayEditForm, displayEmpty, displayListForm, displayPartial } from "@/redux/slices/address-dialog/address-dialog-slice";

import {
    Dialog,
    DialogTrigger
} from "@/components/ui/dialog";
import ProfileGeneralDialogs from "./dialog/profile-general-dialogs";

import { FaLocationDot } from "react-icons/fa6";
import { RotateCcw, PlusIcon } from "lucide-react";

export default function ProfileGeneralBookAddress() {
    const { partial, empty, list, add, edit } = useSelector(state => state.addressDialog);
    const dispatch = useDispatch();

    return (
        <div className="p-[20px] rounded-[10px] space-y-[10px] bg-neutral-100">
            <header className="flex items-center gap-[15px] text-darkBold">
                <FaLocationDot className="text-[22px]" />
                <h3 className="text-[18px] font-semibold">Sổ địa chỉ</h3>
            </header>

            <div className="space-y-[20px]">
                <div className="pl-[calc(21.94px+15px)] w-full sm:flex items-center justify-between gap-[20px] space-y-[20px] sm:space-y-0">
                    <div className="space-y-[5px] text-[15px] font-semibold text-darkBold">
                        <p className="truncate-1">Phí Văn Đức (+84) 328895451</p>
                        <p className="text-[14px] font-medium text-darkMedium truncate-1">Địa chỉ chi tiết mà người dùng nhập . . .</p>
                    </div>

                    <Dialog
                        open={partial}
                        onOpenChange={(open) => {
                            if (!partial) {
                                dispatch(displayPartial(true));
                                return;
                            }

                            if (!open) {
                                if (!list) {
                                    dispatch(displayListForm(true));
                                    if (add) dispatch(displayAddForm(false));
                                    else if (edit) dispatch(displayEditForm(false));
                                }
                                else {
                                    dispatch(displayListForm(false));
                                    dispatch(displayPartial(false));
                                }
                            }
                        }}
                    >
                        <DialogTrigger className="w-fit shrink-0">
                            <div
                                className="flex items-center gap-x-[15px] text-[15px] font-medium text-darkMedium cursor-pointer sm:px-[15px] sm:py-[8px] rounded-[8px] sm:hover:bg-neutral-200 transition-colors sm:duration-300"
                                onClick={() => { dispatch(displayListForm(true)); }}
                            >
                                <p className="whitespace-nowrap">Thay đổi</p>
                                <RotateCcw size={18} />
                            </div>
                        </DialogTrigger>

                        <ProfileGeneralDialogs />
                    </Dialog>
                </div>
                
                <div className="pl-[calc(21.94px+15px)] w-full sm:flex items-center justify-between gap-[20px] space-y-[20px] sm:space-y-0">
                    <div className="space-y-[5px] text-[15px] font-semibold text-darkBold">
                        <p className="truncate-1">Chưa có địa chỉ</p>
                        <p className="text-[14px] font-medium text-darkMedium truncate-1">Bạn có thể thêm địa chỉ của bạn cho việc thuận tiện đặt hàng.</p>
                    </div>

                    <Dialog
                        open={empty}
                        onOpenChange={(open) => {
                            if (!empty) {
                                dispatch(displayEmpty(true));
                                return;
                            }

                            if (!open) {
                                if (!list) {
                                    dispatch(displayListForm(true));
                                    if (add) dispatch(displayAddForm(false));
                                    else if (edit) dispatch(displayEditForm(false));
                                }
                                else {
                                    dispatch(displayListForm(false));
                                    dispatch(displayEmpty(false));
                                }
                            }
                        }}
                    >
                        <DialogTrigger className="shrink-0">
                            <div
                                className="flex items-center gap-x-[15px] text-[15px] font-medium text-darkMedium cursor-pointer sm:px-[15px] sm:py-[8px] rounded-[8px] sm:hover:bg-neutral-200 transition-colors sm:duration-300"
                                onClick={() => { dispatch(displayAddForm(true)); }}
                            >
                                <p className="whitespace-nowrap">Thêm địa chỉ</p>
                                <PlusIcon size={18} />
                            </div>
                        </DialogTrigger>

                        <ProfileGeneralDialogs />
                    </Dialog>
                </div>
            </div>
        </div>
    )
}