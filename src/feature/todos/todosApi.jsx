import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoSlice = createApi({

reducerPath: "todoApi", // এটি `reducer`-এর জন্য একটি ইউনিক নাম
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }), // API-এর বেস URL
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {
        return "/todos";// API endpoint
    },
    }),
    getTodo: (builder) =>{
        query: (id) =>{
            return `/todos/${id}`
        }
    }
  }),
});

export const { useGetAllTodosQuery } = todoSlice;
export default todoSlice;
