import {configureStore} from "@reduxjs/toolkit";

import {applicationsSlice} from "entities/applications";
import {projectsSlice} from "entities/projects";



const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}


export const store = configureStore({
    reducer: {
        applicationsSlice,
        projectsSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})