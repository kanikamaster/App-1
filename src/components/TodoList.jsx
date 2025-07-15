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

// import React from 'react';
// import TodoItem from './TodoItem';

// export default function TodoList({ todos, onDelete }) {
//   return (
//     <ul style={{ textAlign: 'left', marginTop: '20px' }}>
//       {todos.map((todo, index) => (
//         <TodoItem key={index} todo={todo} index={index} onDelete={onDelete} />
//       ))}
//     </ul>
//   );
// }
