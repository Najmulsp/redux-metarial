import React from 'react';
import { useGetAllTodosQuery } from './todosApi';

const Todos = () => {
    const { data, isLoading, error } = useGetAllTodosQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {data.slice(0 , 10).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;