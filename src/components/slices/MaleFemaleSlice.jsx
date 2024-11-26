import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetMaleFemale = createAsyncThunk("gender", async (_, thunkAPI) => {
    try {
        const resp = await axios.get(`http://localhost:3004/gender`)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
});


const MaleFemaleSlice = createSlice({
    name: "gender",
    initialState: {
        loading: false,
        error: '',
        gender: [],
        delcategory: false,
    },
    extraReducers: {
        [GetMaleFemale.pending]: state => {
            state.loading = true
        },
        [GetMaleFemale.fulfilled]: (state, action) => {
            state.loading = false
            state.gender = action.payload
        },
        [GetMaleFemale.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
    reducers: {
        CloseCategoryItem: (state, action) => {
            state.delcategory = action.payload
        }
    }
})

export const { CloseCategoryItem} = MaleFemaleSlice.actions
export default MaleFemaleSlice.reducer;