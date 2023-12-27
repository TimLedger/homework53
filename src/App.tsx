import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import './App.css';

interface TaskItem {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', text: 'Купить подарки' },
    { id: '2', text: 'Нарядить елку' },
    { id: '2', text: 'Испечь угощение' },
  ]);

  const handleAddTask = (text: string) => {
    const newTask: TaskItem = {
      id: new Date().toISOString(),  
      text,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='app'>
      <AddTaskForm onAddTask={handleAddTask} />
      {tasks.map(task => (
        <Task key={task.id} id={task.id} text={task.text} onDeleteTask={handleDeleteTask} />
      ))}
    </div>
  );
};

export default App;
