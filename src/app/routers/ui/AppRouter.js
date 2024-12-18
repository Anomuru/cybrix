import "app/styles/index.sass"
import classNames from "classnames";
import {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";

import {routersConfig} from "../config/configRouter";
import {Layout} from "../../layout";
import {HomePage} from "pages/homePage";
import {Login} from "pages/login";
import {ProjectProfile} from "pages/projectProfilePage/projectProfile";

export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>

                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/profile/:id"} element={<ProjectProfile/>}/>

                <Route path={"platform/*"} element={<Layout/>}>
                    {routersConfig.map(item =>
                        <Route
                            path={item.path}
                            element={item.element}
                        />
                    )}
                </Route>

            </>
        )
    );

    return (
        <div className={classNames("app")}>
            <Suspense>
                <RouterProvider router={router}/>
            </Suspense>
        </div>
    );
};