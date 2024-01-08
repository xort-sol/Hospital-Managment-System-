import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ambulanceModal: false,
    allowFileAccessModal: false,
    chatBotAi: {
        chatLog: [
            {
                user: "Me",
                message:
                    "I've been experiencing persistent headaches and dizziness for the past week",
            },
            {
                user: "gpt",
                message:
                    "Can you describe the intensity of the headaches on a scale of 1 to 10, with 10 being the most severe?",
            },

            {
                user: "Me",
                message:
                    "I have been feeling extreme fatigue and have been losing weight unintentionally",
            },
            {
                user: "gpt",
                message:
                    "Have you been under increased stress or have there been any recent significant life events?",
            },
        ],
    },
};

const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        showAmbulanceModal: (state) => {
            state.ambulanceModal = true;
        },
        hideAmbulanceModal: (state) => {
            state.ambulanceModal = false;
        },

        // Will be removed
        showAllowFileAccessModal: (state) => {
            state.allowFileAccessModal = true;
        },

        hideAllowFileAccessModal: (state) => {
            state.allowFileAccessModal = false;
        },

        messageToChatbot: (state, action) => {
            state.chatBotAi.chatLog = [
                ...state.chatBotAi.chatLog,
                { user: "Me", message: action.payload },
            ];
        },
    },
});

export const {
    showAmbulanceModal,
    hideAmbulanceModal,
    hideAllowFileAccessModal,
    showAllowFileAccessModal,
    messageToChatbot,
} = patientSlice.actions;

export default patientSlice.reducer;
