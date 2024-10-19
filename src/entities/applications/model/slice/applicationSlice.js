import {createSlice} from "@reduxjs/toolkit";
import {fetchApplications} from "../thunk/applicationThunk";


const initialState = {
    applicationsData: [],
    applicationsStatus: "idle",
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

})

export default applicationsSlice.reducer