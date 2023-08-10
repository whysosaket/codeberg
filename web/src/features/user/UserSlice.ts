import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { User } from "@/models/user.type";
import { isLoggedin } from "./UserAPI";

const initialState: User = {
    _id: "",
    name: "",
    email: "",
    avatar: "",
    batch: "",
    program: "",
    registrationNumber: "",
    sectionCode: "",
    isLogged: isLoggedin(),
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.batch = action.payload.batch;
            state.program = action.payload.program;
            state.registrationNumber = action.payload.registrationNumber;
            state.sectionCode = action.payload.sectionCode;
            state.isLogged = true;
        },
        logout: (state) => {
            localStorage.removeItem("auth-token");
            state.name = "";
            state.email = "";
            state.batch = "";
            state.program = "";
            state.registrationNumber = "";
            state.sectionCode = "";
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