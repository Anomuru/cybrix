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
