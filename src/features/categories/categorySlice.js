import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCategory, deleteCategory, getAllCategories, getAllCategoriesOfCompany } from "../../services/CategoryService";


const initialState = {
    categories: [],
    message:"",
    status: 'idle',
    loading: false,  
    error: null,
};


export const fetchCategoriesofCompanyAsync = createAsyncThunk(
    "category/fetchAllByCompany",
    async (companyId, { rejectWithValue }) => {
    try {
        const response = await getAllCategoriesOfCompany(companyId);
        console.log(companyId);
        return response; 
    } catch (error) {
        return rejectWithValue(
            error?.response?.data?.error?.message || "Failed to fetch categories"
        );
    }
});


export const addCategoryAsync = createAsyncThunk(
    "category/add",
    async (category, { rejectWithValue }) => {
    try {
        const response = await addCategory(category);
        return response.data;
    } catch (error) {
        return rejectWithValue(
        error?.response?.data?.error?.message || "Failed to add category"
        );
    }
});


export const deleteCategoryAsync = createAsyncThunk(
    "category/delete",
    async (categoryId, { rejectWithValue }) => {
    try {
        await deleteCategory(categoryId);
        return categoryId;
    } catch (error) {
        return rejectWithValue(
        error?.response?.data?.error?.message || "Failed to delete category"
        );
    }
});

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
    clearCategories: (state) => {
        state.categories = [];
    },
    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchCategoriesofCompanyAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCategoriesofCompanyAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        })
        .addCase(fetchCategoriesofCompanyAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // 📌 Add category
        .addCase(addCategoryAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addCategoryAsync.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.categories.push(action.payload);
        })
        .addCase(addCategoryAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // 📌 Delete category
        .addCase(deleteCategoryAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = state.categories.filter(
                (category) => category.categoryId !== action.payload
            );
        })
        .addCase(deleteCategoryAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { clearCategories } = categorySlice.actions;

// ✅ Selectors
export const selectCategories = (state) => state.category.categories;
export const selectCategoryLoading = (state) => state.category.loading;
export const selectCategoryError = (state) => state.category.error;

export default categorySlice.reducer;
