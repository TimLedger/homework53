import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import './App.css';

interface TaskItem {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', text: 'Купить подарки', completed: false },
    { id: '2', text: 'Нарядить елку', completed: true },
    { id: '3', text: 'Испечь угощение', completed: false },
  ]);

  const handleAddTask = (text: string) => {
    const newTask: TaskItem = {
      id: new Date().toISOString(),  
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='app'>
      <AddTaskForm onAddTask={handleAddTask} />
      <ul>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;