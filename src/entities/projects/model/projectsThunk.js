import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const fetchProjectsData = createAsyncThunk(
    "projectsSlice/fetchProjectsData",
    () => {
        const {request} = useHttp()
        return request(`${API_URL}project/`, "GET", null, headers())
    }
)


export const fetchProjectsTypeData = createAsyncThunk(
    "projectsSlice/fetchProjectsTypeData",
    () => {
        const {request} = useHttp()
        return request(`${API_URL}project-type/`, "GET", null, headers())
    }
)



export const fetchLanguages = createAsyncThunk(
    "addLanguageSlice/fetchLanguages",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}languages/` , "GET" , null , headers())
    }
)


export const fetchDatabases = createAsyncThunk(
    "addLanguageSlice/fetchDatabases",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}database/` , "GET" , null , headers())
    }
)
