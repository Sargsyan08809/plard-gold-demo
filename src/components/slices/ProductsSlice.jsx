import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProducts = createAsyncThunk("products", async (_, thunkAPI) => {
    try {
        const resp = await axios.get(`http://localhost:3004/products`)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
});

export const PostProducts = createAsyncThunk("post", async (data, thunkAPI) => {
    try {
        const res = await axios.post("http://localhost:3004/products", data)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue()
    }
})

const ProductsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        error: '',
        products: [],
        prodValue: "",
    },
    extraReducers: {
        [GetProducts.pending]: state => {
            state.loading = true
        },
        [GetProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.products = action.payload
        },
        [GetProducts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }, reducers: {
        ProducHandleValue: (state, action) => {
            state.prodValue = action.payload
        }
    }
})
export const { ProducHandleValue } = ProductsSlice.actions;
export default ProductsSlice.reducer;