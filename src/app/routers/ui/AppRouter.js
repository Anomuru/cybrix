import "app/styles/index.sass"
import classNames from "classnames";
import {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";

import {routersConfig} from "../config/configRouter";

export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            routersConfig.map(item =>
                <Route
                    path={item.path}
                    element={item.element}
                />
            )
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