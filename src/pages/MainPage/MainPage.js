import React from 'react';
import './MainPage.css';
import MyHeader from "../../components/MyHeader/MyHeader";
import MainBlock from "../../components/MainBlock/MainBlock";
import MyFooter from "../../components/MyFooter/MyFooter";

const MainPage = () => {
    return (
        <div className="main-page">
            <MyHeader/>
            <MainBlock firstImage={'img1'} secondImage={'img2'}/>
            <MainBlock firstImage={'img3'} secondImage={'img4'}/>
            <MyFooter/>
        </div>
    );
};

export default MainPage;