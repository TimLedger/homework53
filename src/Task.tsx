import React from 'react';

interface TaskProps {
  id: string;
  text: string;
  onDeleteTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, onDeleteTask }) => {
  const handleDelete = () => {
    onDeleteTask(id);
  };

  return (
    <div className='task'>
      <span>{text}</span>
      <button className='delete' onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default Task;
