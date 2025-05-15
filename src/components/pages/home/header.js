import Image from "next/image";

import CustomButton from "@/components/customs/custom-button";
import RotatingText from "@/components/customs/react-bits/RotatingText";
import CustomBadge from "@/components/customs/custom-badge";

import { PiToolbox } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { Truck } from "lucide-react";
import BlurCircle from "../../customs/blur-circle";

import { cn } from "@/lib/utils";
import { v4 } from "uuid";
import { dynamicBlurImage } from "@/lib/utils/dynamic-blur-image";

export default async function Header() {
    const blurImages = await Promise.all(Array.from({ length: 3 }).map(async (_, index) => {
        return await dynamicBlurImage("https://fastly.picsum.photos/id/196/2000/2000.jpg?hmac=c27I0juvbEJwUvDCNbFMGwTHcnblrx8E5O4AJrbWZS4");
    }));

    return (
        <header className="relative flex items-center">
            <div className="relative w-full flex flex-col lg:flex-row justify-between pt-[100px] xl:pt-[160px] xl:mb-[60px] gap-[40px] lg:gap-[80px]">
                {/* Tiêu đề bên trái */}
                <div
                    className="xl:shrink-0 w-full lg:w-[550px] space-y-[15px] lg:space-y-[30px] pt-[60px] h-fit"
                >
                    <h1
                        className="flex flex-wrap lg:block items-center justify-center gap-[15px] text-[30px] md:text-[36px] xl:text-[48px] text-darkBold text-center lg:text-left font-bold lg:space-y-[15px]"
                    >
                        <span>NHỮNG NỘI THẤT MỚI <span className="xl:hidden">NHẤT</span></span>
                        <span className="flex items-center gap-x-[15px]">
                            <span className="hidden xl:inline">NHẤT</span>
                            <RotatingText
                                texts={['Tối giản!', 'Hiện đại!', 'Tinh tế!']}
                                mainClassName="px-4 bg-yellowBold text-white overflow-hidden py-[5px] justify-center rounded-lg text-[20px] lg:text-[24px] font-semibold"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={4000}
                            />
                        </span>
                    </h1>

                    <p className="font-medium text-darkBland text-center lg:text-left lg:leading-[28px]">Mang đến những thiết kế tối giản, tinh tế giúp bạn tạo dựng không gian sống hoàn hảo.</p>
                </div>

                {/* Hình ảnh bên phải */}
                <div className="w-full space-y-[20px]">
                    <div className="w-full grid grid-cols-2 gap-[10px] lg:gap-[20px]">
                        {
                            blurImages.map((image, index) => {
                                return (
                                    <div
                                        key={v4()}
                                        className={cn(
                                            "relative h-[140px] md:h-[200px] lg:h-[260px] rounded-[15px] bg-slate-300 overflow-hidden",
                                            index === 2 ? "col-span-2" : "col-span-1"
                                        )}
                                    >
                                        <Image
                                            src={image.img.src}
                                            alt="Lasest Product Image"
                                            width={image.img.width}
                                            height={image.img.height}
                                            className="w-full h-[140px] md:h-[200px] lg:h-[260px] object-cover object-center"
                                            placeholder="blur"
                                            blurDataURL={image.base64}
                                            loading="lazy"
                                        />

                                        <CustomBadge
                                            text="Mới"
                                            badgeClassName="absolute top-[15px] right-[15px] px-[10px] py-[5px] bg-yellowBold hover:bg-yellowBold hover:opacity-80 cursor-pointer"
                                            textClassName="text-[14px]"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="lg:hidden w-full flex justify-center">
                        <CustomButton
                            className="bg-yellowBold hover:bg-yellowBold text-[16px] px-[30px]"
                            icon={<LuShoppingCart size={20} />}
                        >
                            Mua sắm ngay
                        </CustomButton>
                    </div>
                </div>

                {/* Thanh ưu đãi */}
                <div className="hidden absolute bottom-0 left-0 lg:flex items-center px-[25px] py-[20px] gap-x-[25px] border border-slate-200 shadow-sm rounded-[15px] bg-white">
                    <div className="space-y-[8px]">
                        <p className="text-[14px] font-semibold text-darkMedium">Lắp đặt</p>
                        <div className="flex items-center gap-x-[8px]">
                            <PiToolbox size={25} className="text-darkMedium" />
                            <p className="text-[14px] text-darkBland">Hỗ trợ lắp đặt tại nhà</p>
                        </div>
                    </div>

                    <div className="space-y-[8px]">
                        <p className="text-[14px] font-semibold text-darkMedium">Đảm bảo chất lượng</p>
                        <div className="flex items-center gap-x-[8px]">
                            <AiOutlineLike size={24} className="text-darkMedium" />
                            <p className="text-[14px] text-darkBland">Được tin dùng rộng rãi</p>
                        </div>
                    </div>

                    <div className="space-y-[8px]">
                        <p className="text-[14px] font-semibold text-darkMedium">Miễn phí vận chuyển</p>
                        <div className="flex items-center gap-x-[8px]">
                            <Truck size={25} className="text-darkMedium" />
                            <p className="text-[14px] text-darkBland">Giao hàng không tốn phí</p>
                        </div>
                    </div>

                    <div className="w-[1px] self-stretch bg-slate-200 rounded-full" />

                    <CustomButton
                        className="bg-yellowBold hover:bg-yellowBold"
                        icon={<LuShoppingCart size={20} />}
                    >
                        Mua sắm ngay
                    </CustomButton>
                </div>
            </div>

            <BlurCircle className="right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
        </header>
    )
}
