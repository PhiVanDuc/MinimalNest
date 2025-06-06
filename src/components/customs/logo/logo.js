"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

export default function Logo({ className, text = true }) {
    const router = useRouter();

    return (
        <div
            className="cursor-pointer"
            onClick={() => { router.push("/san-pham") }}
        >
            {
                text ?
                <p className="text-[16px] font-medium px-[15px] py-[5px] rounded-[10px] bg-yellowBold text-white">Minimal Nest</p> :
                <Image
                    src="/Logo_1.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    priority={true}
                    className={cn(
                        "w-[80px] h-[80px] rounded-[10px] object-cover object-center",
                        className
                    )}
                />
            }
        </div>
    )
}
