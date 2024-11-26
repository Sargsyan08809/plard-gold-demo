import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetGenderCategory = createAsyncThunk("category", async (_, thunkAPI) => {
    try {
        const resp = await axios.get(`http://localhost:3004/category`)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
});

export const PostGenderCategory = createAsyncThunk("post", async (data, thunkAPI) => {
    try {
        const res = await axios.post("http://localhost:3004/category", data)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
})

const GenderCategorySlice = createSlice({
    name: "category",
    initialState: {
        loading: false,
        error: '',
        category: [],
    },
    extraReducers: {
        [GetGenderCategory.pending]: state => {
            state.loading = true
        },
        [GetGenderCategory.fulfilled]: (state, action) => {
            state.loading = false
            state.category = action.payload
        },
        [GetGenderCategory.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
export default GenderCategorySlice.reducer;