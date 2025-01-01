import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../feature/counter/counterSlice";
import bookReducer from "../feature/books/bookSlice";
import postReducer from "../feature/posts/postSlice"
import todoSlice from "../feature/todos/todosApi";


const store = configureStore({
    reducer: {
        counter : counterReducer,
        books : bookReducer,
        posts: postReducer,
        [todoSlice.reducerPath]: todoSlice.reducer,
    },
    middleware: (prevMiddlewares) => 
        prevMiddlewares().concat(todoSlice.middleware),
});

export default store;