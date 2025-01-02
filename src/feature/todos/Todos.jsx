import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useAddTodoMutation, useGetAllTodosQuery } from './todosApi';
import { useDeleteTodoMutation } from './deleteTodoSlice';

const Todos = () => {
    const { data, isLoading, error, refetch } = useGetAllTodosQuery();
    const [todo, setTodo] = useState("");
    const [addTodo] = useAddTodoMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = (id) =>{
    useDeleteTodoMutation(id)
  }

  const handleAddTodo = () =>{
      addTodo({
        completed: false,
        userId: 124,
        todo: todo
      })
      // .unwrap()
      .then(()=>{
        refetch();
      })
  }
  return (
    <div>
      <h1>My Todos</h1>

      <Typography>Add Todo</Typography>
      <TextField
              name="todo"
              type="text"
              variant="filled"
              label="Your Todo"
              sx={{ margin: "10px" }}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddTodo}>Add Todo</Button>
      <ul>
        {data.slice(0 , 10).map((todo) => (
          <li key={todo.id}>{todo.title} <span><Button variant="contained" onClick={()=>handleDelete(todo?.id)}>Delete</Button></span></li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;