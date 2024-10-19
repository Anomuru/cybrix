import React from 'react';
import {Outlet} from "react-router";

import {HomeHeader as Header} from "entities/home";
import {Footer} from "entities/home"

import cls from "./Layout.module.sass";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
