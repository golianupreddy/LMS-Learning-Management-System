import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from '../../config/axiosInstance.js';

// Safe parse helper function
const getParsedData = () => {
    try {
        const item = localStorage.getItem("data");
        if (!item || item === "undefined" || item === "null") return {};
        return JSON.parse(item);
    } catch {
        return {};
    }
};

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    role: localStorage.getItem("role") || "",
    data: getParsedData()
};

export const createAccount = createAsyncThunk('/auth/signup', async (data) => {
    try {
        const response = axiosInstance.post("user/register", data);
        toast.promise(response, {
            loading: 'Creating your account...',
            success: (res) => res?.data?.message || 'Account created successfully',
            error: 'Failed to create account'
        });
        return await response;
    } catch (e) {
        toast.error(e?.response?.data?.message || 'Something went wrong');
    }
});

export const login = createAsyncThunk('/auth/signin', async (data) => {
    try {
        const response = axiosInstance.post("user/login", data);
        toast.promise(response, {
            loading: 'Authenticating...',
            success: (res) => res?.data?.message || 'Logged in successfully',
            error: 'Failed to authenticate you..!'
        });
        return await response;
    } catch (e) {
        toast.error(e?.response?.data?.message || 'Invalid credentials');
    }
});

export const logout = createAsyncThunk('/auth/logout', async (data) => {
    try {
        const response = axiosInstance.get("user/logout", data);
        toast.promise(response, {
            loading: 'Logging out...',
            success: (res) => res?.data?.message || 'Logged out successfully',
            error: 'Failed to log out'
        });
        return await response;
    } catch (e) {
        toast.error(e?.response?.data?.message || 'Logout failed');
    }
});

export const updateProfile = createAsyncThunk('/auth/updateProfile', async (data) => {
    try {
        const response = axiosInstance.put(`user/update`, data);
        toast.promise(response, {
            loading: 'Updating profile...',
            success: (res) => res?.data?.message || 'Profile updated successfully',
            error: 'Failed to update profile'
        });
        return (await response).data;
    } catch (e) {
        toast.error(e?.response?.data?.message || 'Update failed');
    }
});

export const fetchProfile = createAsyncThunk('/auth/fetchProfile', async () => {
    try {
        const response = await axiosInstance.get("user/me");
        return response;
    } catch (e) {
        toast.error(e?.message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                if (action?.payload?.data) {
                    const userData = action.payload.data;
                    const role = userData?.user?.role || "";

                    localStorage.setItem("data", JSON.stringify(userData));
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("role", role);

                    state.isLoggedIn = true;
                    state.role = role;
                    state.data = userData;
                }
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.isLoggedIn = false;
                state.role = "";
                state.data = {};
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                if (action?.payload?.data?.user) {
                    const user = action.payload.data.user;
                    localStorage.setItem("data", JSON.stringify(user));
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("role", user?.role || "");

                    state.data = user;
                    state.isLoggedIn = true;
                    state.role = user?.role || "";
                }
            });
    }
});

export default authSlice.reducer;
