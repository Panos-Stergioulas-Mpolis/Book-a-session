import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book-slice";

export const store = configureStore({
    reducer: {
        book: bookSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;