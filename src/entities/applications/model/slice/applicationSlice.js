import {createSlice} from "@reduxjs/toolkit";
import {fetchApplications, fetchApplicationsAgree, fetchApplicationsDisagree} from "../thunk/applicationThunk";


const initialState = {
    applicationsData: [],
    applicationsAgreeData: [],
    applicationsDisagreeData: [],
    applicationsStatus: "idle",
    applicationsAgreeStatus: "idle",
    applicationsDisagreeStatus: "idle",
    error: false
}

const applicationsSlice = createSlice({
    name: "applicationsSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchApplications.pending, state => {
                state.applicationsStatus = "loading"
                state.error = false
            })
            .addCase(fetchApplications.fulfilled, (state, action) => {
                state.applicationsData = action.payload
                state.applicationsStatus = "idle"
                state.error = false
            })

            .addCase(fetchApplications.rejected, state => {
                state.applicationsStatus = "idle"
                state.error = true
            })


            .addCase(fetchApplicationsAgree.pending, state => {
                state.applicationsAgreeStatus = "loading"
                state.error = false
            })
            .addCase(fetchApplicationsAgree.fulfilled, (state, action) => {
                state.applicationsAgreeData = action.payload
                state.applicationsStatus = "idle"
                state.error = false
            })
            .addCase(fetchApplicationsAgree.rejected, state => {
                state.applicationsAgreeStatus = "idle"
                state.error = true
            })


            .addCase(fetchApplicationsDisagree.pending, state => {
                state.applicationsAgreeStatus = "loading"
                state.error = false
            })
            .addCase(fetchApplicationsDisagree.fulfilled, (state, action) => {
                state.applicationsDisagreeData = action.payload
                state.applicationsStatus = "idle"
                state.error = false
            })
            .addCase(fetchApplicationsDisagree.rejected, state => {
                state.applicationsAgreeStatus = "idle"
                state.error = true
            })

})

export default applicationsSlice.reducer