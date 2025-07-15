import React from "react";
import '../App.css';

export default function TodoItem({todo, index, onDelete }) {
  const today = new Date();
  const due = new Date(todo.date);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

   let message = '';
   let backgroundColor = '';

  if (diffDays > 0) {
    message = `あと ${diffDays} 日`;
    backgroundColor = '#9BEBFF';
  } else if (diffDays === 0) {
    message = '今日が締切！';
    backgroundColor = '#FFFB7A';
  } else {
    message = `${Math.abs(diffDays)}日過ぎてます`;
    backgroundColor = '#FF7F7F';
}

    return (
    <li style={{backgroundColor}}>

    <input
      type="checkbox"
      checked={todo.done}
      onChange={() => onToggle(index)}
      className="check"
    />

      <span className="task">{todo.text}</span> 
      <span className="messa">{message}</span> 
      <button
        onClick={() => onDelete(index)}
        className="delete"
      >
        削除
      </button>
    </li>
  );
}

// import React from 'react';

// export default function TodoItem({ todo, index, onDelete }) {
//   const today = new Date();
//   const due = new Date(todo.date);
//   const diffTime = due.getTime() - today.getTime();
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   let message = '';
//   if (diffDays > 0) {
//     message = `あと ${diffDays} 日`;
//   } else if (diffDays === 0) {
//     message = '今日が締切！';
//   } else {
//     message = `${Math.abs(diffDays)}日 過ぎてます`;
//   }

//   return (
//     <li style={{ marginBottom: '10px' }}>
//       <strong>{todo.text}</strong> - <span style={{ color: diffDays < 0 ? 'red' : 'black' }}>{message}</span>
//       <button
//         onClick={() => onDelete(index)}
//         style={{ marginLeft: '10px', color: 'red' }}
//       >
//         削除
//       </button>
//     </li>
//   );
// }
