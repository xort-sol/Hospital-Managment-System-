import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from "./features/signup/signupSlice";
import authSliceReducer from "./features/auth/authSlice";
import patientSliceReducer from "./features/patient/patientSlice";
import hospitalSliceReducer from "./features/hospital/hospitalSlice";
import ambulanceSliceReducer from "./features/ambulance/ambulanceSlice";
import chatSliceReducer from "./features/chat/chatSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        signupProcess: signupSliceReducer,
        patient: patientSliceReducer,
        hospital: hospitalSliceReducer,
        ambulance: ambulanceSliceReducer,
        chatStore: chatSliceReducer,
    },
});

// Have to call auth function here

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
