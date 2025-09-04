import { createSlice } from "@reduxjs/toolkit";
import services from "../../appwrite/config";

const initialState = {
    allPosts: []
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPosts: (state, action)=>{
            state.allPosts = action.payload;
        }
    }
})

export const { getPosts } = postSlice.actions;

const postReducers = postSlice.reducer;

export default postReducers;