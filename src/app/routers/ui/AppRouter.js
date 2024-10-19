import classNames from "classnames";
import {Layout} from "app/layout";
import {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import "app/styles/index.sass"

import {routersConfig} from "../config/configRouter";

export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout/>}>
                {
                    routersConfig.map(item =>
                        <Route
                            path={item.path}
                            element={item.element}
                        />
                    )
                }
            </Route>
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