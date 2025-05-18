"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

import { Button } from "../ui/button";

export default function ErrorClient({ message }) {
    const router = useRouter();
    const [formatMessage, setFormatMessage] = useState(() => {
        return message?.split(",");
    });

    if (formatMessage[0] && +formatMessage[0] === 410) {
        router.refresh();
        return <></>
    }

    return (
        <div className="p-[40px] flex flex-col gap-[20px] items-center justify-center bg-white rounded-[10px]">
            <p className="text-center text-[50px] font-bold text-neutral-300">{formatMessage[0]}</p>

            <div className="text-center text-[16px] font-medium space-y-[20px]">
                <div>
                    <p>{formatMessage[1]}</p>
                    <p className="text-[14px] text-darkMedium">Bạn có thể tải lại trang vài lần hoặc liên hệ với đội ngũ phát triển để trang web có thể hoạt động trở lại trong thời gian sớm nhất.</p>
                </div>

                <div className="flex justify-center gap-[5px]">
                    <Button>Tải lại trang</Button>
                </div>
            </div>
        </div>
    )
}
