import "app/styles/index.sass"
import classNames from "classnames";
import {Suspense} from 'react';
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";

export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={"/"}
                />
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