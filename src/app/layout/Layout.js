import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useMatches, useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import cls from "./layout.module.sass"
import {Menubar} from "../../widgets/menubar/Menubar";




export const Layout = () => {

    return (
        <>
            <Menubar/>
            <main className={cls.main}>
                <div className={cls.main__content}>
                    <Outlet/>
                </div>
            </main>
        </>
    );
};



