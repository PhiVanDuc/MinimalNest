import CoreCarousel from "@/components/customs/core-carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { v4 } from "uuid";

const feedbacks = [
    {
        feedback: "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire.",
        name: "Michael Roberts"
    },
    {
        feedback: "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire.",
        name: "Michael Roberts"
    },
    {
        feedback: "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire.",
        name: "Michael Roberts"
    },
    {
        feedback: "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire.",
        name: "Michael Roberts"
    },
    {
        feedback: "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire.",
        name: "Michael Roberts"
    },
    {
        feedback: "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire.",
        name: "Michael Roberts"
    }
];

const finalData = feedbacks.map(feedback => ({
    id: v4(),
    component: (
        <div
            className="space-y-[25px] p-[30px] border rounded-[15px] shadow-sm cursor-grab overflow-hidden"
        >
            <Image
                src="/quote.png"
                alt="Quote icon"
                width={60}
                height={60}
                className="w-[30px] aspect-square object-contain object-center"
            />
            <p className="text-[16px] leading-[28px] text-darkMedium truncate-text">{feedback.feedback}</p>

            <div className="flex items-center justify-between gap-[10px]">
                <div className="flex items-center gap-x-[10px] overflow-hidden">
                    <div className="shrink-0 w-[44px] aspect-square rounded-full bg-slate-300" />
                    <p className="text-[16px] lg:text-[18px] font-medium text-darkBold whitespace-nowrap truncate">{feedback.name}</p>
                </div>

                <Badge className="hidden md:block bg-yellowBold text-white text-[13px] sm:text-[14px] font-medium">4,98</Badge>
            </div>
        </div>
    )
}));

export default function Feedback() {
    return (
        <section className="space-y-[60px] pb-[100px] xl:pb-[150px]">
            <div className="flex flex-col items-center gap-y-[15px]">
                <h3 className='w-fit text-[14px] lg:text-[16px] text-darkBold font-medium px-[20px] lg:px-[25px] py-[10px] lg:py-[15px] rounded-[99px] bg-yellowMedium'>Số liệu thống kê</h3>
                <h2 className="text-[30px] md:text-[36px] xl:text-[48px] font-bold text-darkBold text-center">Khách Hàng Nói Gì Về Chúng Tôi.</h2>
                <p className="text-center xl:text-left text-[14px] text-darkBland leading-[24px]">Khám Phá Những Câu Chuyện Và Trải Nghiệm Của Khách Hàng Hài Lòng Của Chúng Tôi.</p>
            </div>

            <CoreCarousel
                data={finalData}
                options={{
                    loop: true
                }}
                isPlugins={true}
                numberCardClassName="sm:basis-1/2 lg:basis-1/3"
            />
        </section>
    )
}