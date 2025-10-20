import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, registercompany } from '../../services/AuthService';

const initialState = {
    user: null,
    company: null,
    message:"",
    status: 'idle',
    loading: false,  
    error: null,
};

export const loginAsync = createAsyncThunk(
    '/auth/user/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await login(credentials);
            const result = response?.data?.data;

            const accessToken = result?.accessToken;
            const refreshToken = result?.refreshToken;
            const userData = result?.userResponseDto;
            const companyData = result?.userResponseDto?.company;
            const roles = result?.userResponseDto?.roles || [];

            console.log(result);
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("roles", JSON.stringify(roles));

            console.log(companyData);

            return {
                user: {
                userId: userData.userId,
                name: userData.name,
                email: userData.email,
                roles: userData.roles,
                createdAt: userData.createdAt,
                updatedAt: userData.updatedAt
                },
                company: companyData
            };
        } catch (error) {
            console.log(error);
            return rejectWithValue(
                error?.response?.data?.error?.message || "Invalid Credentials, Please try again later."
            );
        }
    }
);


export const registerCompanyAsync = createAsyncThunk(
    '/company/register',
    async ({ companyData, userData }, { rejectWithValue }) => {
        try {
            const response = await registercompany(companyData, userData);
            console.log(response);
            return response?.data?.message;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error?.response?.data?.error?.message || "Registration failed. Please try again later.");
        }
    }
);

const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
    logout: (state) => {
        state.user = null;
        state.company = null;
        state.status = 'idle';
        state.loading = false;
        state.error = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("roles");
    },
    setGlobalLoader: (state, action) => {
    state.loading = action.payload;  
    }
},
    extraReducers: (builder) => {
    builder
    // LOGIN
    .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;    
        state.error = null;
    })
    .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.user = action.payload.user;
        state.company = action.payload.company;
    })
    .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;   
        state.error = action.payload;
    })

    // REGISTER
    .addCase(registerCompanyAsync.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
        state.error = null;
    })
    .addCase(registerCompanyAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.message = action.payload;
    })
    .addCase(registerCompanyAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.payload;
    });
    },
});

export const { logout, setGlobalLoader } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectCompany = (state) => state.auth.company;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthLoader = (state) => state.auth.loading;  

export default authSlice.reducer;
