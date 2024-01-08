import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentChat: undefined,
    currentUser: undefined,
    clickChatopen: undefined,
};

const chatSlice = createSlice({
    name: "chatbox",
    initialState,
    reducers: {
        openUserChat: (state, action) => {
            state.currentUser = action.payload;
        },
        showAllContacts: (state) => {
            state.currentUser = undefined;
        },
    },
});

export const { openUserChat, showAllContacts } = chatSlice.actions;

export default chatSlice.reducer;
