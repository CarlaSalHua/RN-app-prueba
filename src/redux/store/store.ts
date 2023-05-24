import authReducer from "@redux/slices/auth.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// tipadp del dispatch del store
export type AppDispatch = typeof store.dispatch