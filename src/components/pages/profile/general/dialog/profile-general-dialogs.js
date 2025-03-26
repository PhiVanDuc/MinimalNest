"use client"

import { useSelector } from "react-redux";
import { DialogContent } from "@/components/ui/dialog";

import ProfileGeneralAddAddressForm from "./profile-general-add-address-form";
import ProfileGeneralListAddressForm from "./profile-general-list-address-form";
import ProfileGeneralEditAddressForm from "./profile-general-edit-address-form";

export default function ProfileGeneralDialogs() {
    const { list, add, edit } = useSelector(state => state.addressDialog);

    return (
        <DialogContent className="w-full max-w-[550px] p-0 gap-[30px] py-[24px]">
            { list && <ProfileGeneralListAddressForm /> } 
            { add && <ProfileGeneralAddAddressForm /> }
            { edit && <ProfileGeneralEditAddressForm /> }
        </DialogContent>
    )
}