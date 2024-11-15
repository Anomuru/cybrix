import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const fetchHomeProject = createAsyncThunk(
    "homeProjectSlice/fetchHomeProject",
    async () => {
        const {request} = useHttp()

        return await request(`${API_URL}project/` , "GET" , null , headers())
    }
)