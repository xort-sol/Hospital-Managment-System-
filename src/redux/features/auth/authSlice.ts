import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authLoading: false,
    authMessage: null,
    authError: null,
    user: {
        id: "12344",
        username: "jhon1",
        name: "John Doe",
        role: "patient",
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearAuthError: (state) => {
            state.authError = null;
        },
        clearAuthMessage: (state) => {
            state.authMessage = null;
        },
        changerole: (state, action) => {
            state.user.role = action.payload;
        },
    },
});

export const { clearAuthError, clearAuthMessage, changerole } =
    authSlice.actions;

export default authSlice.reducer;
