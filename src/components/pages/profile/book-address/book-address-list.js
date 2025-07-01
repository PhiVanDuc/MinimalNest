"use client"

import { Button } from "@/components/ui/button";
import { FiEdit2 } from "react-icons/fi";

import { cn } from "@/lib/utils";

export default function BookAddressList({
    form,
    userInfo,
    bookAddressesList
}) {
    const watchId = form.watch("id");

    const handleEditAddress = (address) => {        
        form.setValue("id", address.id);
        form.setValue("fullName", address.full_name);
        form.setValue("phoneNumber", address.phone_number);
        form.setValue("address", address.address);
        form.setValue("defaultAddress", address.default_address);

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleCancelEdit = () => {
        form.reset({
            id: "",
            fullName: userInfo?.full_name || "",
            phoneNumber: "",
            address: "",
            defaultAddress: true
        });
    };

    return (
        <div className="space-y-[20px] pt-[20px]">
            <section>
                <h2 className="text-[18px] font-semibold">Danh sách địa chỉ</h2>
                <p className="text-[15px] font-medium text-darkBland">Bạn có thể chỉnh sửa hoặc xóa bất kỳ địa chỉ nào trong danh sách dưới đây.</p>
            </section>

            {
                bookAddressesList?.length > 0 ?
                bookAddressesList?.map(address => {
                    return (
                        <div
                            key={address?.id}
                            className="border rounded-[10px] p-[20px]"
                        >

                            <div className="flex items-center justify-between gap-[40px]">
                                <div className="space-y-[5px]">
                                    <div className="flex flex-wrap items-center gap-[10px]">
                                        <p className="text-[16px] font-semibold">{address?.full_name}</p>
                                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                        <p className="text-[15px] font-medium text-darkMedium">{address?.phone_number}</p>
                                    </div>

                                    <p className="text-[15px] font-medium text-darkMedium">{address?.address}</p>
                                </div>

                                <Button
                                    className={cn(
                                        "bg-white hover:bg-neutral-200 shadow-none text-darkMedium gap-[10px]",
                                        watchId === address.id && "text-red-500"
                                    )}
                                    onClick={() => {
                                        if (watchId === address.id) {
                                            handleCancelEdit();
                                        } else {
                                            handleEditAddress(address);
                                        }
                                    }}
                                >
                                    <FiEdit2 size={15} />
                                    {watchId === address.id ? "Hủy chỉnh sửa" : "Chỉnh sửa"}
                                </Button>
                            </div>
                        </div>
                    )
                }) :
                <p className="text-darkMedium text-center italic">Bạn chưa có địa chỉ nào.</p>
            }
        </div>
    )
}
