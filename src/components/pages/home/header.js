"use client"

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import CustomButton from "@/components/customs/custom-button";
import RotatingText from "@/components/customs/react-bits/RotatingText";
import CustomBadge from "@/components/customs/custom-badge";

import { PiToolbox } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { Truck } from "lucide-react";
import BlurCircle from "../../customs/blur-circle";

const parentVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        }
    }
}

const leftVariants = {
    hidden: { x: "-50%", opacity: 0 },
    show: { 
        x: 0, 
        opacity: 1,
        transition: { type: "tween", duration: 0.5 }
    }
}

const rightVariants = {
    hidden: { x: "50%", opacity: 0 },
    show: { 
        x: 0, 
        opacity: 1,
        transition: { type: "tween", duration: 0.5 }
    }
}

export default function Header() {
    const router = useRouter();

    return (
        <motion.header
            variants={parentVariants}
            initial="hidden"
            animate="show"
            className="relative flex items-center"
        >
            <div className="relative w-full flex flex-col lg:flex-row justify-between pt-[100px] xl:pt-[160px] xl:pb-[60px] gap-[40px] lg:gap-[80px]">
                {/* Tiêu đề bên trái */}
                <motion.div
                    variants={leftVariants}
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
                </motion.div>

                {/* Hình ảnh bên phải */}
                <motion.div
                    variants={rightVariants}
                    className="w-full space-y-[20px]"
                >
                    <div className="w-full grid grid-cols-2 gap-[10px] lg:gap-[20px]">
                        <div className="relative h-[140px] md:h-[200px] lg:h-[260px] rounded-[15px] bg-slate-300">
                            <CustomBadge
                                text="Mới"
                                badgeClassName="absolute top-[15px] right-[15px] px-[10px] py-[5px] bg-yellowBold hover:bg-yellowBold hover:opacity-80 cursor-pointer"
                                textClassName="text-[14px]"
                            />
                        </div>
                        <div className="relative h-[140px] md:h-[200px] lg:h-[260px] rounded-[15px] bg-slate-300">
                            <CustomBadge
                                text="Mới"
                                badgeClassName="absolute top-[15px] right-[15px] px-[10px] py-[5px] bg-yellowBold hover:bg-yellowBold hover:opacity-80 cursor-pointer"
                                textClassName="text-[14px] text-white"
                            />
                        </div>
                        <div className="relative col-span-2 h-[140px] md:h-[200px] lg:h-[260px] rounded-[15px] bg-slate-300">
                            <CustomBadge
                                text="Mới"
                                badgeClassName="absolute top-[15px] right-[15px] px-[10px] py-[5px] bg-yellowBold hover:bg-yellowBold hover:opacity-80 cursor-pointer"
                                textClassName="text-[14px] text-white"
                            />
                        </div>
                    </div>

                    <div className="lg:hidden w-full flex justify-center">
                        <CustomButton
                            className="bg-yellowBold hover:bg-yellowBold text-[16px] px-[30px]"
                            icon={<LuShoppingCart size={20} />}
                            onClick={() => { router.push("/san-pham") }}
                        >
                            Mua sắm ngay
                        </CustomButton>
                    </div>
                </motion.div>

                {/* Thanh ưu đãi */}
                <motion.div
                    variants={leftVariants}
                    className="hidden absolute bottom-0 left-0 lg:flex items-center px-[25px] py-[20px] gap-x-[25px] border border-slate-200 shadow-sm rounded-[15px] bg-white"
                >
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
                        onClick={() => { router.push("/san-pham") }}
                    >
                        Mua sắm ngay
                    </CustomButton>
                </motion.div>
            </div>

            <BlurCircle className="right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
        </motion.header>
    )
}
