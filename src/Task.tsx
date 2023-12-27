import React from 'react';

interface TaskProps {
  id: string;
  text: string;
  completed: boolean;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, completed, onToggleTask, onDeleteTask }) => {
    const handleToggle = () => {
      onToggleTask(id);
    };
  
    const handleDelete = () => {
      onDeleteTask(id);
    }; 

  return (
    <li className={`task ${completed ? 'completed' : ''}`}>
      <label>
        <input type="checkbox" checked={completed} onChange={handleToggle} />
        <span className="toggle"></span>
        <span className="text">{text}</span>
      </label>
      <button onClick={handleDelete} className="delete">
        Удалить
      </button>
    </li>
  );
};

export default Task;