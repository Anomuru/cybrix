import {createSlice} from "@reduxjs/toolkit";

import {fetchProjectsData} from "./projectsThunk";

const initialState = {
    data: [
        {
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },{
            name: "null",
            added_date: "3.10.2024",
            finished_date: "3.10.2024"
        },
    ],
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
})

export default projectsSlice.reducer

