"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import BookAddressForm from "./book-address-form";
import BookAddressList from "./book-address-list";

export default function BookAddressClient({
    decode,
    bookAddresses
}) {
    const form = useForm({
        defaultValues: {
            id: "",
            fullName: decode?.full_name || "",
            phoneNumber: "",
            address: "",
            defaultAddress: true
        }
    });

    const [bookAddressesList, setBookAddressesList] = useState(bookAddresses || []);

    return (
        <div className="space-y-[40px] w-full">
            <header className="space-y-[5px]">
                <h1 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sổ địa chỉ</h1>
                <p className="text-[15px] font-medium text-darkBland">Quản lý những địa chỉ bạn muốn chúng tôi giao hàng tới.</p>
            </header>

            <BookAddressForm
                form={form}
                decode={decode}
                setBookAddressesList={setBookAddressesList}
            />

            <BookAddressList
                form={form}
                decode={decode}
                bookAddressesList={bookAddressesList}
            />
        </div>
    )
}
