import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const fetchTypeOrderData = createAsyncThunk(
    "typeOrderSlice/fetchTypeOrderData",
    async () => {
        const {request} = useHttp()

        return await request(`${API_URL}project-type/` , "GET" , null , headers())
    }

)