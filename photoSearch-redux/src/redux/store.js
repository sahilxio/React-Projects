import { configureStore } from "@reduxjs/toolkit";
import photoReducers from "./features/photoSlice"

export const store = configureStore({
    reducer: {
         photo: photoReducers
    }
})