import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import commentReducer from "./redux/commentSlice";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        newComments:commentReducer
    },
})