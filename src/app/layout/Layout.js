import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useMatches, useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import cls from "./Layout.module.sass"
import {Menubar} from "../../widgets/menubar/Menubar";
import {Alert} from "../../features/alert";




export const Layout = () => {

    return (
        <>
            <Alert/>
            <Menubar/>
            <main className={cls.main}>
                <div className={cls.main__content}>
                    <Outlet/>
                </div>
            </main>
        </>
    );
};



