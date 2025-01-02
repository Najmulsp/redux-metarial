import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoSlice = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "/todos",
    }),
    getTodo: builder.query({
      query: (id) => `/todos/${id}`,
    }),
    addTodo: builder.mutation({
      query: (params) => ({
        url: "/todos",
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const { useGetAllTodosQuery, useAddTodoMutation, useGetTodoQuery } = todoSlice;
export default todoSlice;
