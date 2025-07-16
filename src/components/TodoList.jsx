import React from "react";
import TodoItem from "./TodoItem";
import '../App.css';

export default function TodoList({todos, onDelete}) {
  return (
    <ul>
      {todos.map((todo, index) => (
         <TodoItem key={index} todo={todo} index={index} onDelete={onDelete} />
      ))}
    </ul>
  );
}
