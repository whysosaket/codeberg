import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { User } from "@/models/user.type";
import { isLoggedin } from "./UserAPI";

const initialState: User = {
    _id: "",
    name: "",
    email: "",
    branch: "",
    avatar: "",
    registrationNumber: "",
    sectionCode: "",
    isLogged: isLoggedin(),
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem("auth-token");
            state.isLogged = false;
        },
        login: (state) => {
            state.isLogged = true;
        },
    },
    extraReducers: (builder) => {
    }
});

export const { setUser, logout, login } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;