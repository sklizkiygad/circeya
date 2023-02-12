import React from 'react';
import './MainBlock.css';



const MainBlock = ({firstImage='img1',secondImage='img2'}) => {
console.log(firstImage)
    return (
        <div className="main-block">
            <h1 className="main-block__heading">ut aliquip ex ea commodo consequat</h1>

            <div className="main-block__image-info">
                <img className="main-block__image-info__image" src={require(`../../assets/images/${firstImage}.png`)} />
                <div className="main-block__image-info__info">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                </div>
            </div>

            <div className="main-block__image-info">
                <div className="main-block__image-info__info second-level">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                </div>
                <img className="main-block__image-info__image second-level" src={require(`../../assets/images/${secondImage}.png`)} />

            </div>


        </div>
    );
};

export default MainBlock;