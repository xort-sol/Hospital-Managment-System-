import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addPatientModal: false,
};

const ambulanceSlice = createSlice({
    name: "hospital",
    initialState,
    reducers: {
        closeAddPatientModal: (state) => {
            state.addPatientModal = false;
        },
        openAddPatientModal: (state) => {
            state.addPatientModal = true;
        },
    },
});

export const { closeAddPatientModal, openAddPatientModal } =
    ambulanceSlice.actions;

export default ambulanceSlice.reducer;
