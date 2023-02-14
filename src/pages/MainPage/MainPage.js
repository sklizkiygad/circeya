import React, {useEffect, useState} from 'react';
import './MainPage.css';
import MyHeader from "../../components/MyHeader/MyHeader";
import MainBlock from "../../components/MainBlock/MainBlock";
import MyFooter from "../../components/MyFooter/MyFooter";

import BlockSlider from "../../components/BlockSlider/BlockSlider";
import {useWindowSize} from "../../components/util/UseWindowSize";
import MySlider from "../../components/MySlider/MySlider";





const MainPage = () => {


        const size = useWindowSize();
        const [isMobile,setIsMobile]=useState(false)





    useEffect(()=>{
        size.width<=854?setIsMobile(true):setIsMobile(false)
    },[size])

    return (
        <div className="main-page">
            <MyHeader/>
            <MainBlock firstImage={'img1'} secondImage={'img2'}/>
            {isMobile?
                <MySlider/>:
                <BlockSlider/>
            }


            <MainBlock firstImage={'img3'} secondImage={'img4'}/>
            <MyFooter/>
        </div>
    );
};

export default MainPage;