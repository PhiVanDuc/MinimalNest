import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import ProfileCouponRedirectButton from "./profile-coupon-redirect-button";

export default function CouponItem({ coupon }) {
    return (
        <div
            className="relative flex items-center rounded-[15px] border bg-white"
        >
            <div className="relative flex flex-col w-[40%] self-stretch">
                <Image
                    src={coupon.blurImage.img.src}
                    alt="Product Image"
                    width={coupon.blurImage.img.width}
                    height={coupon.blurImage.img.height}
                    className="absolute inset-0 h-full w-full object-cover object-center bg-slate-300 rounded-tl-[15px] rounded-bl-[15px]"
                    placeholder="blur"
                    blurDataURL={coupon.blurImage.base64}
                />

                <div className="flex flex-col absolute space-y-[10px] top-[50%] translate-y-[-50%] left-[10px]">
                    <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                    <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                    <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                    <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                    <span className="inline-block w-[6px] aspect-square rounded-full bg-white" />
                </div>
            </div>
            
            <div className="py-[10px] px-[15px] sm:py-[15px] sm:px-[20px] w-[60%]">
                <div className="space-y-[5px] mb-[20px]">
                    <div className="flex items-center gap-x-[10px]">
                        <span className="inline-block w-[8px] aspect-square rounded-full bg-yellowBold" />
                        <p className="text-[11px] sm:text-[12px] font-medium text-darkMedium">{coupon.code}</p>
                    </div>

                    <p className="truncate-2 text-[13px] sm:text-[14px] font-semibold text-darkBold">{coupon.title}</p>

                    <div className="flex flex-wrap gap-x-[15px] gap-y-[3px] text-[12px] sm:text-[13px] text-darkMedium">
                        <p className="whitespace-nowrap">NBĐ: {coupon.prodDate}</p>
                        <p className="whitespace-nowrap">HSD: {coupon.expDate}</p>
                    </div>
                </div>

                <div className="flex items-center gap-[5px] text-[14px]">
                    <ProfileCouponRedirectButton
                        id={coupon.id}
                    >
                        Sản phẩm
                    </ProfileCouponRedirectButton>

                    <Button variant="ghost">
                        <Link href="/phieu-giam-gia/tieu-de-phieu-giam-gia">Chi tiết</Link>
                    </Button>
                </div>
            </div>

            <div className="absolute flex justify-center top-[10px] right-[-7px] rounded-tl-full rounded-bl-full w-[40px] py-[2px] bg-yellowMedium text-[14px] text-darkBold font-medium">
                <p>3</p>
                <div
                    className="absolute top-[25px] right-0 w-[50px] h-[50px] bg-yellowBold -z-10"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 0 100%)"
                    }}
                />
            </div>
        </div>
    )
}
