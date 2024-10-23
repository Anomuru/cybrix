import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const fetchApplications = createAsyncThunk(
    "applicationsSlice/fetchApplications",
    async () => {
        const {request} = useHttp()
        return await  request(`${API_URL}client-requests/` , "GET" , null , headers())
    }
)


export const fetchApplicationsAgree = createAsyncThunk(
    "applicationsSlice/fetchApplicationsAgree",
    async () => {
        const {request} = useHttp()
        return await  request(`${API_URL}client-requests/?status=True` , "GET" , null , headers())
    }
)



export const fetchApplicationsDisagree = createAsyncThunk(
    "applicationsSlice/fetchApplicationsDisagree",
    async () => {
        const {request} = useHttp()
        return await  request(`${API_URL}client-requests/?status=False` , "GET" , null , headers())
    }
)