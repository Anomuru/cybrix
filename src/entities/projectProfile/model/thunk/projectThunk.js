import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const fetchProfileData = createAsyncThunk(
    "projectSlice/fetchProfileData",
    async (id) => {
        const {request} = useHttp()
        return await request(`${API_URL}project/${id}/` , "GET" , null , headers())
    }
)