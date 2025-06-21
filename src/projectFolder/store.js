import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import commentReducer from "./redux/commentSlice";
import userReducer from "./redux/userSlice"


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        newComments:commentReducer,
        newSubscriber:userReducer
        
    },
})