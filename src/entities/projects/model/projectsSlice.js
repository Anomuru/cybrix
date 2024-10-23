import {createSlice} from "@reduxjs/toolkit";

import {fetchProjectsData, fetchProjectsTypeData} from "./projectsThunk";

const initialState = {
    data: [],
    typeProject: [],
    loading: true,
    error: null
}

const projectsSlice = createSlice({
    name: "projectsSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchProjectsData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProjectsData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchProjectsData.rejected, state => {
                state.loading = false
                state.error = "error"
            })

            .addCase(fetchProjectsTypeData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProjectsTypeData.fulfilled, (state, action) => {
                state.typeProject = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchProjectsTypeData.rejected, state => {
                state.loading = false
                state.error = "error"
            })
})

export default projectsSlice.reducer

