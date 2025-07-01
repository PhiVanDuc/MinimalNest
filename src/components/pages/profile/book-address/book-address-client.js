"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Error from "@/components/customs/error";
import BookAddressForm from "./book-address-form";
import BookAddressList from "./book-address-list";
import MainLoading from "@/components/customs/main-loading";

import { getBookAddresses } from "@/lib/api/server-action/book-address";

export default function BookAddressClient({ userInfo }) {
    const form = useForm({
        defaultValues: {
            id: "",
            fullName: userInfo?.full_name || "",
            phoneNumber: "",
            address: "",
            defaultAddress: true
        }
    });

    const [bookAddressesList, setBookAddressesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            const { status, result } = await getBookAddresses(userInfo?.id);
            if (!result?.success) {
                setError(`${status},${result?.message}`);
                setLoading(false);
                return;
            }

            setBookAddressesList(result?.data?.book_addresses);
            setLoading(false);
        })();
    }, []);

    if (loading) return <MainLoading />
    if (error) return <Error message={error} />

    return (
        <div className="space-y-[40px] w-full">
            <header className="space-y-[5px]">
                <h1 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Sổ địa chỉ</h1>
                <p className="text-[15px] font-medium text-darkBland">Quản lý những địa chỉ bạn muốn chúng tôi giao hàng tới.</p>
            </header>

            <BookAddressForm
                form={form}
                userInfo={userInfo}
                setBookAddressesList={setBookAddressesList}
            />

            <BookAddressList
                form={form}
                userInfo={userInfo}
                bookAddressesList={bookAddressesList}
            />
        </div>
    )
}
