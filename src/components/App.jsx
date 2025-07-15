import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import '../App.css';
// ここからfirebase
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function App() {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = async () => {
    if(task.trim() === '' || deadline === '') return;
    const newTodo = {
      text: task,
      date: deadline,
    };

    // ここからfirebase
    try {
    // Firestore に保存
    await addDoc(collection(db, 'todos'), {
      ...newTodo,
      completed: false,
      createdAt: new Date(),
    });

    // ローカルの状態にも追加（すぐ表示したい場合）
    setTodos([...todos, newTodo]);

    // フォームをリセット
    setTask('');
    setDeadline('');
  } catch (e) {
    console.error('Firestoreへの保存に失敗:', e);
  }
  // ここまでfirebase

  }

useEffect(() => {
  const fetchTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const todosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
        date: doc.data().date,
      }));
      setTodos(todosData);
    } catch (e) {
      console.error("データの読み込みに失敗:", e);
    }
  };

  fetchTodos(); // 初回のみ実行
}, []);



const handleDelete = (index) => {
  const updated = todos.filter((_, i) => i !== index);
  setTodos(updated);
};

return (
  <div>
  <h1 style={{textAlign: 'center'}}>打倒タスク</h1>
      <TodoInput
        task={task}
        setTask={setTask}
        deadline={deadline}
        setDeadline={setDeadline}
        onAdd={handleAdd}
      />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
};

// import React, { useState } from 'react';
// import TodoInput from './TodoInput';
// import TodoList from './TodoList';

// export default function App() {
//   const [task, setTask] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [todos, setTodos] = useState([]);

//   const handleAdd = () => {
//     if (task.trim() === '' || deadline === '') return;

//     const newTodo = {
//       text: task,
//       date: deadline
//     };

//     setTodos([...todos, newTodo]);
//     setTask('');
//     setDeadline('');
//   };

//   const handleDelete = (index) => {
//     const updated = todos.filter((_, i) => i !== index);
//     setTodos(updated);
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
//       <h1>TODOアプリ</h1>
//       <TodoInput
//         task={task}
//         setTask={setTask}
//         deadline={deadline}
//         setDeadline={setDeadline}
//         onAdd={handleAdd}
//       />
//       <TodoList todos={todos} onDelete={handleDelete} />
//     </div>
//   );
// }



// Todoアプリ+締め切り実装 (コピペ用)
// import { useState } from 'react';

// function App() {
//   const [task, setTask] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [todos, setTodos] = useState([]);

//   const handleClick = () => {
//     if (task.trim() === '' || deadline === '') return;

//     const newTodo = {
//       text: task,
//       date: deadline
//     };

//     setTodos([...todos, newTodo]);
//     setTask('');
//     setDeadline('');
//   };

//   const handleDelete = (index) => {
//     const updated = todos.filter((_, i) => i !== index);
//     setTodos(updated);
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
//       <h1>TODOアプリ</h1>

//       {/* タスク入力欄 */}
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="タスクを入力"
//         style={{ padding: '8px', width: '70%', marginBottom: '10px' }}
//       />

//       {/* 締切日入力欄 */}
//       <input
//         type="date"
//         value={deadline}
//         onChange={(e) => setDeadline(e.target.value)}
//         style={{ padding: '8px', marginLeft: '10px' }}
//       />

//       {/* 追加ボタン */}
//       <div>
//         <button onClick={handleClick} style={{ marginTop: '10px', padding: '8px' }}>追加</button>
//       </div>

//       {/* タスクリスト */}
//       <ul style={{ textAlign: 'left', marginTop: '20px' }}>
//         {todos.map((t, i) => {
//           const today = new Date();
//           const due = new Date(t.date);
//           const diffTime = due.getTime() - today.getTime();
//           const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//           // 表示文
//           let message = '';
//           if (diffDays > 0) {
//             message = `あと ${diffDays} 日`;
//           } else if (diffDays === 0) {
//             message = '今日が締切！';
//           } else {
//             message = `${Math.abs(diffDays)}日 過ぎてます`;
//           }

//           return (
//             <li key={i} style={{ marginBottom: '10px' }}>
//               <strong>{t.text}</strong> - <span style={{ color: diffDays < 0 ? 'red' : 'black' }}>{message}</span>
//               <button
//                 onClick={() => handleDelete(i)}
//                 style={{ marginLeft: '10px', color: 'red' }}
//               >
//                 削除
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;








// Todoアプリ(コピペ用)
// import { useState } from 'react'


// function App() {
//   const [task, setTask] = useState('')
//   const [todos, setTodos] = useState([])

//   const handleAdd = () => {
//     if (task.trim() === '') return
//     setTodos([...todos, task])
//     setTask('')
//   }

//   const handleDelete = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index)
//     setTodos(newTodos)
//   }

//    return (
//     <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
//       <h1>TODOアプリ</h1>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="タスクを入力"
//         style={{ padding: '8px', width: '70%' }}
//       />
//       <button onClick={handleAdd} style={{ padding: '8px' }}>追加</button>

//       <ul style={{ textAlign: 'left', marginTop: '20px' }}>
//         {todos.map((task, i) => (
//           <li key={i} style={{ marginBottom: '8px' }}>
//             {task}
//             <button
//               onClick={() => handleDelete(i)}
//               style={{ marginLeft: '10px', color: 'red' }}
//             >
//               削除
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App




// import Header from './components/Header'
// import Sub from './main'

// const App = () => {
//   return (
//     <>
//     <Header />
//     <Sub />
//     <p>わいわいわい</p>
//     </>
//   )
// }

// export default App


// App.jsx
