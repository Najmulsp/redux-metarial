import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../feature/counter/counterSlice";
import bookReducer from "../feature/books/bookSlice";
import postReducer from "../feature/posts/postSlice"


const store = configureStore({
    reducer: {
        counter : counterReducer,
        books : bookReducer,
        posts: postReducer,
    },
});

export default store;