import {configureStore} from "@reduxjs/toolkit";

import {applicationsSlice} from "entities/applications";
import {projectsSlice} from "entities/projects";
import {typeOrderSlice} from "entities/typeOrder";
import {homeProjectSlice} from "entities/home";
import {default as profileSlice} from "entities/projectProfile/model/slice/projectSlice";
import {alertSlice} from "features/alert";
import {loginSlice} from "pages/login";
import {addLanguageSlice} from "entities/addLanguage";
import {userListSlice} from "../entities/userList";


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
        loginSlice,
        homeProjectSlice,
        applicationsSlice,
        profileSlice,
        projectsSlice,
        typeOrderSlice,
        alertSlice,
        addLanguageSlice,
        userListSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})