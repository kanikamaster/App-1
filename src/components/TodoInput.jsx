import React from "react";
import '../App.css';

export default function TodoInput({task, setTask, deadline, setDeadline, onAdd}) {
  return (
    <div className="top">
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="タスクを入力"
      autoFocus
      className="text"
    />
    <br />
    <input 
    type="date"
    value={deadline}
    onChange={(e) => setDeadline(e.target.value)}
    className="date"
    />
    <br />
    <button onClick={onAdd}>やるぞ</button>
    </div>
    
  );
}



// import React from 'react';

// export default function TodoInput({ task, setTask, deadline, setDeadline, onAdd }) {
//   return (
//     <div style={{ marginBottom: '20px' }}>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="タスクを入力"
//         style={{ padding: '8px', width: '70%', marginRight: '10px' }}
//       />
//       <input
//         type="date"
//         value={deadline}
//         onChange={(e) => setDeadline(e.target.value)}
//         style={{ padding: '8px' }}
//       />
//       <button onClick={onAdd} style={{ marginLeft: '10px', padding: '8px' }}>追加</button>
//     </div>
//   );
// }
