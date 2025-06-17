"use client"

import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter();

    return (
        <div
            className="cursor-pointer"
            onClick={() => { router.push("/san-pham") }}
        >
            <p className="w-fit text-[16px] font-medium px-[15px] py-[5px] rounded-[6px] bg-yellowBold text-white">Minimal Nest</p>
        </div>
    )
}
