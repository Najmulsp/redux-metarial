import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../feature/counter/counterSlice";
import bookReducer from "../feature/books/bookSlice";


const store = configureStore({
    reducer: {
        counter : counterReducer,
        bookList : bookReducer,
    },
});

export default store;