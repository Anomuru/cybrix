import React from 'react';

import cls from "./homePage.module.sass";
import {Category, Footer, Home, HomeHeader, Projects, Services} from "entities/home";

export const HomePage = () => {
    return (
        <div className={cls.home}>
            {/*<HomeHeader/>*/}
            <Home/>
            <Services/>
            <Category/>
            <Projects/>
            {/*<Footer/>*/}
        </div>
    )
}
