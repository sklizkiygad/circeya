import React, {useEffect, useRef, useState} from "react";
// Import Swiper React components
import {Swiper,SwiperSlide, useSwiper} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./MySlider.css";
import {Swiper as bibaSwiper,Mousewheel} from "swiper";

import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide3 from '../../assets/images/slide3.png';
import slide4 from '../../assets/images/slide4.png';
import slide5 from '../../assets/images/slide5.png';
import slide6 from '../../assets/images/slide6.png';
import slide7 from '../../assets/images/slide7.png';
import slide8 from '../../assets/images/slide8.png';

import SwiperCore from 'swiper';
import {useScrollBlock} from "../util/UseScrollBlock";

SwiperCore.use([Mousewheel]);



export default function MySlider() {




    const [isScrolling,setIsScrolling]=useState(false)
    const [isBodyScrolling, setIsBodyScrolling]=useState(true)
    const [documentTop,setDocumentTop]=useState(0)
    const scrollArea=useRef();

    const [blockScroll, allowScroll] = useScrollBlock();




    useEffect(()=>{

        if(isBodyScrolling){

            document.getElementsByTagName('body')[0].classList.remove('no-scroll')

        }
        else {
            document.getElementsByTagName('body')[0].classList.add('no-scroll')

        }

    },[isBodyScrolling])


    const options={
        root:null,
        rootMargin:"0px",
        threshold:1
    }
    const callbackFunction=(entries)=>{
        if(entries[0].isIntersecting){
            setIsScrolling(true)
            blockScroll()
            scrollArea.current.classList.add('fullpage-swiper')

        }
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction, options)
        observer.observe(scrollArea.current)
    },[])

    const lastSlide=()=>{
        setIsScrolling(false)
        scrollArea.current.classList.remove('fullpage-swiper')
        allowScroll()
    }






    return (
        <>
            <h2 className='main-block__heading'>Lorem ipsum dolor sit amet</h2>
            <Swiper
                slidesPerView={5}
                modules={Mousewheel}
                direction={"horizontal"}
                mousewheel={isScrolling}
                centeredSlides={true}
                onReachEnd={() => lastSlide()}
                onReachBeginning={() => lastSlide()}
                className="mySwiper"
                ref={scrollArea}
            >
                <SwiperSlide><img className='main-slide' src={slide1}/></SwiperSlide>
                <SwiperSlide><img className='main-slide' src={slide2}/></SwiperSlide>
                <SwiperSlide><img className='main-slide' src={slide3}/></SwiperSlide>
                <SwiperSlide><img className='main-slide' src={slide4}/></SwiperSlide>
                <SwiperSlide><img className='main-slide' src={slide5}/></SwiperSlide>
                <SwiperSlide><img className='main-slide' src={slide6}/></SwiperSlide>
                <SwiperSlide><img className='main-slide' src={slide7}/></SwiperSlide>
                <SwiperSlide><img className='main-slide' src={slide8}/></SwiperSlide>

                <SwiperButtonNext isScrolling={isScrolling}/>

            </Swiper>




        </>
    );
}
const SwiperButtonNext = ({isScrolling}) => {

    const swiper = useSwiper();
    let [isSwiperFound,setIsSwiperFound]=useState(false);
    useEffect(()=>{

        if(swiper.mousewheel){
            setIsSwiperFound(true)
        }

    },[])

    useEffect(()=>{

if(isScrolling && isSwiperFound){

    swiper.mousewheel.enable()
}
else if(isSwiperFound && !isScrolling){
    swiper.mousewheel.disable()
}

    },[isScrolling,isSwiperFound])


    return <></>
};
