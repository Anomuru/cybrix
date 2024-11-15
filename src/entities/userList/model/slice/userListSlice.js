import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    userList: [
        {name: "dad", surname: "dasd", job: "dasds", age: 12 , id: 1},
        {name: "qw", surname: "dasd", job: "dasds", age: 62 , id: 2},
        {name: "dad", surname: "dasd", job: "dasds", age: 52 , id: 3},
        {name: "dad", surname: "dasd", job: "dasds", age: 14 , id: 4},
    ],
    loading: false,
    error: false
}

const userListSlice = createSlice({
    name: "userListSlice",
    initialState,
    reducers: {
        onAddUserList: (state, action) => {
            state.userList = [...state.userList , action.payload]
        },
        onDeleteUserList: (state, action) => {
            state.userList = [...state.userList.filter(item => item.id !== action.payload)]
        },
        onEditUserList: (state, action) => {
            console.log(action.payload)
            state.userList = [...state.userList.filter(item => item.id !== action.payload.id) , action.payload]
        }
    },
    extraReducers: builder => {
    }
})

export const {onAddUserList,onDeleteUserList , onEditUserList} = userListSlice.actions
export default userListSlice.reducer