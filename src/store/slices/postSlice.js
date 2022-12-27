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
        const res = await axios.delete(`https://5fb3db44b6601200168f7fba.mockapi.io/api/posts/${id}`)
        return res.data
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
            console.log(state, action)
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        });
    },
})

export default postSlice.reducer