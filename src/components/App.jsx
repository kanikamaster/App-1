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