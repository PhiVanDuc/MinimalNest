import Image from "next/image";
import compliment from "../../../../public/compiment.webp";

import BlurCircle from "@/components/customs/blur-circle";
import CustomButton from "@/components/customs/custom-button";

import { LuShoppingCart } from "react-icons/lu";
import { Check } from "lucide-react";

export default function Compliment() {
    return (
        <section className="relative flex flex-col xl:flex-row items-start justify-between gap-[40px] xl:gap-[100px]">
            <div
                className="xl:block flex flex-col items-center space-y-[25px] w-full xl:w-[550px]"
            >
                <h2 className="text-center xl:text-left text-[30px] md:text-[36px] xl:text-[48px] text-darkBold font-semibold">Nâng tầm cảm xúc của bạn với nội thất êm ái.</h2>
                <p className="text-center xl:text-left text-[14px] text-darkBland leading-[24px]">Không gian xung quanh bạn ảnh hưởng sâu sắc đến tâm trạng. Khám phá cách nội thất tối giản, chất lượng cao của chúng tôi có thể biến ngôi nhà bạn thành một chốn yên bình, thoải mái. Tạo nên môi trường tinh tế, hài hòa, giúp nâng tầm cảm xúc với thiết kế đơn giản nhưng đầy phong cách và tiện nghi.</p>

                <div className="w-fit space-y-[40px]">
                    <ul className="space-y-[20px]">
                        <li className="flex items-center gap-x-[15px] font-medium text-darkMedium">
                            <span className="flex items-center justify-center bg-yellowBold rounded-full w-[32px] aspect-square">
                                <Check size={22} className="text-white" />
                            </span>

                            <p>Sự thoải mái tuyệt đối</p>
                        </li>

                        <li className="flex items-center gap-x-[15px] font-medium text-darkMedium">
                            <span className="flex items-center justify-center bg-yellowBold rounded-full w-[32px] aspect-square">
                                <Check size={22} className="text-white" />
                            </span>

                            <p>Tinh tế trong từng chất lượng</p>
                        </li>

                        <li className="flex items-center gap-x-[15px] font-medium text-darkMedium">
                            <span className="flex items-center justify-center bg-yellowBold rounded-full w-[32px] aspect-square">
                                <Check size={22} className="text-white" />
                            </span>

                            <p>Vẻ đẹp tối giản</p>
                        </li>
                    </ul>

                    <div className="w-full flex justify-center xl:justify-start">
                        <CustomButton
                            className="bg-yellowBold hover:bg-yellowBold text-[16px] px-[30px]"
                            icon={<LuShoppingCart size={20} />}
                        >
                            Mua sắm ngay
                        </CustomButton>
                    </div>
                </div>
            </div>

            <div className="relative flex items-center self-stretch gap-x-[15px]">
                <div className="w-full xl:w-[500px] h-[300px] xl:h-full rounded-[15px] bg-slate-300 overflow-hidden">
                    <Image
                        src={compliment}
                        alt="Compliment Image"
                        width={2000}
                        height={2000}
                        className="w-full h-full object-cover object-center"
                        placeholder="blur"
                    />
                </div>

                <div className="shrink-0 self-stretch hidden xl:flex items-center">
                    <Image
                        src="/decor.png"
                        alt="Decor image"
                        width={45}
                        height={45}
                        className="w-[45px] aspect-square object-cover object-center"
                    />
                </div>

                <div className="absolute bottom-0 left-[-60%] hidden xl:flex items-center gap-x-[15px] text-darkMedium text-[18px] px-[25px] py-[22px] rounded-[10px] border shadow-sm bg-white">
                    <span className="flex items-center justify-center border-[2px] border-yellowBold rounded-full w-[25px] aspect-square">
                        <Check size={15} className="text-yellowBold" />
                    </span>

                    <p>Chúng tôi cam kết sự thoải mái cho bạn.</p>
                </div>
            </div>

            <BlurCircle className="left-0 bottom-0 translate-x-[-50%] translate-y-[50%]" />
        </section>
    )
}