import {createSlice} from "@reduxjs/toolkit";
import {fetchDatabase, fetchFrameworks, fetchLanguages} from "../thunk/addLanguagesThunk";


const initialState = {
    languages: [],
    frameworks: [],
    database: [],
    loading: false,
    error: false
}

const addLanguageSlice = createSlice({
    name: "addLanguageSlice",
    initialState,
    reducers: {
        onAddLanguage: (state , action) => {
            state.languages = [...state.languages , action.payload]
        },

        onDelete: (state , action) => {
            state.languages = [...state.languages.filter(item => item.id !== action.payload)]
        },
        onUpdate: (state , action) => {
            state.languages = [...state.languages.filter(item => item.id !== action.payload.id) , action.payload.data]
        },

        onAddFrameworks: (state , action) => {
            state.frameworks = [...state.frameworks , action.payload]
        },

        onDeleteFrameworks: (state , action) => {
            state.frameworks = [...state.frameworks.filter(item => item.id !== action.payload)]
        },
        onUpdateFrameworks: (state , action) => {
            state.frameworks = [...state.frameworks.filter(item => item.id !== action.payload.id) , action.payload.data]
        }
,

        onAddBase: (state , action) => {
            state.database = [...state.database , action.payload]
        },

        onDeleteBase: (state , action) => {
            state.database = [...state.database.filter(item => item.id !== action.payload)]
        },
        onUpdateBase: (state , action) => {
            state.database = [...state.database.filter(item => item.id !== action.payload.id) , action.payload.data]
        }

    },
    extraReducers: builder =>
        builder
            .addCase(fetchLanguages.pending, state => {
                state.error = false
                state.loading = true
            })
            .addCase(fetchLanguages.fulfilled, (state, action) => {
                state.languages = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(fetchLanguages.rejected, state => {
                state.error = true
                state.loading = false
            })



            .addCase(fetchFrameworks.pending, state => {
                state.error = false
                state.loading = true
            })
            .addCase(fetchFrameworks.fulfilled, (state, action) => {
                state.frameworks = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(fetchFrameworks.rejected, state => {
                state.error = true
                state.loading = false
            })


            .addCase(fetchDatabase.pending, state => {
                state.error = false
                state.loading = true
            })
            .addCase(fetchDatabase.fulfilled, (state, action) => {
                state.database = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(fetchDatabase.rejected, state => {
                state.error = true
                state.loading = false
            })






})


export default addLanguageSlice.reducer

export const {onAddLanguage , onDelete , onUpdate , onAddFrameworks , onDeleteFrameworks , onUpdateFrameworks, onAddBase , onDeleteBase , onUpdateBase } = addLanguageSlice.actions