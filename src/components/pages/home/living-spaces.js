import BlurCircle from "@/components/customs/blur-circle";
import CoreCarousel from "@/components/customs/core-carousel";
import { Badge } from "@/components/ui/badge";
import { v4 } from "uuid";

const spaces = [
    "Phòng khách",
    "Phòng ăn",
    "Phòng ngủ",
    "Phòng tắm",
    "Ngoài trời",
    "Lưu trữ",
    "Trang trí"
]

const finalData = spaces.map(space => (
    {
        id: v4(),
        component: (
            <>
                <div className="w-full aspect-16/12 rounded-[15px] rounded-br-none rounded-bl-none bg-slate-300" />
                <div className="relative text-[15px] sm:text-[16px] font-semibold text-darkBold p-[20px] bg-white rounded-br-[15px] rounded-bl-[15px]">
                    <div className="flex items-center justify-between">
                        <h3>{space}</h3>
                        <Badge className="bg-yellowBold text-white text-[13px]">30 sản phẩm</Badge>
                    </div>

                    <span
                        className="absolute inset-0 border border-t-0 rounded-[15px] rounded-tr-none rounded-tl-none"
                        style={{
                            marginTop: "0px"
                        }}
                    />
                </div>
            </>
        )
    }
))

export default function LivingSpace() {
    return (
        <section className="relative space-y-[40px]">
            <div className="space-y-[10px]">
                <h2 className="text-[20px] lg:text-[24px] text-darkBold font-semibold">Nội thất không gian sống</h2>
                <p className="text-[14px] md:text-[16px] text-darkBland font-medium">Chọn không gian bạn muốn sắp xếp nội thất và tìm ngay những sản phẩm nội thất tối giản, phù hợp với phong cách của bạn.</p>
            </div>

            <CoreCarousel
                data={finalData}
                numberCardClassName="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            />

            <BlurCircle className="right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
        </section>
    )
}
