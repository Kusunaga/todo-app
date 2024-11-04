// src/TodoPage.js
import React, { useState } from 'react';

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('仕事');

  const addTask = () => {
    if (task.trim() && date && category) {
      setTasks([...tasks, { date, text: task, category, completed: false }]);
      setDate('');
      setTask('');
      setCategory('仕事');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ToDo リスト</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="仕事">仕事</option>
        <option value="家事">家事</option>
        <option value="余暇">余暇</option>
      </select>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.date} - {task.text} ({task.category})
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;
