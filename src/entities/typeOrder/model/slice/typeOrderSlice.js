import {createSlice} from "@reduxjs/toolkit";
import {fetchTypeOrderData} from "../thunk/typeOrderThunk";


const initialState = {
    typeOrderData: [],
    typeOrderDataStatus: "idle",
    error: false
}


const typeOrderSlice = createSlice({
    name: "typeOrderSlice",
    initialState,
    reducers: {
        onAddTypeOrder: (state, action) => {
            state.typeOrderData = [...state.typeOrderData, action.payload]
        },
        onDeleteTypeOrder: (state, action) => {
            state.typeOrderData = state.typeOrderData.filter(item => item.id !== action.payload)
        },
        onEditTypeOrder: (state, action) => {
            state.typeOrderData = [...state.typeOrderData.filter(item => item.id !== action.payload.id) , action.payload.data]
        }

    },
    extraReducers: builder =>
        builder
            .addCase(fetchTypeOrderData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTypeOrderData.fulfilled, (state, action) => {
                state.typeOrderData = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchTypeOrderData.rejected, state => {
                state.loading = false
                state.error = "error"
            })
})

export const {onAddTypeOrder, onEditTypeOrder, onDeleteTypeOrder} = typeOrderSlice.actions
export default typeOrderSlice.reducer