import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const fetchApplications = createAsyncThunk(
    "applicationsSlice/fetchApplications",
    async () => {
        const {request} = useHttp()
        return await  request(`${API_URL}client-requests/` , "GET" , null , headers())
    }
)