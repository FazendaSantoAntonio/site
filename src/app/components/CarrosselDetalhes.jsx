"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

export default function CarrosselDetalhes({ primeira, segunda, terceira, title }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='pr-5'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-96 h-full styles.swiper mb-5 "
            >
                <SwiperSlide className='text-center text-xl bg-white flex justify-center items-center round'>
                    <Image src={primeira} alt={title} className='w-full h-full object-cover '/>
                </SwiperSlide>
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={segunda} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide >
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={terceira} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide>
            </Swiper>


            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper w-full h-full"
            >
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={primeira} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={segunda} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='text-center text-xl flex justify-center items-center'>
                    <Image src={terceira} alt={title} className='w-full h-full object-cover'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}