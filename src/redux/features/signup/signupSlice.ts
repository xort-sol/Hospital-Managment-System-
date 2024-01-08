import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: 1,
    userData: {},
};

const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        signupIncrement: (state) => {
            state.active += 1;
        },
        signupDecrement: (state) => {
            state.active -= 1;
        },
    },
    extraReducers: () => {},
});

export const { signupIncrement, signupDecrement } = signupSlice.actions;

export default signupSlice.reducer;
