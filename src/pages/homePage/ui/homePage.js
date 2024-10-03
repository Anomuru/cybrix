import React from 'react';

import cls from "./homePage.module.sass";
import {Home, HomeHeader, Services} from "entities/home";

export const HomePage = () => {
    return (
        <div className={cls.home}>
            <HomeHeader/>
            <Home/>
            <Services/>
        </div>
    )
}
