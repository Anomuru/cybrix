import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const fetchLanguages = createAsyncThunk(
    "addLanguageSlice/fetchLanguages",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}languages/` , "GET" , null , headers())
    }
)


export const fetchFrameworks = createAsyncThunk(
    "addLanguageSlice/fetchFrameworks",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}frameworks/` , "GET" , null , headers())
    }
)


export const fetchDatabase = createAsyncThunk(
    "addLanguageSlice/fetchDatabase",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}database/` , "GET" , null , headers())
    }
)
