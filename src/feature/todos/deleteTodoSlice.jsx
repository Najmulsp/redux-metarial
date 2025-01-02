// import todoSlice from "./todosApi";


// const deleteTodoSlice = todoSlice.injectEndpoints({
//     endpoints: (builder) =>{
//         return {
//             deleteTodo: builder.mutation({
//                 query: (id) => ({
//                     url: `todos/${id}`,
//                     method: "DELETE"
//                 })
//             })
//         }
//     }
// })

// export const { useDeleteTodoMutation} = deleteTodoSlice;

import todoSlice from "./todosApi";

const deleteTodoSlice = todoSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteTodoMutation } = deleteTodoSlice;
