import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./MySlider.css";

// import required modules
import { FreeMode } from "swiper";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import slide4 from "../../assets/images/slide4.png";
import slide5 from "../../assets/images/slide5.png";
import slide6 from "../../assets/images/slide6.png";
import slide7 from "../../assets/images/slide7.png";
import slide8 from "../../assets/images/slide8.png";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                freeMode={true}

                modules={FreeMode}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide1} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide2} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide3} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide4} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide5} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide6} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide7} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide8} alt=""/></SwiperSlide>

            </Swiper>
        </>
    );
}
