
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetSubCategory = createAsyncThunk("subcategory", async (_, thunkAPI) => {
    try {
        const resp = await axios.get(`http://localhost:3004/subcategory`)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
});

export const PostSubCategory = createAsyncThunk("post", async (data, thunkAPI) => {
    try {
        const res = await axios.post("http://localhost:3004/subcategory", data)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
})

const SubCategorySlice = createSlice({
    name: "subcategory",
    initialState: {
        loading: false,
        error: '',
        subcategory: [],
        del: false,
        value: ""
    },
    extraReducers: {
        [GetSubCategory.pending]: state => {
            state.loading = true
        },
        [GetSubCategory.fulfilled]: (state, action) => {
            state.loading = false
            state.subcategory = action.payload
        },
        [GetSubCategory.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
    reducers: {
        CloseSubItem: (state, action) => {
            state.del = action.payload
        },
        SubValue: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { CloseSubItem, SubValue } = SubCategorySlice.actions
export default SubCategorySlice.reducer;