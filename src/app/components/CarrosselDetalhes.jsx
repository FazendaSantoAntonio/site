"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay } from "swiper";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";

export default function CarrosselDetalhes() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper2 styles.swiper"
      >
        <div className="desktop">
          <SwiperSlide className="text-center text-xl flex justify-center items-center">
            <Image
              src={"/slider1.jpg"}
              width={1800}
              height={600}
              alt={"Queijos premiados na França"}
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-xl flex justify-center items-center sm:hidden">
            <Image
              src={"/slider2.jpg"}
              width={1800}
              height={600}
              alt={"Queijos premiados na França"}
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-xl flex justify-center items-center sm:hidden">
            <Image
              src={"/slider3.jpg"}
              width={1800}
              height={600}
              alt={"Queijos premiados na França"}
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
