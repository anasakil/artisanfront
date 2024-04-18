import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './productsAPI';

export const fetchProductsByRegion = createAsyncThunk(
    'products/fetchByRegion',
    async (region, { rejectWithValue }) => {
        try {
            const data = await api.fetchProductsByRegion(region);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const data = await api.fetchProducts();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createProduct = createAsyncThunk(
    'products/create',
    async ({ productData, token }, { rejectWithValue }) => {
        try {
            const data = await api.createProduct(productData, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    products: [],
    product: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByRegion.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsByRegion.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchProductsByRegion.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default productsSlice.reducer;
