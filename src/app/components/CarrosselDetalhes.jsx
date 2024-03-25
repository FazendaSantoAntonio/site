"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { Autoplay } from "swiper/modules"
import { FreeMode, Navigation } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"

export default function CarrosselDetalhes() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper2 styles.swiper"
      >
        <div className="desktop">
          <SwiperSlide className="text-center text-xl flex justify-center items-center">
            <Link href="/rota">
              <Image
                src={"/slider01.webp"}
                width={1800}
                height={600}
                alt={"Queijos premiados na França"}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="text-center text-xl flex justify-center items-center sm:hidden">
            <Image
              src={"/slider02.webp"}
              width={1800}
              height={600}
              alt={"Queijos premiados na França"}
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-xl flex justify-center items-center sm:hidden">
            <Image
              src={"/slider03.webp"}
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
