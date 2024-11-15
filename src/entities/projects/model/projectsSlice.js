import {createSlice} from "@reduxjs/toolkit";

import {fetchProjectsData, fetchProjectsTypeData, fetchLanguages, fetchDatabases} from "./projectsThunk";


const initialState = {
    data: [],
    typeProject: [],
    typeLanguages: [],
    database: [],
    loading: true,
    error: null
}

const projectsSlice = createSlice({
    name: "projectsSlice",
    initialState,
    reducers: {
        onAddProject: (state , action) => {
            state.data = [...state.data , action.payload]
        },
        onEditProject: (state , action) => {
            state.data = [...state.data.filter(item => item.id !== action.payload.id) , action.payload.data]
        },

        onDeleteProject: (state , action) => {
            state.data = [...state.data.filter(item => item.id !== action.payload.id)]
        }
    },
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

            .addCase(fetchLanguages.pending, state => {
                state.error = false
                state.loading = true
            })
            .addCase(fetchLanguages.fulfilled, (state, action) => {
                state.typeLanguages = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(fetchLanguages.rejected, state => {
                state.error = true
                state.loading = false
            })




            .addCase(fetchDatabases.pending, state => {
                state.error = false
                state.loading = true
            })
            .addCase(fetchDatabases.fulfilled, (state, action) => {
                state.database = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(fetchDatabases.rejected, state => {
                state.error = true
                state.loading = false
            })

})
export const {onAddProject,onEditProject,onDeleteProject} = projectsSlice.actions
export default projectsSlice.reducer

