import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  //const { isLoading, data: todos = [] } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { isLoading, data: todo } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return alert("there is no previous all ToDo :c");
    setTodoId(todoId - 1);
  };
  return (
    <>
      <div>Todo's RTK Query</div>
      <hr />

      <h4>isLoading: {isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {" "}
            <strong>({todo.completed ? "DONE" : "PENDING"}) </strong>
            {todo.title}{" "}
          </li>
        ))}
      </ul> 
      <button>Next Todo</button>
      */}

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
