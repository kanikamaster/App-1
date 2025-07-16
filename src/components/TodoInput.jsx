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