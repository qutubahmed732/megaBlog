import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice.js";
import postReducers from "./features/postSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducers
    }
})


export default store;