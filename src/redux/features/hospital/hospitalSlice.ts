import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addPatientModal: false,
};

const hospitalSlice = createSlice({
    name: "hospital",
    initialState,
    reducers: {
        closeAddPatientModal: (state) => {
            state.addPatientModal = false;
        },
        showAddPatientModal: (state) => {
            state.addPatientModal = true;
        },
    },
});

export const { closeAddPatientModal, showAddPatientModal } =
    hospitalSlice.actions;

export default hospitalSlice.reducer;
