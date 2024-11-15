import React, {useState} from 'react';

import cls from "./homePage.module.sass";
import {Category, Footer, Home, HomeHeader, Projects, Services} from "entities/home";
import {Alert} from "../../../features/alert";
export const Context = React.createContext()
export const HomePage = () => {

    const [sectionTop, setSectionTop] = useState({
        home: null,
        about_us: null,
        projects: null,
        contact: null,
        // events: null,
        // gallery: null,
        // contact: null
    })


    return (
        <Context.Provider value={{setSectionTop , sectionTop}}>
            <div className={cls.home}>
                <Alert/>
                <HomeHeader/>
                <Home/>
                <Services/>
                <Category/>
                <Projects/>
                <Footer/>
            </div>
        </Context.Provider>
    )
}
