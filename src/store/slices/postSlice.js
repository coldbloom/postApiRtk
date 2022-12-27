import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async () => {
        const res = await axios.get('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts')
        return res.data
    }
)

export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (id) => {
        const res = await fetch(`https://5fb3db44b6601200168f7fba.mockapi.io/api/posts/${id}`)
        const data = await res.json()
        return data
    }
)

const initialState = {
    posts: [],
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        });

        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.posts = action.payload
        });
    },
})

export default postSlice.reducer