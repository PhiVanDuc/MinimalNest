"use client"

import { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductDetailImageExpand from './product-detail-image-expand';

export default function ProductDetailImages() {
    const sliderNav = useRef(null);
    const [isExpand, setIsExpand] = useState({
        status: false,
        id: ""
    });

    const handlePrev = useCallback(() => {
        if (!sliderNav.current) return;
        sliderNav.current.swiper.slidePrev();
    }, []);
    
    const handleNext = useCallback(() => {
        if (!sliderNav.current) return;
        sliderNav.current.swiper.slideNext();
    }, []);

    const handleExpandImage = (id) => {
        setIsExpand({
            status: true,
            id
        })
    }

    return (
        <>
            <Swiper
                ref={sliderNav}
                spaceBetween={15}
                slidesPerView={1}
                loop={true}
                navigation={{
                    prevEl: '.prev-button',
                    nextEl: '.next-button'
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                modules={[Pagination, Navigation]}
                className="my-swiper relative w-full space-y-[15px]"
            >
                <SwiperSlide>
                    <div className="w-full aspect-square sm:aspect-video lg:aspect-16/7 2xl:aspect-square rounded-[15px] bg-slate-300" />
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full aspect-square sm:aspect-video lg:aspect-16/7 2xl:aspect-square rounded-[15px] bg-slate-300" />
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full aspect-square sm:aspect-video lg:aspect-16/7 2xl:aspect-square rounded-[15px] bg-slate-300" />
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full aspect-square sm:aspect-video lg:aspect-16/7 2xl:aspect-square rounded-[15px] bg-slate-300" />
                </SwiperSlide>

                <div
                    className="delete-margin group absolute flex items-center gap-[10px] sm:gap-[15px] rounded-[8px] top-[10px] right-[10px] text-[13px] sm:text-[14px] text-darkBold font-medium cursor-pointer px-[15px] sm:px-[20px] py-[5px] sm:py-[8px] overflow-hidden"
                    onClick={() => {handleExpandImage("")} }
                >
                    <Expand
                        size={18}
                        className="relative z-[20]"
                    />
                    <p className="relative z-[20]">Phóng to</p>
                    <span className="absolute inset-0 bg-white/50 backdrop-blur-[10px] group-hover:bg-white/60 transition-all duration-300 z-[10]" />
                </div>

                <div
                    className='delete-margin prev-button absolute top-[50%] translate-y-[-50%] left-[15px] flex items-center justify-center w-[35px] md:w-[45px] aspect-square rounded-full bg-white/50 hover:bg-white/60 backdrop-blur-[10px] text-darkMedium hover:text-darkBold transition-all cursor-pointer z-20'
                    onClick={handlePrev}
                >
                    <ChevronLeft className='w-[20px] md:w-[30px] aspect-square' />
                </div>

                <div
                    className='delete-margin next-button absolute top-[50%] translate-y-[-50%] right-[15px] flex items-center justify-center w-[35px] md:w-[45px] aspect-square rounded-full bg-white/50 hover:bg-white/60 backdrop-blur-[10px] text-darkMedium hover:text-darkBold transition-all cursor-pointer z-20'
                    onClick={handleNext}
                >
                    <ChevronRight className='w-[20px] md:w-[30px] aspect-square' />
                </div>
            </Swiper>

            <ProductDetailImageExpand isExpand={isExpand} setIsExpand={setIsExpand} />
        </>
    )
}