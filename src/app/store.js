import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoryReducer from "../features/categories/categorySlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category:categoryReducer
    },
});