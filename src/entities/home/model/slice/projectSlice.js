import {createSlice} from "@reduxjs/toolkit";
import {fetchHomeProject} from "../thunk/projectThunk";


const initialState ={
    data: [],
    loading: false,
    error: false
}


const homeProjectSlice = createSlice({
    name: "homeProjectSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchHomeProject.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchHomeProject.fulfilled , (state, action) => {
                state.data = action.payload
                state.error = false
                state.loading = false
            })
            .addCase(fetchHomeProject.rejected , state => {
                state.error = true
                state.loading  = false
            })
})

export default homeProjectSlice.reducer