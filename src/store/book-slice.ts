import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type Book = {
    id: string;
    title: string;
    summary: string;
    date: string;
}

type BookState = {
    books: Book[];
    selectedBook: Book | undefined;
}

const initialState: BookState = {
    books: [],
    selectedBook: undefined
}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        bookSession(state, action: PayloadAction<Book>) {
           const bookIndex = state.books.findIndex((book) => book.id === action.payload.id);

           if(bookIndex < 0){
                state.books.push({...action.payload})
           }
        },
        removeBookedSession(state, action: PayloadAction<{id:string}>) {
            const bookIndex = state.books.findIndex((book) => book.id === action.payload.id);

            if(bookIndex >= 0){
                state.books.splice(bookIndex, 1);
            }
        },
    } 
});

export const {bookSession, removeBookedSession} = bookSlice.actions