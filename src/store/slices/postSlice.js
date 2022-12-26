import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async () => {
        const res = await fetch('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts')
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
        })
    }
})

export default postSlice.reducer