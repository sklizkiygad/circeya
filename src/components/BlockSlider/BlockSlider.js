import React, {useEffect, useRef, useState} from 'react';
import './BlockSlider.css'
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import slide4 from "../../assets/images/slide4.png";
import slide5 from "../../assets/images/slide5.png";
import slide6 from "../../assets/images/slide6.png";
import slide7 from "../../assets/images/slide7.png";
import slide8 from "../../assets/images/slide8.png";




const BlockSlider = () => {

    const scrollArea=useRef()
    const addScrollArea=useRef()
    const scrollContainer=useRef()
    const scrollAreaHeading=useRef()

    const [heightScrollArea,setHeightScrollArea]=useState(0)
    const [bottomOfScrollArea,setBottomOfScrollArea]=useState(0)


    const [scrollPosition, setScrollPosition] = useState(0);

    const [windowYOffset,setWindowYOffset]=useState(0)



    useEffect(()=>{

        window.addEventListener('scroll', handleScroll);
    },[windowYOffset])
    const handleScroll = () => {


        if(windowYOffset>0 && window.pageYOffset >= windowYOffset && window.pageYOffset <= windowYOffset+heightScrollArea + 500 ){
            scrollContainer.current.style.transform=`translateX(${1000-((window.pageYOffset-windowYOffset)*2)}px)`
            console.log(scrollArea.current.style.transform=`translateX(${-(window.pageYOffset-windowYOffset)/10})`)
        }
        else {
                scrollAreaHeading.current.style.marginBottom=`${0}px`
        }



    };

    const initParamsDiv=()=>{

        setHeightScrollArea(scrollArea.current.clientHeight)
        console.log(windowYOffset)
        // addScrollArea.current.style.height=`${scrollArea.current.clientHeight+150}px`
        scrollArea.current.style.height=`${(scrollContainer.current.clientHeight*3)+100}px`

    }


    const options={
        root:null,
        rootMargin:"0px",
        threshold:0
    }
    const callbackFunction=(entries)=>{

        if(entries[0].isIntersecting){
            setWindowYOffset(window.pageYOffset)
            scrollAreaHeading.current.style.marginBottom=`${scrollContainer.current.clientHeight+50}px`
        }
    }




    useEffect(()=>{
        initParamsDiv()
        const observer = new IntersectionObserver(callbackFunction, options)
        observer.observe(scrollContainer.current)
    },[])



    return (

            <div  ref={scrollArea} className="sticky-container__wrapper">
                <h1 ref={scrollAreaHeading} className='main-block__heading'>Lorem Ipsum</h1>
                <div ref={scrollContainer}  className="sticky-container" >
                    <div className='sticky-container__item'>
                        <img src={slide1} alt=""/>
                    </div>
                    <div className='sticky-container__item'>
                        <img src={slide2} alt=""/>
                    </div>
                    <div className='sticky-container__item'>
                        <img src={slide3} alt=""/>
                    </div>
                    <div className='sticky-container__item'>
                        <img src={slide4} alt=""/>
                    </div>
                    <div className='sticky-container__item'>
                        <img src={slide5} alt=""/>
                    </div>
                    <div className='sticky-container__item'>
                        <img src={slide6} alt=""/>
                    </div>
                    <div className='sticky-container__item'>
                        <img src={slide7} alt=""/>
                    </div>
                    <div className='sticky-container__item'>
                        <img src={slide8} alt=""/>
                    </div>

                </div>

            </div>

    );
};

export default BlockSlider;