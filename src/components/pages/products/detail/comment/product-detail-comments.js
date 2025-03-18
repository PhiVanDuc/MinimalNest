"use client"

import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function ProductDetailComments() {
    const lastChildComments = useRef([]);

    return (
        <div className="space-y-[40px]">
            <h3 className="text-[18px] md:text-[22px] font-semibold text-darkBold">Các đánh giá</h3>

            <ul className="space-y-[30px]">
                <li className="space-y-[30px]">
                    <div className="flex items-start gap-[15px]">
                        <div className="shrink-0 w-[45px] aspect-square rounded-full bg-slate-300" />

                        <div className="space-y-[10px]">
                            <div className="space-y-[5px]">
                                <h4 className="truncate text-[15px] sm:text-[16px] font-semibold text-darkBold">Tên người dùng</h4>
                                <p className="text-[14px] text-darkBland">1 phút trước</p>
                            </div>

                            <p className="text-darkMedium text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel neque id sem facilisis viverra. Praesent at magna sit amet odio consequat placerat. Integer ac lectus vitae sapien convallis tincidunt.</p>

                            <div className="flex gap-x-[20px]">
                                <p className="w-fit text-[14px] font-medium text-darkBland hover:text-darkBold transition-colors cursor-pointer">Xem phản hồi</p>
                                <p className="w-fit text-[14px] font-medium text-darkBland hover:text-darkBold transition-colors cursor-pointer">Phản hổi</p>
                            </div>
                        </div>
                    </div>

                    <ul className="pl-[60px] space-y-[30px]">
                        <li className="space-y-[15px]">

                            <div className="flex items-start gap-[15px]">
                                <div className="shrink-0 w-[45px] aspect-square rounded-full bg-slate-300" />

                                <div className="space-y-[10px]">
                                    <div className="space-y-[5px]">
                                        <h4 className="truncate text-[15px] sm:text-[16px] font-semibold text-darkBold">Tên người dùng</h4>
                                        <p className="text-[14px] text-darkBland">1 phút trước</p>
                                    </div>

                                    <p className="text-darkMedium text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel neque id sem facilisis viverra. Praesent at magna sit amet odio consequat placerat. Integer ac lectus vitae sapien convallis tincidunt.</p>

                                    <p className="w-fit text-[14px] font-medium text-darkBland hover:text-darkBold transition-colors cursor-pointer">Phản hổi</p>
                                </div>
                            </div>
                        </li>

                        <li className="space-y-[15px]">
                            <div className="flex items-start gap-[15px]">
                                <div className="shrink-0 w-[45px] aspect-square rounded-full bg-slate-300" />

                                <div className="space-y-[10px]">
                                    <div className="space-y-[5px]">
                                        <h4 className="truncate text-[15px] sm:text-[16px] font-semibold text-darkBold">Tên người dùng</h4>
                                        <p className="text-[14px] text-darkBland">1 phút trước</p>
                                    </div>

                                    <p className="text-darkMedium text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel neque id sem facilisis viverra. Praesent at magna sit amet odio consequat placerat. Integer ac lectus vitae sapien convallis tincidunt.</p>

                                    <p className="w-fit text-[14px] font-medium text-darkBland hover:text-darkBold transition-colors cursor-pointer">Phản hổi</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="text-center">
                <Button variant="outline" className="w-full">Xem thêm đánh giá</Button>
            </div>
        </div>
    )
}