import React from 'react';

import cls from "./homePage.module.sass";
import {HomeHeader} from "entities/home";

export const HomePage = () => {
    return (
        <div className={cls.home}>
            <HomeHeader/>
        </div>
    )
}
