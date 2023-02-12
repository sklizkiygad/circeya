import React from 'react';
import './MyHeader.css';
import logoImg from '../../assets/images/logo.png';
import mobImg from '../../assets/images/mob.png';

const MyHeader = () => {
    return (
        <div className="main-header">
            <img src={logoImg} className="main-header__logo"/>
            <a href='tel:74954954954' className="main-header__phone">+7 (495) 495-49-54</a>
            <a href='tel:74954954954' className="main-header__phone mob-icon"><img src={mobImg} /></a>
        </div>
    );
};

export default MyHeader;