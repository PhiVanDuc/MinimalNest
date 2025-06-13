"use client"

import { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProductDetailImages({
    currentColor,
    images,
}) {
    const sliderNav = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderNav.current) return;
        sliderNav.current.swiper.slidePrev();
    }, []);
    
    const handleNext = useCallback(() => {
        if (!sliderNav.current) return;
        sliderNav.current.swiper.slideNext();
    }, []);

    const [currentImages, setCurrentImage] = useState(() => {
        return images
            ?.filter((img) => img?.color_id === currentColor?.id)
            ?.sort((a, b) => {
                return (b.display_order === true) - (a.display_order === true);
            });
    });

    useEffect(() => {
        setCurrentImage(() => {
            return images
                ?.filter((img) => img?.color_id === currentColor?.id)
                ?.sort((a, b) => {
                    return (b.display_order === true) - (a.display_order === true);
                });
        });
    }, [currentColor, images]);

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
                className="my-swiper relative w-full 2xl:aspect-square"
            >
                {
                    currentImages?.map(image => {
                        return (
                            <SwiperSlide
                                key={image?.id}
                            >
                                <div className='relative w-full flex justify-center aspect-square sm:aspect-video lg:aspect-16/6 2xl:aspect-square rounded-[15px] overflow-hidden'>
                                    <Image
                                        src={image?.url}
                                        alt='Ảnh sản phẩm'
                                        width={2000}
                                        height={2000}
                                        priority={true}
                                        className='object-contain h-full w-auto max-w-full sm:rounded-[10px] 2xl:rounded-none'
                                        style={{
                                            aspectRatio: '1/1'
                                        }}                                
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

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
        </>
    )
}