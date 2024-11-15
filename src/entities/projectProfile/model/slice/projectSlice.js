import {createSlice} from "@reduxjs/toolkit";
import {fetchProfileData} from "../thunk/projectThunk";


const initialState = {
    data: [],
    error: false,
    loading: false
}

const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchProfileData.pending, state => {
                state.error = false
                state.loading= true
            })
            .addCase(fetchProfileData.fulfilled , (state, action) => {
                state.data = action.payload
                state.error = false
                state.loading = false
            })
            .addCase(fetchProfileData.rejected , (state, action) => {
                state.error = false
                state.loading= false
            })
})

export default profileSlice.reducer