import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'newSubscriber',
    initialState:{
        comments:[]
    },

    reducers:{
        addUsers:(state,action) => {
           state.comments.push(action.payload)

        }
    }
})

export const {addUsers} = userSlice.reducer
export default userSlice.reducer