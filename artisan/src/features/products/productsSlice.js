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

export const fetchSellerProducts = createAsyncThunk(
    'products/fetchSeller',
    async (_, { rejectWithValue }) => {
        const token = localStorage.getItem('token'); 
        try {
            const response = await fetch('http://localhost:3001/api/products/my-products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Could not fetch products');
            return data;
        } catch (error) {
            console.error("Fetch error:", error);
            return rejectWithValue(error.message);
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


export const deleteProduct = createAsyncThunk(
    'products/delete',
    async ({ productId, token }, { rejectWithValue }) => {
        console.log("Deleting product with ID:", productId);
        if (!productId) {
            console.error("Attempted to delete with undefined productId");
            return rejectWithValue('Product ID is undefined');
        }
        try {
            const response = await fetch(`http://localhost:3001/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                const data = await response.json();
                console.error("Failed to delete product:", data.message);
                throw new Error(data.message || 'Failed to delete the product');
            }
            return productId;
        } catch (error) {
            console.error("Error in deleteProduct:", error);
            return rejectWithValue(error.message);
        }
    }
);


export const updateProduct = createAsyncThunk(
    'products/update',
    async ({ productId, productData, token }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3001/api/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData),
            });
            if (!response.ok) throw new Error('Failed to update the product');
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const initialState = {
    products: [],
    product: null,
    status: 'idle', 
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
            })
            .addCase(createProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
                state.status = 'succeeded';
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(product => product.id !== action.payload); // Remove the deleted product from the list
                state.status = 'succeeded';
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(product => product._id === action.payload._id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            })
            .addCase(fetchSellerProducts.fulfilled, (state, action) => {
                console.log('Fetched products:', action.payload); 
                state.products = action.payload;
                state.status = 'succeeded';
            });
    }
});


export default productsSlice.reducer;
